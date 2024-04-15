window.onload = function () {
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1;


    if (mesActual == 4) {
      navigator.geolocation.getCurrentPosition((posicion) => {
        let lonxitude = posicion.coords.longitude;
        let latitude = posicion.coords.latitude;


        $("#resultado").text(`A lonxitude é ${lonxitude} e a latitude é ${latitude}`);
      });
    } else {
        $("#resultado").text(`Non estamos no mes de abril`);
    }
  };