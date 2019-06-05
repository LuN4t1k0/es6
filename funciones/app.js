//crear codigo que podamos reutilizar algunas son mas inteligentes que otras
//creando una funcion

//function declaration
function saludar(nombre) {
  console.log(`Bienvenido : ${nombre}`);
}

saludar("Cristian");
saludar("Jacqueline");

//function expression
const cliente = function(nombreCliente) {
  console.log(`Mostrando datos del cliente ${nombreCliente}`);
};

cliente("Juan");

//la diferencia entre ambas esta en que al utilizar una function declaration el traspilador va a revisar todo el documento buscando todas las funciones y estas seran ejecutadas .. quedando en memoria

//al utilizar function expression estas deben ser llamadas despues de ser declaradas
