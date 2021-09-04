//TODO: Estructura Switch
let numero = 3;
let numeroTexto = 'Valor desconocido';

switch(numero){
    case 1:
        numeroTexto= "Número uno";
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default: //! Si no cumple ninguno de los casos
        numeroTexto = 'Caso no encontrado';
        break;
}
console.log(numeroTexto);