const { it } = require("jest-circus");
const { describe } = require("yargs");
const Engineer = require("./lib/engineer");



describe("engineer class", () => {
    describe("getName method", () => {
        it("get's engineer name", () => {

            const engineer = new Engineer([{ name: "Steve" }]);

            engineer.getName();

            expect(engineer.name).toBe("Steve");

        });
    });
});


describe("engineer class", () => {
    describe("getId method", () => {
        it("get's engineer id", () => {

            const engineer = new Engineer([{ id: "12" }]);

            engineer.getId();

            expect(engineer.id).toBe("12");

        });
    });
});

describe("engineer class", () => {
    describe("getEmail method", () => {
        it("get's engineer's email", () => {

            const engineer = new Engineer([{ email: "steve@gmail.com" }]);

            engineer.getEmail();

            expect(engineer.email).toBe("steve@gmail.com");

        });
    });
});

describe("engineer class", () => {
    describe("getGithub method", () => {
        it("get's engineer's github", () => {

            const engineer = new Engineer([{ gitHub: "stevesmith" }]);

            engineer.getGithub();

            expect(engineer.gitHub).toBe("stevesmith");

        });
    });
});

describe("engineer class", () => {
    describe("getRole method", () => {
        it("get's engineer's role", () => {

            const engineer = new Engineer([{ engineer: "engineer" }]);

            engineer.getRole();

            expect(engineer).toBe("engineer");
        });
    });
});