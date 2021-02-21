// retrieving data from employee file
const Employee = require('./Employee');

// constructor uses employee properties and adds on additional
// properties unique to the Engineer 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer