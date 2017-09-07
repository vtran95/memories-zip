import tokenService from './tokenService';

const BASE_URL = '/api/memories';

function index() {
    return fetch(BASE_URL, getAuthRequestOptions('GET'))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad credentials');
    })
};

function create(body) {
    return new Promise(function(resolve, reject) {
        fetch(BASE_URL, getAuthRequestOptions('POST', body))
        .then(res => {
            resolve(res.json());
        })
    })
};

function deleteMemory(id) {
    fetch(BASE_URL + '/' + id, getAuthRequestOptions('DELETE'))
}

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
    create,
    delete: deleteMemory
};