// retrieving other files
const Employee = require("./lib/Employee");

// retrieving dependencies 
const inquirer = require("inquirer");

// list of questions for the user 
const questions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee\'s id number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the employee\'s email address?',
        name: 'email'
    },
];

// function to start asking the user questions
function init() {
    inquirer.prompt(questions)
        .then((answer) => console.log(answer))
};

// Initialize app
init();