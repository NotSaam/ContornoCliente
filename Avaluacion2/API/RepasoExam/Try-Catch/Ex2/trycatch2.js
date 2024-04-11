try {
    // Solicitar al usuario que ingrese un correo electrónico
    let correo = prompt("Introduce tu correo electrónico:");

    // Expresión regular para validar el formato del correo electrónico
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico coincide con el formato válido
    if (!regexCorreo.test(correo)) {
        throw new Error("Correo electrónico no válido");
    }

    // Si no se lanzó un error, mostrar el correo electrónico
    console.log("El correo electrónico introducido es:", correo);
} catch (error) {
    // Capturar y manejar el error
    console.error("Error:", error.message);
    console.log("El correo electrónico introducido no es válido.");
} finally {
    // Indicar que se comprobó el correo electrónico
    console.log("Se comprobó el correo electrónico.");
}
