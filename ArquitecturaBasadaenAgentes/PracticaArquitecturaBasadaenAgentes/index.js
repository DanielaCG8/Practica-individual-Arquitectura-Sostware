const Agente = require('./agents/Agente');
const OtroAgente = require('./agents/OtroAgente');
const { enviarMensaje } = require('./utils/Comunicacion');

// Creación de agentes
const agente1 = new Agente(1, 0, 0);
const agente2 = new Agente(2, 2, 2);
const otroAgente = new OtroAgente(3, 1, 1);

// Simulación de movimiento y comunicación
agente1.mover(1, 0);
agente2.mover(3, 3);

const todosAgentes = [agente1, agente2, otroAgente];

// OtroAgente recoge un objeto
otroAgente.recogerObjeto('Libro');

// Mostrar los objetos recogidos por OtroAgente
otroAgente.mostrarObjetosRecogidos();

// Comunicación entre agentes
agente1.comunicarse(todosAgentes);

// Ejemplo de uso de utilidades
enviarMensaje(1, 2, "Hola desde agente 1");
