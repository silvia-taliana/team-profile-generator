// constructing an object for the parent class employee including 
// the name, id and email, every employee will have a minimum of 
// these three properties 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods to return the individual properties
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    // method to return the object of Employee after it has been constructed
    getRole() {
        return 'Employee'
    }
};

module.exports = Employee