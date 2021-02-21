// retrieving data from employee file
const Employee = require('./Employee');

// temporary value given so tests can run ***NOTE REMOVE! 
const github = "sarah";

// constructor uses employee properties and adds on additional
// properties unique to the Engineer 
class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email, github);
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