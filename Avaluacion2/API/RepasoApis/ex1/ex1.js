// Pedir os datos ao usuario
var nome = prompt("Introduce o nome do barco:");
var portoBase = prompt("Introduce o porto base do barco:");
var anoConstrucion = prompt("Introduce o ano de construción do barco:");
var eslora = prompt("Introduce a eslora do barco:");

// Crear un obxecto coa información
var barco = {
  nome: nome,
  portoBase: portoBase,
  anoConstrucion: anoConstrucion,
  eslora: eslora
};

// Convertir o obxecto a JSON
var barcoJSON = JSON.stringify(barco);

// Gardar o JSON en LocalStorage
localStorage.setItem("barco", barcoJSON);

// Mostrar unha mensaxe de confirmación
alert("O obxecto do barco foi gardado en LocalStorage.");

// Podes acceder ao obxecto almacenado en LocalStorage en calquera momento
// Para facelo, podes usar:
// var obxectoRecuperado = JSON.parse(localStorage.getItem("barco"));
