/*
TODO: Ejemplos de tipos de datos en JavaScript
*/
// ! Tipo de dato string
var nombre = "Fernando";
console.log(nombre);

nombre = 10.5;
console.log(typeof nombre) // ! typeof es para saber el tipo de dato
// !Tipo de dato numerico
var numero = 1000;
console.log(numero);

// !Tipo de dato objeto 
var objeto = {
    nombre: "Fer",
    apellido: "Ramírez",
    telefono: "5581271212"
}
console.log(objeto);

console.log(typeof objeto);

// !Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

// !Tipo de dato function
// !Una función también es un tipo de dato
function miFuncion(){
    console.log(miFuncion);
    console.log(typeof miFuncion);
}

// !Tipo de dato Symbol
var simbolo = Symbol("mi simbolo"); // !Para valor unico de una variable
console.log(simbolo);
console.log(typeof simbolo);

// !Clase
// !Las clases también son funciones
class Persona{
    constructor(nombre,apellido)   {//! Atributos
        this.nombre = nombre;
        this.apellido= apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// !Tipo de dato undefined no esta definida pero es un tipo de dato
// !Es un valor que se le puede de dar a una variable pero también es un tipo de dato
var x;
console.log(x); 
// TODO: Puede asignarle un valor
x= undefined;
console.log(typeof x);
// !null = ausencia de valor es un objeto
var y= null;
console.log(y);
console.log(typeof y);

//* Arreglos en Javascript
// ! Los arreglos son objetos
var autos = ['BMW', 'AUDI', 'VOLVO'];
console.log(autos);
console.log(typeof autos);

// !Valores vacios o cadenas vacias
var z = '';
console.log(z);
console.log(typeof z);