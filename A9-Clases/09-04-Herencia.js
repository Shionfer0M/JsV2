//TODO: HERENCIA
//* La clase hija (Empleado) va a heredar propiedades y métodos de la Clase padre(Persona)
//* Sin necesidad de declarar otra vez las mismas propiedades
//* La clase Empleado tiene ciertas propiedades dependientes
//* SE HACE ESTO CON DIAGRAMA UML - UNDIFIED MODELING LANGUAGUE
//* www.umletino.com Herramienta gratuita online
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
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    //! Dentro de una Clase no es necesario poner la palabra reservada  function
    return this._nombre + " " + this._apellido;
  }
}
//* CREANDO LA CLASE HIJA
class Empleado extends Persona {
  //! Con 'extends' heredamos las propiedades de la clase padre 'Persona'
  constructor(nombre, apellido, departamento) {
    //* Siempre debemos ocuar la palabra reservada super() y dentro de ella los parametros
    super(nombre, apellido); //* Con esto llamamos al constructo de la clase padre
    this._departamento = departamento; //! Ocupamos el '_' porque emplearemos el método set y get y esos ya son los nombres bien
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas"); //! Se debe de pasar parametros de la clase padre Persona
console.log(empleado1);
//* Ahora vamos a imprimir la propiedad nombre que es de la clase Padre pero en Empleado
console.log(empleado1.nombre);
//* Acceder al método nombreCompleado desde empleado
console.log(empleado1.nombreCompleto());
