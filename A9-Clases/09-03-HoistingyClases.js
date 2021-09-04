//TODO: HOISTING Y CLASES
//! Cuando estamos trabajando con clases no podemos utilizar HOISTING
//* No es posible hacer esto
//* let persona2= new Persona('Karla','Juarez');

class Persona {
  constructor(nombre, apellido1) {
    //* ESTE ES MI PRIMER MÉTODO
    this._nombre = nombre; //! Para comodidad y utilizar el método GET y SET agregamos _ EL MÉTODO GET NO SE PUEDE LLAMAR IGUAL QUE LA PROPIEDAD POR ESO EL _
    this._apellido = apellido1;
  }
  get nombre() {
    //* ESTE ES MI SEGUNDO MÉTODO
    return this._nombre;
  }
  set nombre(nombre) {
    //! Para modificar el nombre
    this._nombre = nombre; //* Este es el tercer método
  }
}

let persona1 = new Persona("Juan", "Perez");
persona1.nombre = "Juan Carlos";
console.log(persona1.nombre);
