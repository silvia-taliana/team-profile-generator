const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a school if provided valid arguments", () => {
            const intern = new Intern("Sarah", "1", "sarah@email", "Adelaide Uni");

            // Verify that the new object has the correct properties
            expect(intern.school).toEqual("Adelaide Uni");
        });
    })
});