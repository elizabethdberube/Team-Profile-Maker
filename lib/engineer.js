const Employee = require("./employee");
const employeeArray = require("./src/employeeArray");

//subclass
class Engineer extends Employee {
    constructor(options) {

        super(options)

        this.github = options.github;

    }
    //methods
    getGithub() {
        return (this.github)
    };
    getRole() {
        return (Engineer)
    };

}

module.exports = Engineer;