const Employee = require("./employee");

class Engineer extends Employee {
    constructor(options) {

        super(options)

        this.github = options.github;

        this.name = options.name;

        this.id = options.id;

        this.email = options.email;
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
        return (Engineer)
    };

}

module.exports = Engineer;