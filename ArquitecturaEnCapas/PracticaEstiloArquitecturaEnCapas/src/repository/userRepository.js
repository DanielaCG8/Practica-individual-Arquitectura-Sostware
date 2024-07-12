const User = require('./../model/user')//./../../model/dispositivomedico').Dispositivomedico;
class UserRepository {
    constructor() {
        this.userDatabase = new Map();
    }

    getUserById(id) {
        return this.userDatabase.get(id);
    }

    saveUser(user) {
        this.userDatabase.set(user.getId(), user);
    }
}

module.exports = UserRepository;