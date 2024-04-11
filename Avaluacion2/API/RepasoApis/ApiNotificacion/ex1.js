// Función para mostrar la notificación
function mostrarNotificacion() {
  const iconoURL = "bandeira-galicia.png"; // Ruta al icono de la bandera gallega
  const titulo = "PULSA PARA REDIRIXIR";
  const opciones = {
    body: "Haz clic para ir a edu.xunta.gal",
    icon: iconoURL,
  };

  // Crear la notificación
  const notificacion = new Notification(titulo, opciones);

  // Evento al hacer clic en la notificación
  notificacion.onclick = function () {
    // Redirigir al usuario al sitio web
    window.location.href = "https://edu.xunta.gal";
  };
}
