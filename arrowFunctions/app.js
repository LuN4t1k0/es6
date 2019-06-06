//consideraciones con los Arrow Functions :
//la palabra function se pasa al otro lado del parametro y se convierte en =>
//si lleva un solo parametro no es necesario los parentesis
//si lleva un solo retorno no es necesario escribir la palabra return ni poner las llaves

//antes se escribia asi

// function viajando(destino){
//   return  `viajando a la ciudad de ${destino}`;
// }

// let viaje = viajando(destino);

//ejemplo
let viajando = destino => `viajando' a la ciudad de ${destino}`;

let viaje;
viaje = viajando("Paris");
viaje = viajando("Londres");

console.log(viaje);
