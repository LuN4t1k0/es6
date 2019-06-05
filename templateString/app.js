//Template Strings

const nombre = "Cristian";
const trabajo = "Ingeniero Informatico";

//concatenar javascript de la forma vieja
console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);

//concatenar con template strings
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//concatenar con multiples lineas
const contenedorApp = document.querySelector("#app");
// let html =
//   "<ul>" +
//   "<li> Nombre: " +
//   nombre +
//   "</li>" +
//   "<li> Trabajo:" +
//   trabajo +
//   "</li>" +
//   "</ul>";

//concatener multiples lineas con template string

const html = `<ul>
                <li>Nombre : ${nombre}</li>
                <li>Trabajo : ${trabajo}</li>
              </ul>`;

contenedorApp.innerHTML = html;
