const { it } = require("jest-circus");
const { describe } = require("yargs");
const index = require("./index");
const fs = require("fs");

jest.mock("index");

describe("index", () => {
    describe("createHtmlPage", () => {
        it("should create an html file", () => {
            const indexHTML = new index();
            const HTML = "index.html";
            let data;

            fs.writeFileSync.mockReturnValue(HTML);
            data = indexHTML.write(HTML);

            expect(data).toEqual(HTML);
            expect(fs.writeFileSync).lastCalledWith(HTML, "index.html");
        });
    });








});



