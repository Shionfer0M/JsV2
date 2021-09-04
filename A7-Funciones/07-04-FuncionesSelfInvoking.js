// TODO: Funciones que se mandan a llamar ellas mismas Self Invoking
(function (a, b) {
  console.log("Ejecuntando la función " + (a + b));
})(3, 4); //! Función anonima se manda de llamar con (); pero no se puede reutilizar ya no se puede a llamar más
