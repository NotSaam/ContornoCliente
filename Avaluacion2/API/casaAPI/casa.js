// Solicitar os datos da casa
var direccion = prompt("Introduce a dirección da casa:");
var valorCatastral = prompt("Introduce o valor catastral da casa:");
var anoDeConstruccion = prompt("Introduce o ano de construción da casa:");

// Crear o obxecto casa
var casa = {
    direccion: direccion,
    valorCatastral: valorCatastral,
    anoDeConstruccion: anoDeConstruccion
};

// Converter o obxecto casa a unha cadea JSON e gardalo en localStorage
localStorage.setItem('datosCasa', JSON.stringify(casa));

// Recuperar o obxecto casa de localStorage e converter de JSON a un obxecto de JavaScript
var casaRecuperada = JSON.parse(localStorage.getItem('datosCasa'));

// Amosar os datos da casa recuperada
for (const clave in casaRecuperada) {
document.write(`<li><strong>${clave}:</strong> ${casaRecuperada[clave]}</li>`);
    }