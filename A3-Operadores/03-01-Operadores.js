// TODO: Operadores aritmeticos 
// ? + Adicion = Suma
// ? - Substracción = Resta
// ? * Multiplicación
// ? ** Exponentes a partir de ES2016
// ? / Division
// ? % Módulo o Residuo de una división
// ? ++ Incremento
// ? -- Decremento

let a= 3, b=2;
let z = a+b;
console.log('Resultado de la suma: ' + z);

z= a-b;
console.log('Resultado de la resta: ' + z);

z= a*b;
console.log('Resultado de la multiplicación: ' + z);

z = a/b;
console.log('Resultado de la división: ' + z);

z= a%b;
console.log('Resultado de la operación modulo o residuo: ' + z);

z= a ** b;
console.log('Resultado de la opreación exponente: ' + z);

// * Incremento
//* Pre-incremento (el opreador ++ antes de al variable)
z= ++a; //! Primero se incrementa a de 3 + 4 y despues se guarda en z
console.log(a);
console.log(z); //! Se incrementa antes
//* Pos-incremento (el operado ++ después de la variable)
z = b++;
console.log(b); //! Se asinga el valor de b a z y después incrementa
console.log(z); //! Se incrementa después lo normal

//* Decremento
//! a ahora vale 4
z= --a;
console.log(z);
//* b vale 3
z= b--;
console.log(b); //! Hasta la siguiente linea se decrementa
console.log(z); //! A z se le asingo el valor de b

