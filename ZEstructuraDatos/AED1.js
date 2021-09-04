class Persona {
  //*atrubutos
  //* tiene como objetivo inicializar un objeto y se va a asignar los valores iniciales
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //métodos
  diHola() {
    console.log("Hola " + this.nombre);
  }
  diAdios() {
    console.log("Adiós " + this.nombre);
  }
  muestraEdad() {
    console.log(this.nombre + " tiene " + this.edad + " años ");
  }
}

var daniel = new Persona("Daniel", 26);
daniel.diHola();
daniel.diAdios();
daniel.muestraEdad();

var ruben = new Persona("Ruben", 15);
ruben.diHola();
ruben.diAdios();
ruben.muestraEdad();
