//TODO: MÉTODO GET Y SET EN LAS CLASES
//TODO: Clases es una plantilla
//* UNA CLASE ES UNA PLANTILLA POR EJEMPLO UNA PERSONA ES UNA CLASE
//* DESPUÉS VIENEN LOS OBJETOS QUE ENTRAN EN LA CLASE POR DECIR UNA MUJER Y UN HOMBRE
//* UN OBJETO ES UNA INSTANCIA DE UNA CLASE
//* DEPUÉS LOS OBJETOS TIENEN ATRIBUTOS Y MÉTODOS

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
