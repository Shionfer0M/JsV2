//TODO: Utilizando Break
for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 == 0) {
    console.log(contador);
    break; //! Se rompe cuando cumple la primer condición;
  }
}
console.log("Fin del ciclo for");
