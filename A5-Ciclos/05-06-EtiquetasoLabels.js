// TODO: Etiquetas-Pueden que no sean recomendables, permite ir a una parte del programa que deseemos
inicio: for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 !== 0) {
    continue inicio; //! Esta palabra reservada hace ir a la siguiente interación
    //! Aquí la etiqueta es inicio
  }
  console.log(contador);
}
