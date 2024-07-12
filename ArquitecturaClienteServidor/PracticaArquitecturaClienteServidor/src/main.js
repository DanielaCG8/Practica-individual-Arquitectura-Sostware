const Server = require('./server/server');
const Client = require('./client/client');

const main = async () => {
    // Start the server
    const server = new Server();
    server.start(6666);

    // Give the server a moment to start
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Start the client
    const client = new Client();
    try {
        await client.startConnection('127.0.0.1', 6666);
        client.sendMessage('hello server');
        await new Promise(resolve => setTimeout(resolve, 1000));
        client.sendMessage('bye');
        await new Promise(resolve => setTimeout(resolve, 1000));
        client.stopConnection();
    } catch (err) {
        console.error('Client error:', err);
    }

    // Stop the server
    server.stop();
}

main();
