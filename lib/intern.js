const Employee = require("./employee");

class Intern extends Employee {
    constructor(options) {
        super(options)
        this.github = options.github;

        this.name = options.name;

        this.id = options.id;

        this.school = options.school;
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

    getSchool() {
        return (this.school)
    };

    getRole() {
        return (Intern)
    };
}

module.exports = Intern;