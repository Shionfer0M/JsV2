//TODO: Creando objetos con la sintaxis Object

var persona = new Object();
//* Agregando propiedades
persona.nombre = "Ana";
persona.apellido = "Pinedo";
persona["trabajo"] = "WebDeveloper";
console.log(persona);

//TODO: OBJETOS Y MÉTODOS (Son funciones que estan dentro del objeto y se vuelven métodos)

var empleado = {
  //TODO: PROPIEDADES
  nombre: "Pablo",
  apellido: "Vásquez",
  gustos: ["Futboll", "Peliculas", "Inglés"],
  trabajo: "Instructor",
  esCasado: true,
  fechaNacimiento: 1985,
  //TODO: MÉTODOS
  //*Creando método que calcula la edad de la persona
  calcularEdad: function () {
    this.edad = 2019 - this.fechaNacimiento;
  },
};
//* Aquí se llama todo el objeto pero antes tenemos que llamar a la función para que compile la edad
empleado.calcularEdad();
//*Aquí ya devuelve todo la edad ya esta calculada y se guardo
console.log(empleado);

var edad = empleado.calcularEdad(1985);
console.log(edad);

//TODO: Ocupa una propiedad dentro de un objeto con el operador this
