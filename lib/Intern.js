// retrieving data from employee file
const Employee = require('./Employee');

// temporary value given so tests can run ***NOTE REMOVE! 
const school = "Adelaide Uni";

// constructor uses employee properties and adds on additional
// properties unique to the Intern 
class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email, school);
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