import Tarea from "./tareas.js";
import ComprasPendientes from "./compras.js";

const tarea1 = new Tarea("Aprender JavaScript", "Urgente");
const compra1 = new ComprasPendientes("Aprender ReactJS", "urgente", "x3");

console.log(tarea1.mostrar());
compra1.mostrar();
