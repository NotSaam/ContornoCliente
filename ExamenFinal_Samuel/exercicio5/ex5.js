// Comprobar se estamos en abril (mes 3 en JavaScript porque comeza en 0)
let mesActual = new Date().getMonth();
if (mesActual !== 3) { // 3 para abril
  console.log("Non estamos en abril.");
} else {
  // Pedir permiso para obter a xeolocalización
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      
      // Crear mensaxe coa posición e o mes
      let mensaje = `Posición: ${latitude}, ${longitude}. Mes: Abril.`;
      
      // Engadir á páxina HTML
      let divDatosPosicionamento = document.getElementById("datosPosicionamento");
      divDatosPosicionamento.textContent = mensaje;
    }, function(error) {
      console.error("Houbo un erro ao obter a posición:", error.message);
    });
  } else {
    console.log("O navegador non soporta xeolocalización.");
  }
}
