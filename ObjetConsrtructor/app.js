//objet constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

const tarea1 = new Tarea("aprender Javascript", "urgente");
const tarea2 = new Tarea("Cambiar la llave", "urgente");
const tarea3 = new Tarea("Preparar la clase", "media");
const tarea4 = new Tarea("cambiar el auto", "Baja");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);
