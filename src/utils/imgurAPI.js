
function imgUpload(imageFiles) {
    return new Promise(function(resolve, reject) {
        if(imageFiles.length) {
            var promises = [];
            imageFiles.forEach(file => {
                promises.push(
                    fetch('https://api.imgur.com/3/image', {
                        method: 'POST',
                        body: file,
                        headers: new Headers({
                            'Authorization': 'Client-ID '
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

export default {
    imgUpload
}