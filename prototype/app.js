//Objetos
//prototype sirve para asignar metodos a nuestros objetos de forma que estos no puedan ser utilizados por otros elementos

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

//agregar un prototype a tarea

Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre}, tiene una urgencia de ${this.urgencia}`;
};

//crear una nueva tarea
const tarea1 = new Tarea("Cristian Venegas", "Urgente");
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
