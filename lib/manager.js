const Employee = require("./employee");
const employeeArray = require("./src/employeeArray");

//subclass
class Manager extends Employee {
    constructor(options) {

        super(options)

        this.officenumber = options.officenumber;

    }

    //methods
    getOfficenumber() {
        return (this.officenumber);
    };
    getRole() {
        return (Manager);
    };

}

module.exports = Manager;