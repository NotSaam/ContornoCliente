 let nombreFinca = prompt ("Nombre da finca?");
 let extension = prompt ("Extension?");
 let tipoSolo = prompt ("Tipo de solo?");
 let valorCatastral = prompt ("Valor catastral?");

 try{
  if(nombreFinca == "" || extension == "" || tipoSolo == "" ||valorCatastral == ""){
  throw new Error("Error. Alguns dos valores introducidos estan en branco");
 } else{
  var object = ("nombreFinca",nombreFinca,"extension:",extension,"tipoSolo",tipoSolo,"valorCatastral",valorCatastral)
 }

 }catch (error){
 document.write(error.message);
} finally {
  document.write("<br>O programa intentou acceder a propiedade");
}