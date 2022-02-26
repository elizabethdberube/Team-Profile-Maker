const { it } = require("jest-circus");
const { describe } = require("yargs");
const Intern = require("../lib/intern");


describe("intern class", () => {
    describe("getName method", () => {
        it("get's intern name", () => {

            const intern = new Intern([{ name: "Steve" }]);

            expect(intern.getName()).toBe("Steve");

        });
    });
});


describe("intern class", () => {
    describe("getId method", () => {
        it("get's intern id", () => {

            const intern = new Intern([{ id: "12" }]);

            expect(intern.getId()).toBe("12");

        });
    });
});

describe("intern class", () => {
    describe("getEmail method", () => {
        it("get's intern's email", () => {

            const intern = new Intern([{ email: "steve@gmail.com" }]);

            expect(intern.getEmail()).toBe("steve@gmail.com");

        });
    });
});

describe("intern class", () => {
    describe("getSchool method", () => {
        it("get's intern's school", () => {

            const intern = new Intern([{ school: "the school for learning" }]);

            expect(intern.getGithub()).toBe("the school for learning");

        });
    });
});

describe("intern class", () => {
    describe("getRole method", () => {
        it("get's intern's role", () => {

            const intern = new Intern([{ intern: "student" }]);

            expect(intern.getRole()).toBe("student");
        });
    });
});