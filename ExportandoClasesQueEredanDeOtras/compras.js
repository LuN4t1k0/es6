import Tarea from "./tareas.js";
export default class ComprasPendientes extends Tarea {
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
