try {
    // Solicitar al usuario que introduzca un correo electrónico
    let correo = prompt("Introduce tu correo electrónico:");
  
    // Expresión regular para validar el formato del correo electrónico
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Verificar si el correo electrónico coincide con el formato válido
    if (!regexCorreo.test(correo)) {
      throw new Error("Correo electrónico no válido");
    }
  
    // Si no se lanzó un error, mostrar un mensaje de correo válido
    document.write("<p>El correo electrónico introducido es válido.</p>");
  } catch (error) {
    // Capturar y manejar el error
    document.write("<p>Error: " + error.message + "</p>");
    document.write("<p>El correo electrónico introducido no es válido.</p>");
  } finally {
    // Mostrar un mensaje indicando que se comprobó el correo electrónico
    document.write("<p>Se ha comprobado el correo electrónico.</p>");
  }
  