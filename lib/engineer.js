const Employee = require("./employee");

class Engineer extends Employee {
    constructor(options) {

        super(options)

        this.github = options.github;

    }

    getGithub() {
        return (this.github)
    };
    getRole() {
        return (Engineer)
    };

}

module.exports = Engineer;