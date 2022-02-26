const Manager = require("../lib/manager");

describe("manager class", () => {
    describe("getName method", () => {
        it("get's manager's name", () => {

            const manager = new Manager([{ name }]);

            expect(manager.getName()).toBe("Steve");

        });
    });
});


describe("manager class", () => {
    describe("getId method", () => {
        it("get's manager's id", () => {

            const manager = new Manager([{ id }]);

            expect(manager.getId()).toBe("12");

        });
    });
});

describe("manager class", () => {
    describe("getEmail method", () => {
        it("get's manager's email", () => {

            const manager = new Manager([{ email }]);

            expect(manager.getEmail()).toBe("steve@gmail.com");

        });
    });
});

describe("manager class", () => {
    describe("getOfficenumber method", () => {
        it("get's manager's office number", () => {

            const manager = new Manager([{ officenumber }]);

            expect(manager.getOfficenumber()).toBe("603-225-6030");

        });
    });
});

describe("manager class", () => {
    describe("getRole method", () => {
        it("get's manager's role", () => {

            const manager = new Manager([{ manager }]);

            expect(manager.getRole()).toBe("student");
        });
    });
});