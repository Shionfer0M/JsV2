//TODO: PASO POR REFERENCIA EN FUNCIONES
const persona = {
  nombre: "Juan", //! Esto es referencia
  apellido: "Perez", //! Esto es referencia y los atributos el el nombre y apellido
}; //! Creamos un objeto

function cambiarValorObjeto(p1) {
  p1.nombre = "Carlos"; //!Accedemos a los atributos de nuestro objeto AQUI MODIFICAMOS EL ATRIBUTO NOMBRE
  p1.apellido = "Lara";
}
//*Pao por referencia
cambiarValorObjeto(persona); //! Con esto se pasa el paso por referencia
console.log(persona);
