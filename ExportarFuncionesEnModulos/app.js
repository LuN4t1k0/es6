//modulos JavaScript
//nos permite separar nuestros archivos dentro de distintos
//y nos permite importar unicamente lo que necesitamos
// en react utilizaremos mucho esta opcion
import { nombreTarea, crearTarea, tareaCompletada } from "./tareas.js";

const tarea1 = crearTarea("pasear al perro", "media");

console.log(tarea1);
console.log(nombreTarea);
tareaCompletada();
