// retrieving other files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// retrieving dependencies 
const inquirer = require("inquirer");
const fs = require('fs');

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
            console.log(manager)
            addEmployee()
        });
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
            // console.log(team);
            writeToFile(team);
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
                console.log(engineer)
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
                console.log(intern)
                addEmployee();
            });
    };
};

// Initialize app
init();

function writeToFile(team) {
    console.log(team);
    for (i = 1; i < team.length; i++) {
        if (team[i] === "Engineer") {
            renderEngineer();
        }
        else if (team[i] === "Intern") {
            renderIntern();
        }
        else {
            buildFile();
        };
    };

    function buildFile() {
        console.log("completed!");
    };
};

function renderEngineer(engineer) {
    let engineerTemplate = `
    <div class="card">
            <img src="./assets/engineer.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <h5>Engineer</h5>
                <p class="card-text">
                    <li>
                        Id number: ${engineer.id}
                    </li>
                    <li>
                        Email:${engineer.email}
                    </li>
                    <li>
                        Github: ${engineer.github}
                    </li>
                </p>
            </div>
        </div>`
    return engineerTemplate;
};

function renderIntern(intern) {
    let internTemplate = `        <div class="card">
    <img src="./assets/intern.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h5>Intern</h5>
        <p class="card-text">
            <li>
                Id number: ${intern.id}
            </li>
            <li>
                Email: ${intern.email}
            </li>
            <li>
                School: ${intern.school}
            </li>
        </p>
    </div>
</div>`
    return internTemplate;
};