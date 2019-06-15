//promises con ajax
//el uso mas comun de los promises los vamos a encontrar siempre cuando se trabaje con ajax y fetch

const descargarUsuarios = cantidad =>
  new Promise((resolve, reject) => {
    //pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=es`;

    //llamado ajax
    const xhr = new XMLHttpRequest();

    //abrimos la conexion
    //el metodo open toma 3 parametros metodo, url, sinrono o asincrono
    xhr.open("GET", api, true);

    //on load --aqui es donde revisamos el status --
    //con JSON.Parse lo paso de un string a un objeto de JS
    //el reject nos va a traer el resultado del error en texto
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    //Opcional (on error)
    xhr.onerror = error => reject(error);

    //send envia el request a la db
    xhr.send();
  });

descargarUsuarios(10).then(
  miembros => console.log(miembros),
  error => console.error(new Error(`Hubo un ${error}`))
);
//esto lo hice para revisar pero aparece {<pending>} eso es porque falta el .then

//llamado ajax tiene 3 o 4 partes
//1. crear el llamado
//2. abrir la conexion
//3. mandar los datos
//4. enviar la peticion
//5. opcional un error
