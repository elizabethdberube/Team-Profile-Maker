const Employee = require("./employee");

class Intern extends Employee {
    constructor(options) {
        super(options)

        this.school = options.school;
    }



    getSchool() {
        return (this.school)
    };

    getRole() {
        return (Intern)
    };
}

module.exports = Intern;