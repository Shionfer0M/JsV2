// TODO: Se aplicara la palabra reservada 'continue' que si se pone en un ciclo ejecuta las siguientes lineas
for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 !== 0) {
    continue; //! Esta palabra reservada hace ir a la siguiente interación
  }
  console.log(contador);
}
