//TODO:  Una función puede ser un objeto
function miFuncion(a, b) {
  console.log(arguments.length);
  return a + b;
}
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString(); //! Llamar a nuestra función pero en texto o string
console.log(miFuncionTexto);
