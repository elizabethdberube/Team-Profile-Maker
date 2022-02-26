const { it } = require("jest-circus");
const { describe } = require("yargs");
const Employee = require("./lib/employee");



describe("Employee class", () => {
    describe("getName method", () => {
        it("get's employee name", () => {

            const employee = new Employee([{ name: "Steve" }]);

            expect(employee.getName()).toBe("Steve");

        });
    });
});


describe("Employee class", () => {
    describe("getId method", () => {
        it("get's employee id", () => {

            const employee = new Employee([{ id: "12" }]);

            expect(employee.getId()).toBe("12");

        });
    });
});

describe("Employee class", () => {
    describe("getEmail method", () => {
        it("get's employee's email", () => {

            const employee = new Employee([{ email: "steve@gmail.com" }]);

            expect(employee.getEmail()).toBe("steve@gmail.com");

        });
    });
});

describe("Employee class", () => {
    describe("getRole method", () => {
        it("get's employee's role", () => {

            const employee = new Employee([{ employee: "manager" }]);

            expect(employee.getRole()).toBe("manager");
        });
    });
});





