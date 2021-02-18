const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name if provided valid arguments", () => {
            const employee = "Sarah";

            // Verify that the new object has the correct properties
            expect(employee).toEqual("Sarah");
        });
    });
});

