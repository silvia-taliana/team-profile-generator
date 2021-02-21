// retrieving data from employee file
const Employee = require('./Employee');

// temporary value given so tests can run ***NOTE REMOVE! 
const officeNumber = "5";

// constructor uses employee properties and adds on additional
// properties unique to the manager 
class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email, officeNumber);
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