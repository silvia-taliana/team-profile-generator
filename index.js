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
    },
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
    },
    {
        type: 'list',
        message: 'Please choose a team member to add or finish building your team',
        name: 'team',
        choices: ['Engineer', 'Intern', 'Finished building team']
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
    },
    {
        type: 'list',
        message: 'Please choose a team member to add or finish building your team',
        name: 'team',
        choices: ['Engineer', 'Intern', 'Finished building team']
    }
];

let manager = [];
let engineer = [];
let intern = [];

// function to start asking the user questions
function init() {
    inquirer.prompt(managerQues)
        .then((answer) => manager.push(answer))
        .then(() => console.log(manager))
        .then(() => addEmployee())
};

function addEmployee() {
    if (manager[0].team === 'Engineer') {
        inquirer.prompt(engineerQues)
            .then((answer) => engineer.push(answer))
            .then(() => console.log(engineer))
    }
    else if (manager[0].team === 'Intern') {
        inquirer.prompt(internQues)
            .then((answer) => intern.push(answer))
            .then(() => console.log(intern))
    }
    else {
        console.log(manager[0].team);
        // writeToFile(answer);
    }
};

// Initialize app
init();

// function writeToFile() {
//     console.log(answer);
// };