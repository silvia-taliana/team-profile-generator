// retrieving data from employee file
const Employee = require('./Employee');

// constructor uses employee properties and adds on additional
// properties unique to the Intern 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern