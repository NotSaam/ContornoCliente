try {
    // Solicitar al usuario que ingrese un número
    let numero = prompt("Introduce un número:");

    // Convertir la entrada a un número
    numero = Number(numero);

    // Comprobar si el número es negativo
    if (numero < 0) {
        throw new Error("Número negativo no válido");
    }

    // Si no se lanzó un error, mostrar el número
    console.log("El número introducido es:", numero);
} catch (error) {
    // Capturar y manejar el error
    console.error("Error:", error.message);
    console.log("El número introducido es inválido.");
} finally {
    // Indicar que se comprobó el número
    console.log("Se comprobó el número.");
}
