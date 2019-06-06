//parametros por default en funciones

const actividad = function actividad(
  nombre = "Harvie Specter",
  actividad = "Abogado"
) {
  console.log(
    `La persona ${nombre}, esta realizando la actividad ${actividad}`
  );
};
actividad("Cristian", "Aprender JavaScript");
actividad();
