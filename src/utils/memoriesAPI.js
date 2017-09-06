import tokenService from './tokenService';

const BASE_URL = '/api/memories';

function index() {
    return fetch(BASE_URL, getAuthRequestOptions('GET'))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad credentials');
    })
    .then(memories => memories);
};

function create(body) {
    return fetch(BASE_URL, getAuthRequestOptions('POST', body))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Post failed');
    })
    .then(memory => memory);
};

/*----- Helper Functions -----*/

function getAuthRequestOptions(method, body) {
    if (method.toLowerCase() === 'post') {
        return {
            method: method,
            headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken(),
                                'Content-Type': 'application/json'}),
            body: JSON.stringify(body)
        };
    } else {
        return {
            method: method,
            headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
        };
    }
};

export default {
    index,
    create
};