//metodos en arreglos

const personas = [
  { nombre: "Cristian", edad: 35, aprendiendo: "JavaScript" },
  { nombre: "Jacqueline", edad: 35, aprendiendo: "Ingles" },
  { nombre: "Roberto", edad: 33, aprendiendo: "AirSoft" },
  { nombre: "Fernand0", edad: 18, aprendiendo: "Soldadura" },
  { nombre: "Gustavo", edad: 28, aprendiendo: "Excel" }
];

console.log(personas);

//filtra cuales son mayores de 28 años

const mayores = personas.filter(persona => {
  return persona.edad > 28;
});

console.log(mayores);

//que aprende Jacqueline y su edad
const jacqueline = personas.find(persona => {
  return persona.nombre === "Jacqueline";
});

console.log(`Jacqueline esta aprendiendo ${jacqueline.aprendiendo}`);
console.log(`Jacqueline tiene ${jacqueline.edad}`);

//reduce puede ayudar a saber el total de las edades de todas las peraonas

let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
}, 0);

console.log(`La edad total es ${total}`);

//por ejemplo para sacar el promedio podemos usar un metodo que nos reporte cual es el tamaño
let divisor = personas.length;

console.log(`La Edad Promedio es ${total / divisor}`);
