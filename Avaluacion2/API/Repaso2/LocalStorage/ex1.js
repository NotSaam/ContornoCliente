// Obter a data actual como string
let dataSistema = new Date().toLocaleDateString();

// Preguntar o nome do usuario
let nomeUsuario = prompt("Por favor, introduce o teu nome:");

if (nomeUsuario) { // Se o usuario escribiu algo
  // Gardar a información en LocalStorage
  localStorage.setItem(nomeUsuario, dataSistema);
  
  // Mensaxe para mostrar na páxina HTML
  let mensaje = `Nome do usuario: ${nomeUsuario}. Data do sistema: ${dataSistema}.`;

  // Engadir á páxina HTML
  let divDatosLocalStorage = document.getElementById("datosLocalStorage");
  divDatosLocalStorage.textContent = mensaje;
} else {
  console.log("Non se gardou a información en LocalStorage porque o nome do usuario está baleiro ou foi cancelado.");
}
