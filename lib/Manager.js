// retrieving data from employee file
const Employee = require('./Employee');

// constructor uses employee properties and adds on additional
// properties unique to the manager 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager