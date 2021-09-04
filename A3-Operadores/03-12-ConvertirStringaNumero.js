// TODO: Convertir string a número

let miNumero="10"
//* console.log(typeof miNumero);

let edad= Number(miNumero)  //! Number convierte string a number o número
console.log(typeof edad);
if(edad >= 18){
    console.log("Puede votar");
}
else{
    console.log("No puede votar");
}

//! Utilizando operador ternario
let resultado= (edad>=18) ? "Puede votar": "Muy joven para votar";
console.log(resultado);