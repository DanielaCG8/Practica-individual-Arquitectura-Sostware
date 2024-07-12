class OtroAgente {
    constructor(id, posX, posY) {
      this.id = id;
      this.posX = posX;
      this.posY = posY;
      this.objetosRecogidos = [];
    }
  
    mover(nuevaPosX, nuevaPosY) {
      this.posX = nuevaPosX;
      this.posY = nuevaPosY;
      console.log(`OtroAgente ${this.id} se movió a (${this.posX}, ${this.posY})`);
    }
  
    recogerObjeto(objeto) {
      this.objetosRecogidos.push(objeto);
      console.log(`OtroAgente ${this.id} ha recogido el objeto: ${objeto}`);
    }
  
    mostrarObjetosRecogidos() {
      console.log(`Objetos recogidos por OtroAgente ${this.id}:`, this.objetosRecogidos);
    }
  }
  
  module.exports = OtroAgente;
  