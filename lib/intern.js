const Employee = require("./employee");
const employeeArray = require("./src/employeeArray");

//subclass
class Intern extends Employee {
    constructor(options) {
        super(options)

        this.school = options.school;
    }

    //methods
    getSchool() {
        return (this.school)
    };

    getRole() {
        return (Intern)
    };
}

module.exports = Intern;