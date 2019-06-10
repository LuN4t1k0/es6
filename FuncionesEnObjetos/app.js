//Metodos o funciones en un objeto

const persona = {
  nombre: "Cristian",
  trabajo: "Ingeniero Informatico",
  edad: 35,
  musicaRock: "Rock",
  mostrarInformacion() {
    console.log(`${this.nombre}, es ${this.trabajo} su edad es ${this.edad}`);
  }
};

persona.mostrarInformacion();
