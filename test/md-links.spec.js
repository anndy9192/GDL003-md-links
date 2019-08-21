const mdLinks= require('../index.js');


describe('filePath', () => {
//ponemos una breve descripcion de lo que queremos que haga esa funcion
  it('should retun tru for a valid .md file', () => {
    //expect es la expectativa mdLinks el nombre de mi funcion y dentro de los parentesis la ruta para ver si sirve esa funcion  y el .tobe para ver lo que esperamos 
    expect(mdLinks.isMd('../PRUEBA.md')).toBe(true);
    
  });
  it('should retun false for a valid .md file', () => {
    expect(mdLinks.isMd('../index.js')).toBe(false);
    
});
});