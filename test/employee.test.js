
const Employee = require("../lib/employee");

//Employee's name testing
describe("Employee class", () => {
    describe("getName method", () => {
        it("get's employee's name", () => {

            const employee = new Employee({ name: "Steve" });

            expect(employee.getName()).toBe("Steve");

        });
    });
});

//Employee's id testing
describe("Employee class", () => {
    describe("getId method", () => {
        it("get's employee's id", () => {

            const employee = new Employee({ id: "12" });

            expect(employee.getId()).toBe("12");

        });
    });
});

//Employee's email testing
describe("Employee class", () => {
    describe("getEmail method", () => {
        it("get's employee's email", () => {

            const employee = new Employee({ email: "steve@gmail.com" });

            expect(employee.getEmail()).toBe("steve@gmail.com");

        });
    });
});

//Employee's role testing
describe("Employee class", () => {
    describe("getRole method", () => {
        it("get's employee's role", () => {

            const employee = new Employee({ Employee });

            expect(employee.getRole()).toBe(Employee);
        });
    });
});






