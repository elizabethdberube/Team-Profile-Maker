const Employee = require("./employee");

class Enigineer extends Employee {
    constructor(name, id, email, githubURL) {

        this.github = githubURL;

    }

    getName() {
        return (this.name)
    };

    getId() {
        return (this.id)
    };

    getEmail() {
        return (this.email)
    };

    getGithub() {
        return (this.github)
    };
    getRole() {
        return (this.Enigineer)
    };

}

module.exports = Enigineer;