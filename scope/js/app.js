//scope

// var musica = "Rock";

// if (musica) {
//   var musica = "Grunge";
//   console.log("dentro del if", musica);
// }

// console.log("if fuera del scope", musica);

//scope con let
let musica = "Rock";

if (musica) {
  let musica = "Grunge";
  console.log("dentro del if", musica);
}

console.log("if fuera del scope", musica);

//se evita la reescritura de la variable porque las identifica como dos distintas
//pasa lo mismo con const aunque no deberia dejar cambiarlas como vive dentro de un if es otra variable
