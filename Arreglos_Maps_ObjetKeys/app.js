//arreglos Maps y ObjetKeys
//arreglos y .map

// const carrito = ["Producto1", "Producto2", "Poducto3"];

//console.log(carrito);
//map nos devuelve un nuevo arreglo

// carrito.map(producto => {
//   return `El Producto es ${producto}`;
// });

// const appContenedor = document.querySelector("#app");
// let html = "";

// //forEach

// carrito.forEach(producto => {
//   html += `<li>${producto}</li>`;
// });

//map

//appContenedor.innerHTML = html;

// Objet Keys

const persona = {
  nombre: "Cristian",
  profesion: "Ingeniero Informatico",
  edad: 500
};

//destructuring podemos obtener el nombde o una propiedad del objeto

const { nombre } = persona;
console.log(nombre);

//Objet key con esto podemos traer el objeto en cuestion

console.log(Object.keys(persona));
