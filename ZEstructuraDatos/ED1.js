//TODO: FILA
class Queue {
  constructor() {
    this.items = {}; //! Objeto que se inicializa en 0
    this.front = 0;
    this.end = 0;
  }
  enqueue(data) {
    //* la función enque: recibe valores y los introduce a un objeto de items
    this.items[this.end] = data;
    this.end++; // Cuantos valores han sido metidos a la fila
  }
  //*esta función saca los valores de laa fila
  dequeue() {
    if (this.front === this.end) {
      return null;
    }
    const data = this.items[this.front]; //*this.front es el primero en entrar sería el primero en salir
    delete this.items[this.front];
    this.front++; //* Ya no va a apuntar en el primero si no al segundo ATIENDE AL SEGUNDO DE LA FILA EN LA SIGUIENTE ITERACIÓN
    return data;
  }

  getSize() {
    return this.end - this.front; //* Devuelve la totalidad de los valores
  }

  isEmpty() {
    //*Si esta o no vacia la fila muestra true o false
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }
  peak() {
    //* Obtenemos el primer valor de la fila sin sacarlo
    if (this.getSize() === 0) {
      return null;
    } else {
      return this.items[this.front];
    }
  }
  print() {
    if (this.getSize() === 0) {
      return null;
    }

    let result = "";
    for (let i = this.front; i < this.end; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}

const queue = new Queue();
//TODO: Inserta las propiedades en el container
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue("Pedro");

//TODO: Quita los 2 primeros en la fila
console.log(queue.dequeue()); //Va a salir este primero
console.log(queue.dequeue()); //Ahora apunta al segundo y es el segundo en salir
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//TODO: Obteniendo el tamaño de la fila
console.log(queue.getSize()); //* Retorna cuantos valores quedaron en total eran 4 se borraron 2 y quedam 2
//console.log(queue);
//TODO: Comprobando si esta vacia o no
console.log(queue.isEmpty());
//TODO: Llamando al primer elemento
console.log(queue.peak()); //* Como quitamos los 2 primeros ahora el primero en la fila es 3
//TODO: Imprime todos los valores
console.log(queue.print());
