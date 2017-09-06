import tokenService from './tokenService';

function imgUpload(imageFiles, cid) {
    console.log(cid);
    return new Promise(function(resolve, reject) {
        if(imageFiles.length) {
            var promises = [];
            imageFiles.forEach(file => {
                promises.push(
                    fetch('https://api.imgur.com/3/image', {
                        method: 'POST',
                        body: file,
                        headers: new Headers({
                            'Authorization': 'Client-ID ' + cid
                        })
                    })
                    .then(res => res.json())
                    .then(imgObj => imgObj.data.link)
                );
            });
            Promise.all(promises).then(results => resolve(results));
        } else {
            resolve([]);
        }
    });
}

function getCID() {
    return new Promise(function(resolve, reject) {
        fetch('/api/imgur', {
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
        })
        .then(res => {
            resolve(res.json())
        })
    })
}

export default {
    imgUpload,
    getCID
}