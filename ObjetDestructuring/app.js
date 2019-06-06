//Destructuring de objetos

const aprendiendoJS = {
  version: {
    nueva: "ES6+",
    anterior: "ES5"
  },
  frameworks: ["React", "VueJS", "AngularJS"]
};

//desrtucturing es extraer valores de un objeto
// console.log(aprendiendoJS);

//Destructuring forma Aterior
// let version = aprendiendoJS.version.nueva;
// let frameworks = aprendiendoJS.frameworks[1];

// console.log(frameworks);

//Destructuring forma Nueva

let { version, frameworks } = aprendiendoJS;
console.log(version);
console.log(frameworks);

//tienes que pasarle el mismo nombre de las propiedades de tu objeto para que sepa donde dirigirse

let { nueva } = aprendiendoJS.version;
console.log(nueva);
