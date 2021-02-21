const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name if provided valid arguments", () => {
            const employee = new Employee("Sarah", "1", "sarah@email");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Sarah");
        });

        it("should create an object with a number if provided valid arguments", () => {
            const employee = new Employee("Sarah", "1", "sarah@email");

            // Verify that the new object has the correct properties
            expect(employee.id).toEqual("1");
        });

        it("should create an object with an email address if provided valid arguments", () => {
            const employee = new Employee("Sarah", "1", "sarah@email");

            // Verify that the new object has the correct properties
            expect(employee.email).toEqual("sarah@email");
        });
    });
});

