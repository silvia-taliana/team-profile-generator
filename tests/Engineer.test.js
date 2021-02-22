const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a github username if provided valid arguments", () => {
            const engineer = new Engineer("Sarah", "1", "sarah@email", "sarah");

            // Verify that the new object has the correct properties
            expect(engineer.github).toEqual("sarah");
        });

        it("should return a github when getGithub() is called", () => {
            const engineer = new Engineer("Sarah", "1", "sarah@email", "sarah");

            // Verify that the new object has the correct properties
            expect(engineer.getGithub()).toEqual("sarah");
        });

        it("should return all engineer properties when getRole() is called", () => {
            const engineer = new Engineer("Sarah", "1", "sarah@email", "sarah");
            const test = "Engineer";

            // Verify that the new object has the correct properties
            expect(engineer.getRole()).toEqual(test);
        });
    });
});