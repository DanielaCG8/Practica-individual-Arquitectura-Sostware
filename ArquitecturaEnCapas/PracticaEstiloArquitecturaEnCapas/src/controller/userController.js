const UserService = require('../service/userService');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    getUserById(id) {
        return this.userService.getUserById(id);
    }

    saveUser(user) {
        this.userService.saveUser(user);
    }
}

module.exports = UserController;