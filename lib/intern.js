const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email)

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