var pcInfo = {
    referencia: "23434",
    modelo: "12700k",
    ram: "16",
    discoDuro: "sdd",
    procesador: "i9",
    sistemaOperativo: "windows",
};


let arraypc = new Array();


for(let i=0; i<2 ; i++){
    let referencia1=prompt("referencia?");
    let modelo1=prompt("Modelo?");
    let ram1=prompt("Ram?");
    let discoDuro1=prompt("Disco duro?");
    let procesador1=prompt("Procesador?");
    let sistemaOperativo1=prompt("Sistema Operativo?");



//importante esto de crear o objeto
    let pc = Object.create(pcInfo);
    pc.referencia=referencia1;
    pc.modelo=modelo1;
    pc.ram=ram1;
    pc.discoDuro=discoDuro1;
    pc.procesador=procesador1;
    pc.sistemaOperativo=sistemaOperativo1;

    arraypc.push(pc);
}




//guardar info
for(let i=0; i<2 ; i++){
    localStorage.setItem(i,JSON.stringify(arraypc[i]));
}


//recuperar info
for (let i = 0; i < arraypc.length; i++) {
    let pcGuardado2 = JSON.parse(localStorage.getItem(i));
    document.write("<h2>Ordenador " + (i + 1) + "</h2>");
    document.write("<p>Referencia: " + pcGuardado2.referencia + "</p>");
    document.write("<p>Modelo: " + pcGuardado2.modelo + "</p>");
    document.write("<p>Ram: " + pcGuardado2.ram + "</p>");
    document.write("<p>Disco Duro: " + pcGuardado2.discoDuro + "</p>");
    document.write("<p>Procesador: " + pcGuardado2.procesador + "</p>");
    document.write("<p>Sistema operativo: " + pcGuardado2.sistemaOperativo + "</p>");

    document.write("<hr>");
}