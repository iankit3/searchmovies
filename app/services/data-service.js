class Data {
    static getData(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'json';
            xhr.onload = function () {
                if (xhr.status == 200) resolve(xhr.response)
                else reject(Error(xhr.statusText))
            }
            xhr.send();
        })
    }
}

export default Data;