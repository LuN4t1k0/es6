//Herencia

class Tarea {
  //para pasarle los argumentos hacia el objeto se usa el constructor
  //esto es lo que se va a ejecutar primero cuando crees una tarea
  //utilizamos this para que sean parte del objeto
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  //metodo es como un prototype o un funciona dentro de una clase
  mostrar() {
    return `${this.nombre} tiene una urgencia de ${this.prioridad}`;
  }
}

//otroa clase
class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    //super es porque estoy ocupando el constructor del padre para los dos primeros atributos
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }

  //al heredar de una clase tambien heradamos los metodos tal cual como funcionan en la clase padre
  //pero nosotors podemos reescribirlos utilizando el mismo nombre del metodo heredado

  mostrar() {
    //podemos hacer eso pero tambien podemos usar Super para ocupar todo el metodo anterior
    return `${this.nombre} tiene una urgencia de ${
      this.prioridad
    } y la cantidad es ${this.cantidad}`;
  }

  //puedo agregar metodos que no existan en el padre

  hola() {
    console.log("hola");
  }
}

//crear los objetos
let tarea1 = new Tarea("aprender Javascript", "Alta");
let tarea2 = new Tarea("aprender React", "Alta");
let tarea3 = new Tarea("aprender GraphQL", "Alta");
let tarea4 = new Tarea("aprender HHML", "Baja");

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

//compras
let compra1 = new ComprasPendientes("Monitor", "Urgente", "24 Pulgadas");

console.log(compra1.mostrar());
console.log(compra1.hola());
