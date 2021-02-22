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

let manager = [];
let engineer = [];
let intern = [];

// function to start asking the user questions
function init() {
    inquirer.prompt(managerQues)
        .then((answer) => {
            manager.push(answer)
            console.log(manager)
            addEmployee()
        });
};

function addEmployee() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Please choose a team member to add or finish building your team',
            name: 'team',
            choices: ['Engineer', 'Intern', 'Finished building team']
        }
    ).then(answer => {
        if (answer.team === 'Engineer') {
            createEngineer();
        }
        else if (answer.team === 'Intern') {
            createIntern();
        }
        else {
            console.log(manager);
            // writeToFile(answer);
        };
    });

    function createEngineer() {
        inquirer.prompt(engineerQues)
            .then((answer) => {
                engineer.push(answer)
                console.log(engineer)
                addEmployee();
            });
    };

    function createIntern() {
        inquirer.prompt(internQues)
            .then((answer) => {
                intern.push(answer)
                console.log(intern)
                addEmployee();
            });
    }
};

// Initialize app
init();

// function writeToFile() {
//     console.log(answer);
// }