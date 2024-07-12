const readline = require('readline');
const User = require('./model/user')
const UserController = require('./controller/userController');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = () => {
    const userController = new UserController();

    rl.question('ID: ', (id) => {
        rl.question('Nombre: ', (name) => {
            rl.question('Email: ', (email) => {
                // Crear Usuario
                const newUser = new User(id, name, email);
                userController.saveUser(newUser);

                // Devuelve el usuario
                const resultUser = userController.getUserById(id);
                console.log('************************************')
                console.log('Usuario: ', resultUser.getName(), '\nCorreo: ', resultUser.getEmail());

                rl.close();
            });
        });
    });
}

main();
