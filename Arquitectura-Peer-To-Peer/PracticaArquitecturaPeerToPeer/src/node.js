const WebSocket = require('ws');
const { connectToPeers, sendMessage } = require('./peer');

const port = process.argv[2] || 5000 + Math.floor(Math.random() * 1000);
const peers = process.argv.slice(3); // Nodos a los que este nodo se conectará

const server = new WebSocket.Server({ port });

server.on('connection', (socket) => {
    console.log('Nuevo peer conectado');
    socket.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
    });
});

console.log(`Nodo P2P escuchando en el puerto ${port}`);

// Conectarse a nodos conocidos
connectToPeers(peers);

// Enviar mensaje a todos los peers conectados
setTimeout(() => {
    sendMessage(`Hola desde el nodo ${port}`);
}, 1000);
