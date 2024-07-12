const UserRepository = require('../repository/userRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    getUserById(id) {
        return this.userRepository.getUserById(id);
    }

    saveUser(user) {
        this.userRepository.saveUser(user);
    }
}

module.exports = UserService;