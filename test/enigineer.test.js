
const Engineer = require("../lib/engineer");


//engineers's name test
describe("engineer class", () => {
    describe("getName method", () => {
        it("get's engineer's name", () => {

            const engineer = new Engineer({ name: "Steve" });

            expect(engineer.getName()).toBe("Steve");

        });
    });
});

//engineers's id test
describe("engineer class", () => {
    describe("getId method", () => {
        it("get's engineer's id", () => {

            const engineer = new Engineer({ id: "12" });

            expect(engineer.getId()).toBe("12");

        });
    });
});

//engineers's email test
describe("engineer class", () => {
    describe("getEmail method", () => {
        it("get's engineer's email", () => {

            const engineer = new Engineer({ email: "steve@gmail.com" });

            expect(engineer.getEmail()).toBe("steve@gmail.com");

        });
    });
});

//engineers's github test
describe("engineer class", () => {
    describe("getGithub method", () => {
        it("get's engineer's github", () => {

            const engineer = new Engineer({ github: "stevesmith" });

            expect(engineer.getGithub()).toBe("stevesmith");

        });
    });
});

//engineers's role test
describe("engineer class", () => {
    describe("getRole method", () => {
        it("get's engineer's role", () => {

            const engineer = new Engineer("Engineer");

            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});