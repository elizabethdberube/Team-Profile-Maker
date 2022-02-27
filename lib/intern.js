const Employee = require("./employee");

class Intern extends Employee {
    constructor(options) {
        super(options)
        this.github = options.github;

        this.name = options.name;

        this.id = options.id;

        this.school = schoolName;

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
        return (this.Intern)
    };

}

module.exports = Intern;