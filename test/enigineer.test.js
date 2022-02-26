const { it } = require("jest-circus");
const { describe } = require("yargs");
const Engineer = require("../lib/engineer");



describe("engineer class", () => {
    describe("getName method", () => {
        it("get's engineer's name", () => {

            const engineer = new Engineer([{ name }]);

            expect(engineer.getName()).toBe("Steve");

        });
    });
});


describe("engineer class", () => {
    describe("getId method", () => {
        it("get's engineer's id", () => {

            const engineer = new Engineer([{ id }]);

            expect(engineer.getId()).toBe("12");

        });
    });
});

describe("engineer class", () => {
    describe("getEmail method", () => {
        it("get's engineer's email", () => {

            const engineer = new Engineer([{ email }]);

            expect(engineer.getEmail()).toBe("steve@gmail.com");

        });
    });
});

describe("engineer class", () => {
    describe("getGithub method", () => {
        it("get's engineer's github", () => {

            const engineer = new Engineer([{ gitHub }]);

            expect(engineer.getGithub()).toBe("stevesmith");

        });
    });
});

describe("engineer class", () => {
    describe("getRole method", () => {
        it("get's engineer's role", () => {

            const engineer = new Engineer([{ engineer }]);

            expect(engineer.getRole()).toBe("engineer");
        });
    });
});