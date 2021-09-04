// TODO: Verificar que una variable sea Number
let miNumero="18x"
//*console.log(typeof miNumero);

let edad= Number(miNumero)  //! Number convierte string a number o número
console.log(edad); //! Aquí sale el NAN

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("No puede votar");
    }    
}

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
