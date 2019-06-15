export const nombreTarea = "pasear al Perro";

//Esportar una function

export const crearTarea = (tarea, urgencia) => {
  return `La tarea ${tarea} tiene una urgencia ${urgencia}`;
};

export const tareaCompletada = () => {
  console.log("la tarea se completo");
};

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
