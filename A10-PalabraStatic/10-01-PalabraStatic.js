//TODO: PALABRA STATIC
//* LA CLASE OBJECT ES EL PADRE DE TODAS LAS CLASES
//* CONTIENE VARIOS MÉTODOS toString() = Manda a imprimir información del estado del objeto, los valores actuales de nuestros atributos de nuestro objeto
class Persona {
  static contadorPersonas = 0;
  constructor(nombre, apellido1) {
    //* ESTE ES MI PRIMER MÉTODO
    this._nombre = nombre; //! Para comodidad y utilizar el método GET y SET agregamos _ EL MÉTODO GET NO SE PUEDE LLAMAR IGUAL QUE LA PROPIEDAD POR ESO EL _
    this._apellido = apellido1;
    this.idPersona = ++Persona.contadorPersonas; //* Se hace un preincremento si se quiere normal es Persona.contadorPersonas++, Pero este contador tambien contabiliza los neuvos empleados
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
    return this.idPersona + " " + this._nombre + " " + this._apellido;
  }
  //* SOBREESCRIBIENDO EL MÉTODO DE LA CLASE PADRE (OBJECT)
  toString() {
    //TODO: Aquí esta el toString
    //* SE APLICA POLIMORFISMO EN ESTA LLAMADA(MULTIPLES FORMAS EN TIEMPO DE EJECUCIÓN)
    //* EL MÉTODO QUE SE EJECUTA DEPENDE SI ES UNA REFERENCIA DE TIPO PADRE
    //* O DE TIPO HIJO
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("saludos desde método static");
  }
  static saludar2(persona) {
    console.log(persona.nombre);
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
  //*Sorbeescritura
  nombreCompleto() {
    return super.nombreCompleto() + "," + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas"); //! Se debe de pasar parametros de la clase padre Persona
console.log(empleado1);

console.log(Persona.contadorPersonas); //! Cuantas Personas o Empleados JUNTOS EN TOTAL HAY

let persona2 = new Persona("Karla", "Ramírez");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);
