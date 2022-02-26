
const Employee = require("../lib/employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("get's employee's name", () => {

            const employee = new Employee([{ name }]);

            expect(employee.getName()).toBe("Steve");

        });
    });
});

describe("Employee class", () => {
    describe("getId method", () => {
        it("get's employee's id", () => {

            const employee = new Employee([{ id }]);

            expect(employee.getId()).toBe("12");

        });
    });
});

describe("Employee class", () => {
    describe("getEmail method", () => {
        it("get's employee's email", () => {

            const employee = new Employee([{ email }]);

            expect(employee.getEmail()).toBe("steve@gmail.com");

        });
    });
});

describe("Employee class", () => {
    describe("getRole method", () => {
        it("get's employee's role", () => {

            const employee = new Employee([{ employee }]);

            expect(employee.getRole()).toBe("manager");
        });
    });
});






