// Importar la función desde el módulo
const converterAMaiusculas = require('./converter');

// Cadena de ejemplo
const cadena = "Hola, Mundo!";

// Utilizar la función para convertir la cadena a mayúsculas
const cadenaEnMayusculas = converterAMaiusculas(cadena);

// Mostrar el resultado
console.log("Cadena original:", cadena);
console.log("Cadena en mayúsculas:", cadenaEnMayusculas);
