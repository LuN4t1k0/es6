const nombreTarea = "pasear al Perro";
const tarea = "tarea";

export default {
  nombre: nombreTarea,
  tarea: tarea
};
//esto hace que ya no tenga que ocupar las llaves en el app.js {nombreTarea}
//solamente podemos exportar una variable por default el resto debe ir en llaves
//para exportar multiples valores se puede crear un objeto
//se puede exportar todo

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  mostrar() {
    return `${this.nombre} tiene una urgencia de ${this.prioridad}`;
  }
}

class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }

  mostrar() {
    return `${this.nombre} tiene una urgencia de ${
      this.prioridad
    } y la cantidad es ${this.cantidad}`;
  }

  hola() {
    console.log("hola");
  }
}

// let tarea1 = new Tarea("aprender Javascript", "Alta");
// let tarea2 = new Tarea("aprender React", "Alta");
// let tarea3 = new Tarea("aprender GraphQL", "Alta");
// let tarea4 = new Tarea("aprender HHML", "Baja");

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

let compra1 = new ComprasPendientes("Monitor", "Urgente", "24 Pulgadas");

// console.log(compra1.mostrar());
// console.log(compra1.hola());
