//promises con ajax
//el uso mas comun de los promises los vamos a encontrar siempre cuando se trabaje con ajax y fetch

const descargarUsuarios = cantidad =>
  new Promise((resolve, reject) => {
    //pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=es`;

    //llamado ajax
    const xhr = new XMLHttpRequest();

    xhr.open("GET", api, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = error => reject(error);

    xhr.send();
  });

descargarUsuarios(30).then(
  miembros => imprimirHTML(miembros),
  error => console.error(new Error(`Hubo un ${error}`))
);

function imprimirHTML(usuarios) {
  let html = "";
  usuarios.forEach(usuario => {
    html += `
      <li>
        nombre: ${usuario.name.first}
        pais: ${usuario.nat}
        imagen: 
        <img src="${usuario.picture.medium}">

      </li>
    `;
  });

  const contenedorApp = document.querySelector("#app");
  contenedorApp.innerHTML = html;
}
