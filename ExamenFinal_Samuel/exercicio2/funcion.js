let arrayNums = new Array();

let num1 ="9";
let num2= "2";
let num3="5";


const crearArray = () => {
  arrayNums.push(num1,num2,num3);
}

const mostrarArray = () =>{
    for (var i =0;i<arrayNums.length;i++){
        console.log(arrayNums[i]);
    }
}
export{crearArray,mostrarArray};