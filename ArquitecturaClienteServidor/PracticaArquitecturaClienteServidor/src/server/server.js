const net = require('net');

class Server {
    constructor() {
        this.server = null;
    }

    start(port) {
        this.server = net.createServer(socket => {
            console.log('Client connected');
            socket.on('data', data => {
                const message = data.toString().trim();
                if (message.toLowerCase() === 'hello server') {
                    socket.write('hello client\n');
                } else if (message.toLowerCase() === 'bye') {
                    socket.write('bye\n');
                    socket.end();
                } else {
                    socket.write('unrecognized message\n');
                }
            });

            socket.on('end', () => {
                console.log('Client disconnected');
            });
        });

        this.server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }

    stop() {
        if (this.server) {
            this.server.close(() => {
                console.log('Server stopped');
            });
        }
    }
}

module.exports = Server;
