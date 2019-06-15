//promises
//resolve es el codigo que se ejecuto cuando el llamado al promise es correcto y el reject cuando no
const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true;
    if (descuento) {
      resolve("Descuento Aplicado");
    } else {
      reject("No se pudo aplicar el descuento");
    }
  }, 3000);
});

//al hacer esto en la consola nos va a aparecer {<pending>} eso es porque le hace falta el .then
aplicarDescuento
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.log(error);
  });
