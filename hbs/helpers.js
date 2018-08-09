const hbs = require('hbs');

//hbs Helpers
hbs.registerHelper('getYear', () => new Date().getFullYear());
hbs.registerHelper('capitalizar', (texto) => {
    //Funcion que recoge un texto, y capitaliza la primera letra y lo demas queda en minusculas
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});