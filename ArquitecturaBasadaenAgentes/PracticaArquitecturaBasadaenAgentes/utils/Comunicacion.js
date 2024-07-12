function enviarMensaje(origen, destino, mensaje) {
    console.log(`Mensaje enviado desde Agente ${origen} a Agente ${destino}: ${mensaje}`);
  }
  
  module.exports = {
    enviarMensaje
  };
  