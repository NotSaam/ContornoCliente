document.addEventListener("DOMContentLoaded", function() {
    const obtenerUbicacionBtn = document.getElementById("obtener-ubicacion");
    const coordenadasDiv = document.getElementById("coordenadas");

    obtenerUbicacionBtn.addEventListener("click", function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitud = position.coords.latitude;
                const longitud = position.coords.longitude;

                coordenadasDiv.innerHTML = `Latitud: ${latitud}, Longitud: ${longitud}`;
            });
        }
    });
});
