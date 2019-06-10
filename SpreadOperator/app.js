//spread Operator la sintaxis son ...
//sirve para muchas cosas pero su tarea mas importante es que nos va a permitir juntar 2 arreglos diferentes

let lenguajes = ["JavaScript", "PHP", "Python"];
let frameworks = ["ReactJS", "Laravel", "Django"];

//unir los arreglos en uno solo

//antes
let combinacion = lenguajes.concat(frameworks);

console.log(combinacion);

//forma Nueva

let combinado = [...frameworks, ...lenguajes];
console.log(combinado);

//tambien puedes copiar un arreglo

let nuevoArreglo = [...lenguajes];

//Reversar un arreglo

let [ultimo] = [...lenguajes].reverse();
console.log(ultimo);

//otro uso Spread

function suma(a, b, c) {
  console.log(a + b + c);
}

const numeros = [1, 2, 3];
suma(...numeros);
console.log(numeros);
