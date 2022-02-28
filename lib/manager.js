const Employee = require("./employee");

class Manager extends Employee {
    constructor(options) {

        super(options)
        this.name = options.name;

        this.id = options.id;

        this.email = options.email;

        this.officenumber = options.officenumber;

    }

    getName() {

        return (this.name);
    };

    getId() {
        return (this.id);
    };

    getEmail() {
        return (this.email);
    };

    getOfficenumber() {
        return (this.officenumber);
    };
    getRole() {
        return (Manager);
    };

}

module.exports = Manager;