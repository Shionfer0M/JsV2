//TODO: Ete tipo de función se introdujo a partir de la versión ES6+
//*Declaración Función de tipo Expresión
let sumar = function (a, b) {
  return a + b;
};

resultado = sumar(1, 2);
console.log(resultado);

const sumarFuncionTipoFlecha = (a, b) => a + b; //! Es mejor utilizar const SI QUEREMOS PODEMOS OMITIR LA PALABRA RESERVADA FUNCTION
//! La flecha se define el cuerpo de la función, ANTES DE (a,b) se omite la palabra function pero es una function que se llama
//! CON LA FUNCIÓN TIPO DLECHA SE ESPERA RETURNAR UN RESULTADO O VALOR (SE OMITE LA PALABRA RETURN)
//TODO: LA FUNCIÓN TIPO FLECHA ES EQUIVALENTE A LA FUNCIÓN TIPO EXPRESIÓN
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);
