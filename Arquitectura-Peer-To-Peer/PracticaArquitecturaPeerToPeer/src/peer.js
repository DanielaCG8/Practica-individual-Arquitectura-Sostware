const WebSocket = require('ws');

const sockets = [];

const connectToPeers = (peers) => {
    peers.forEach((peer) => {
        const socket = new WebSocket(peer);

        socket.on('open', () => {
            console.log(`Conectado a ${peer}`);
            sockets.push(socket);
        });

        socket.on('message', (message) => {
            console.log(`Mensaje recibido de ${peer}: ${message}`);
        });

        socket.on('error', (error) => {
            console.error(`Error en la conexión con ${peer}: ${error.message}`);
        });

        socket.on('close', () => {
            console.log(`Conexión cerrada con ${peer}`);
        });
    });
};

const sendMessage = (message) => {
    sockets.forEach((socket) => {
        socket.send(message);
    });
};

module.exports = { connectToPeers, sendMessage };
