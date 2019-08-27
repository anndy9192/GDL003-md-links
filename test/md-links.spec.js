const mdLinks = require('../markdown.js');


describe('filePath', () => {
  //ponemos una breve descripcion de lo que queremos que haga esa funcion
  it('should retun true for a valid .md file', () => {
    //expect es la expectativa mdLinks el nombre de mi funcion y dentro de los parentesis la ruta para ver si sirve esa funcion  y el .tobe para ver lo que esperamos 
    expect(mdLinks.isMd('../PRUEBA.md')).toBe(true);

  });
  it('should retun false for a valid .md file', () => {
    expect(mdLinks.isMd('../index.js')).toBe(false);

  });
});

describe ('readFile', () =>{

  it('read the file .md', () =>{
    expect(mdLinks.readFile('./PRUEBA.md')).toBe("hola[google](www.google.com)http://www.google.com,google.com");
  });

  it('err',() => {
    expect(mdLinks.readFile('./PRUEBA.mds')).rejects.toThrow("ENOENT: no such file or directory, open 'PRUEBA1.md'");
  })
});

describe ('getURLs', () =>{

  it('search and print url', () =>{
    expect(mdLinks.getURLs('./getURLs.md')).toBe("https://lms.laboratoria.la/courses");
  });
/*
  it('err',() => {
    expect(mdLinks.readFile('./PRUEBA.mds')).rejects.toThrow("ENOENT: no such file or directory, open 'PRUEBA1.md'");
  })
  */
});