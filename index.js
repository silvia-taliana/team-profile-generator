// retrieving other files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require('./lib/generateHTML')

// retrieving dependencies 
const inquirer = require("inquirer");
const fs = require('fs');

// naming new file that will be generated and placing it in the dist folder
const fileName = "./dist/index.html";

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

// Empty array ready to push team members information into
let team = [];

// function to start asking the user questions
function init() {
    inquirer.prompt(managerQues)
        .then((answer) => {
            manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
            team.push(manager)
            addEmployee()
        })
        .catch((err) => console.error(err));
};

// function to add engineer or intern or finish adding team members
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
            writeToFile(fileName, generateHTML(team));
        };
    });

    // creating engineer as an object, pushing to team array and 
    // directing the user back to the addEmployee function to choose
    // another team member to add or complete team
    function createEngineer() {
        inquirer.prompt(engineerQues)
            .then((answer) => {
                engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
                team.push(engineer)
                addEmployee();
            });
    };

    // creating intern as an object, pushing to team array and 
    // directing the user back to the addEmployee function to choose
    // another team member to add or complete team
    function createIntern() {
        inquirer.prompt(internQues)
            .then((answer) => {
                intern = new Intern(answer.name, answer.id, answer.email, answer.school)
                team.push(intern)
                addEmployee();
            });
    };
};

function writeToFile(fileName, team) {

    fs.writeFile(fileName, team, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
};

// Initialize app
init();