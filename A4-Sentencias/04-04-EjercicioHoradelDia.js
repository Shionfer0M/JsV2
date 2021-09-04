// TODO: Ejercicio dependiento la hora dar mensaje de buenos días, tardes, noches
let horaDia = 12;
let mensaje;

if(horaDia>=6 && horaDia <= 11){
    mensaje= "Buenos días"
    console.log(mensaje);
}
else if(horaDia>=12 && horaDia <=18){
    mensaje = "Buenas tardes"
    console.log(mensaje);
}
else if(mes==6 || mes ==7 || mes == 8){
    estacion = "Verano"
    console.log(estacion);
}
else if(horaDia>=19 && horaDia <=24){
    mensaje = "Buenas noches"
    console.log(mensaje);
}
else if(horaDia>=0 && horaDia <=6){
    mensaje = "Durmiendo"
    console.log(mensaje);
}
else{
    mensaje="Valor incorrecto"
    console.log(mensaje);
}
