class Agente {
    constructor(id, posX, posY) {
      this.id = id;
      this.posX = posX;
      this.posY = posY;
    }
  
    mover(nuevaPosX, nuevaPosY) {
      this.posX = nuevaPosX;
      this.posY = nuevaPosY;
      console.log(`Agente ${this.id} se movió a (${this.posX}, ${this.posY})`);
    }
  
    comunicarse(otrosAgentes) {
      console.log(`Agente ${this.id} está comunicándose...`);
      otrosAgentes.forEach(agente => {
        if (agente.id !== this.id) {
          console.log(`Agente ${this.id} ve a Agente ${agente.id}`);
        }
      });
    }
  }
  
  module.exports = Agente;
  