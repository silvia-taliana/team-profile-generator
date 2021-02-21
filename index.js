// retrieving other files
const Employee = require("./lib/Employee");

// retrieving dependencies 
const inquirer = require("inquirer");

// list of questions for the user 
const managerQues = [
    {
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the manager\'s id number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the manager\'s id number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber'
    }
];

const addEmployeeQ = [
    {
        type: 'list',
        message: 'Please choose a team member to add or finish building your team',
        name: 'team',
        choices: ['Engineer', 'Intern', 'Finished building team']
    }
];

const engineerQues = [
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s id number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s github?',
        name: 'github'
    }
];

const internQues = [
    {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the intern\'s id number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What school did the intern go to?',
        name: 'school'
    }
];

// function mangagerInfo() {
//     inquirer.prompt(managerQues)
//         .then((answer) => console.log(answer))
// };

// function addEmployee() {
//     inquirer.prompt(addEmployeeQ)
//         .then((answer) => console.log(answer))
// }

// function to start asking the user questions
function init() {
    // mangagerInfo()
    //     .then(addEmployee())
    inquirer.prompt(managerQues)
        .then((answer) => console.log(answer))
};

// Initialize app
init();

