require('./markdown.js')

//console.log("Is MD: ", isMd(process.argv[2]))

//Funcion para leer el archivo .md
let fileContent = readFile(process.argv[2])
//console.log(fileContent)

//Funcion para ver los links
let URLS = getURLs(fileContent);
//console.log(URLS)

iterateURLs(URLS)
