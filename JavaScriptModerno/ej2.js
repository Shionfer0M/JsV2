//* Ejercicio de sentencias

/* Tienes dos alumnos, Pablo y Maria
Pablo tiene las siguientes notas en el curso de Javascript: 14,8,16
Maria tiene las siguientes notas en el curso del mismo curso: 12,18,18  
Calcular el promedio de cada alumno, ademas indicar quien tiene el promedio superior,
e indcar si el alumno esta aprobado, para ello su promedio
debe de ser superior a 13*/

var alumno1 = "Pablo";
var alumno2 = "Maria";

function sumanotas(a, b, c) {
  return (a + b + c) / 3;
}
var promedioPablo = sumanotas(14, 19, 16);
console.log(promedioPablo);
var promedioMaria = sumanotas(12, 16, 10);
console.log(promedioMaria);
if (promedioPablo > 13) {
  console.log("Se aprueba con 13");
  console.log(alumno1 + " Aprobado con: " + promedioPablo);
} else {
  console.log("Se aprueba con 13");
  console.log(alumno1 + " Reprobado con: " + promedioPablo);
}

if (promedioMaria > 13) {
  console.log("Se aprueba con 13");
  console.log(alumno2 + " Aprobado con: " + promedioMaria);
} else {
  console.log("Se aprueba con 13");
  console.log(alumno2 + " Reprobado con " + promedioMaria);
}

//TODO: Utilizando template string (añadir una variable en una cadena de texto string)
var nombre = "Pablo";
//! Con comillas invertidas
console.log(`El nombre es: ${nombre}`);
