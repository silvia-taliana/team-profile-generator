const inquirer = require("inquirer");

const questions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name'
    }
];

function init() {
    inquirer.prompt(questions)
        .then((answer) => console.log(answer))
};

module.exports = init