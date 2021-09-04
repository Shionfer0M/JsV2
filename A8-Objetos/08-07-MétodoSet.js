//TODO: METODO SET PARA MODIFICAR UN OBJETO
//* Para modificar las propiedades de un objeto
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@gmail.com",
  edad: 28,
  idioma: "ES_MX",
  get lang() {
    return this.idioma.toUpperCase(); //! toUpperCase() Convierte una cadena string en MAYÚSCULAS
  },
  set lang(lang) {
    //! Para módificar los atributos de un objeto
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    //! CON GET ASÍ SE PUEDE DECLARAR UN MÉTODO O FUNCIÓN
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombreCompleto); //!YA NO SE NECESITA PONER LOS ()

//+Para llamar el método SET
persona.lang = "en";
console.log(persona.lang); //!Manda a llamar al método get
console.log(persona.idioma); //! Aquí se almacena en el set
