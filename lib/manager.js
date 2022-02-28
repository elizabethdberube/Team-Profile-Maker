const Employee = require("./employee");

class Manager extends Employee {
    constructor(options) {

        super(options)

        this.officenumber = options.officenumber;

    }

    getOfficenumber() {
        return (this.officenumber);
    };
    getRole() {
        return (Manager);
    };

}

module.exports = Manager;