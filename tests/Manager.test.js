const { italic } = require('ansi-styles');
const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with an office number if provided valid arguments", () => {
            const manager = new Manager("Sarah", "1", "sarah@email", "5");

            // Verify that the new object has the correct properties
            expect(manager.officeNumber).toEqual("5");
        });
    })
})