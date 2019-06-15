//Clases

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

//crear los objetos
let tarea1 = new Tarea("aprender Javascript", "Alta");
let tarea2 = new Tarea("aprender React", "Alta");
let tarea3 = new Tarea("aprender GraphQL", "Alta");
let tarea4 = new Tarea("aprender HHML", "Baja");

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());
