
const Intern = require("../lib/intern");

//intern's name test
describe("intern class", () => {
    describe("getName method", () => {
        it("get's intern name", () => {

            const intern = new Intern({ name: "Steve" });

            expect(intern.getName()).toBe("Steve");

        });
    });
});

//intern's id test
describe("intern class", () => {
    describe("getId method", () => {
        it("get's intern id", () => {

            const intern = new Intern({ id: "12" });

            expect(intern.getId()).toBe("12");

        });
    });
});

//intern's email test
describe("intern class", () => {
    describe("getEmail method", () => {
        it("get's intern's email", () => {

            const intern = new Intern({ email: "steve@gmail.com" });

            expect(intern.getEmail()).toBe("steve@gmail.com");

        });
    });
});

//intern's school test
describe("intern class", () => {
    describe("getSchool method", () => {
        it("get's intern's school", () => {

            const intern = new Intern({ school: "a school" });

            expect(intern.getSchool()).toBe("a school");

        });
    });
});

//intern's role test
describe("intern class", () => {
    describe("getRole method", () => {
        it("get's intern's role", () => {

            const intern = new Intern("Intern");

            expect(intern.getRole()).toBe("Intern");

        });
    });
});