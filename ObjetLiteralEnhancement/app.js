//Objet Literal Enhancement es lo contrario al Objet Destructuring mientras este ultimo se encarga de obtener los valores el Literal Enhancemen

//objet Literal Enhancement

const banda = "Oasis";
const genero = "Rock";
const canciones = ["Live Forever", "Wondereworld", "Cast no shadows"];

//Forma anterior

// const oasis = {
//   banda: band,
//   genero: genero,
//   caciones: canciones
// };

const oasis = { banda, genero, canciones };

console.log(oasis);
