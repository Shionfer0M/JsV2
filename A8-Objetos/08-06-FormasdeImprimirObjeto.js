//TODO: Formas de imprimir un objeto
//TODO: Agregar o eliminar las propiedades de un objeto
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@gmail.com",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
console.log(persona.nombreCompleto());
persona.tel = "5443322"; //! ASI SE AÑADE UN OBJETO
console.log(persona);

delete persona.tel; //! Así se borra un propiedad y valor agregado en el objeto
console.log(persona);

//TODO: FORMA DE IMPRIMIR OBJETO CUANDO ESTAMOS EN UN NAVEGADOR WEB
//*Concatenar cada valor de cada propiedad
console.log(persona.nombre + "," + persona.apellido);
//*Iterar cada una de las propiedad utilizando for
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]); //! Se recorre y se imprime todas las propiedades y sus valores
}

//*Otra forma
let personaArray = Object.values(persona);
console.log(personaArray);

//* Otra forma
let personaString = JSON.stringify(persona); //todo lo vueleve en cadena
console.log(personaString);
