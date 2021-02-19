class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }
};

const person = new Employee("Silvia", "1", "silvia@email");

person.name
person.getName();

module.exports = Employee