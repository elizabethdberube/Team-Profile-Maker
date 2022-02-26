const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email)

        this.officenumber = officenumber;

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
        return (this.Manager);
    };

}

module.exports = Manager;