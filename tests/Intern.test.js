const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a school if provided valid arguments", () => {
            const intern = new Intern("Sarah", "1", "sarah@email", "Adelaide Uni");

            // Verify that the new object has the correct properties
            expect(intern.school).toEqual("Adelaide Uni");
        });

        it("should return a school when getSchool() is called", () => {
            const intern = new Intern("Sarah", "1", "sarah@email", "Adelaide Uni");

            // Verify that the new object has the correct properties
            expect(intern.getSchool()).toEqual("Adelaide Uni");
        });

        it("should return all intern properties when getRole() is called", () => {
            const intern = new Intern("Sarah", "1", "sarah@email", "Adelaide Uni");
            const test = "Intern";

            // Verify that the new object has the correct properties
            expect(intern.getRole()).toEqual(test);
        });
    });
});