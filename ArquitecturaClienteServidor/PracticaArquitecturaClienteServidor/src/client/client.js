const net = require('net');

class Client {
    constructor() {
        this.client = null;
    }

    startConnection(ip, port) {
        return new Promise((resolve, reject) => {
            this.client = net.createConnection({ host: ip, port: port }, () => {
                console.log('Connected to server');
                resolve();
            });

            this.client.on('data', data => {
                console.log('Server response: ' + data.toString());
            });

            this.client.on('end', () => {
                console.log('Disconnected from server');
            });

            this.client.on('error', err => {
                console.error('Error: ' + err.message);
                reject(err);
            });
        });
    }

    sendMessage(msg) {
        if (this.client) {
            this.client.write(msg + '\n');
        }
    }

    stopConnection() {
        if (this.client) {
            this.client.end();
        }
    }
}

module.exports = Client;
