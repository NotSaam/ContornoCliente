// Obtener el contexto del canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Configurar el rectángulo
const rectWidth = 200;
const rectHeight = 100;
const rectX = 50;
const rectY = 50;

// Dibujar el rectángulo
ctx.fillStyle = "blue"; // Color de relleno azul
ctx.fillRect(rectX, rectY, rectWidth, rectHeight); // Dibujar rectángulo lleno

ctx.strokeStyle = "red"; // Color del borde rojo
ctx.lineWidth = 2; // Ancho del borde
ctx.strokeRect(rectX, rectY, rectWidth, rectHeight); // Dibujar borde del rectángulo
