//require('./index.js');
const fs = require('fs');
const path = require('path');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Funcion para verificar si en el path hay un archivo .md
isMd = (filePath) => {
    if (path.extname(filePath) === '.md') {

        return true
    }
    else {
        return false
    }
};

//Funcion para leer el archivo .md
readFile = (fileName) => {
    let content = fs.readFileSync(fileName, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
    });
    return content;
}

//Funcion para imprimir los links 
getURLs = (data) => {
    //console.log(data)
    var urlRegex = /https?:\S+\w/g;
    var links = data.match(urlRegex)
    return links;
}

iterateURLs = (URLS) => {
    for (i = 0; i < URLS.length; i++) {
        getStatus(URLS[i])
    }
}

getStatus = (url) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status === 200) {
            console.log(url, "Status: ", xhttp.status);
        } else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log(url, "Status: ", xhttp.status);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


//export permite que use la logica de otro archivo (asi node sabe que hay mas logica en otros archivos) 
module.exports = {
    isMd,
    readFile
}