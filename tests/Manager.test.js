const { italic } = require('ansi-styles');
const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with an office number if provided valid arguments", () => {
            const manager = new Manager("Sarah", "1", "sarah@email", "5");

            // Verify that the new object has the correct properties
            expect(manager.officeNumber).toEqual("5");
        });

        it("should return office number when getOfficeNumber() is called", () => {
            const manager = new Manager("Sarah", "1", "sarah@email", "5");

            // Verify that the new object has the correct properties
            expect(manager.getOfficeNumber()).toEqual("5");
        });

        it("should return all manager properties when getRole() is called", () => {
            const manager = new Manager("Sarah", "1", "sarah@email", "5");
            const test = "Manager";

            // Verify that the new object has the correct properties
            expect(manager.getRole()).toEqual(test);
        });
    });
});