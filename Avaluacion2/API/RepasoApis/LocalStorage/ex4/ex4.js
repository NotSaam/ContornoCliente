// Array de mapas para almacenar los barcos
let barcos = [];

// Pedir al usuario el nombre y año de construcción de 5 barcos
for (let i = 0; i < 5; i++) {
  let nombre = prompt("Introduce el nombre del barco:");
  let ano = prompt("Introduce el año de construcción del barco:");

  // Crear un mapa para cada barco y agregarlo al array
  let barco = new Map();
  barco.set("Nombre", nombre);
  barco.set("Año de Construcción", ano);
  barcos.push(barco);
}

// Almacenar los barcos en el LocalStorage
localStorage.setItem("barcos", JSON.stringify(barcos));

// Solicitar al usuario el nombre de un barco para eliminar
let nombreEliminar = prompt("Introduce el nombre del barco que deseas eliminar:");

// Buscar y eliminar el barco del LocalStorage
let barcosGuardados = JSON.parse(localStorage.getItem("barcos"));
let barcoEncontrado = false;

for (let i = 0; i < barcosGuardados.length; i++) {
  if (barcosGuardados[i].get("Nombre") === nombreEliminar) {
    barcosGuardados.splice(i, 1);
    barcoEncontrado = true;
    break;
  }
}

// Actualizar el LocalStorage con los barcos restantes
localStorage.setItem("barcos", JSON.stringify(barcosGuardados));

// Mostrar mensaje dependiendo del resultado
if (barcoEncontrado) {
  console.log("El barco ha sido eliminado correctamente.");
} else {
  console.log("El barco no ha sido encontrado en la lista.");
}
