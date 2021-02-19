const Employee = require("./lib/Employee");
const inquirer = require("inquirer");

// Initialize a new employee object
const employee = new Employee();

const questions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name'
    }
];

function Employee() {
    inquirer.prompt(questions)
        .then((answer) => console.log(answer))
};


// Initialize app
employee.init();