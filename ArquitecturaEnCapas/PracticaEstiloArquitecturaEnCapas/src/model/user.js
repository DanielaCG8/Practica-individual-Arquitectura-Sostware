class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

module.exports = User;