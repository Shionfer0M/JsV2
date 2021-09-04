//TODO: MÉTODO GET EN JAVASCRIPT
//* Para acceder a las propiedades de un objeto
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@gmail.com",
  edad: 28,
  get nombreCompleto() {
    //! CON GET ASÍ SE PUEDE DECLARAR UN MÉTODO O FUNCIÓN
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombreCompleto); //!YA NO SE NECESITA PONER LOS ()
