//TODO: PILA (STACK)
class Stack {
  constructor() {
    this.items = {}; //* Almacena toda la información o propiedades
    this.top = 0; //* Toma el registro del ultimo en entrar
  }
  //* Mete la información en la pila
  push(data) {
    this.top++;
    this.items[this.top] = data;
  }
  //* Saca el elemento
  pop() {
    let deleteData;

    if (this.top !== 0) {
      deleteData = this.items[this.top];
      delete this.items[this.top];
      //* Va a disminuir un valor es el que se saca
      this.top--;
      return deleteData;
    }
  }
  //* Devolviendo el tamaño de la pila
  getSize() {
    return this.top;
  }
  //* De vuelve true si la pila esta vacia o false si no esta vacia
  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }
  //*Devuelve el siguiente valor de la pila sin sacarlo SE FIJA CUAL ES EL SIGUIENTE PARA SACAR
  peak() {
    if (this.isEmpty() === 0) {
      return null;
    } else {
      return this.items[this.top]; //* this.top apunta al elemento que esta ahi o se pide
    }
  }
  //* imprimimos
  print() {
    let resultado = "";
    //*for lop al reves
    for (let i = this.top; i > 0; i++) {
      resultado += this.items[i] + " ";
    }
    //Devolvemos los valores que quedaron en la pila PLATO 1, PLATO 2, PLATO 3,.....
    return resultado;
  }
}

const stackpil = new Stack();
//TODO: Llamando push e introduciendo el plato número 1
stackpil.push("Plato 1");
stackpil.push("Plato 2");
stackpil.push("Plato 3");
console.log(stackpil.peak()); //este es el plato a salir sin ser eliminado solo nos fijamos cual sigue
//* Este plato es el ultimo va a salir
console.log(stackpil.pop());
console.log(stackpil.peak()); //este es el plato a salir sin ser eliminado solo nos fijamos cual sigue
console.log(stackpil.pop());
//console.log(stackpil.pop());
console.log(stackpil.peak()); //este es el plato a salir sin ser eliminado solo nos fijamos cual sigue

//TODO: Imprime el constructor o el objeto
console.log(stackpil); //* Aquí ya sacaron o utilizaron el plato 3 y 2
//TODO: Me fijo cuantos platos hay
console.log(stackpil.getSize()); //* 1 porque quitamos 2
//TODO: Me dice si la pila esta vacia o si tiene valores si esta vacia devuelve true
console.log(stackpil.isEmpty());
//TODO: Imprimir como tal los platos que quedan en la pila
console.log(stackpil.print());
