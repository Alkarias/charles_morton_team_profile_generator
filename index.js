const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fileName = 'index.html';
const employeeList = [];

const managerQuestions = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is their employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is their office number?",
        name: 'officeNumber'
    },
    {
        type: 'list',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['yes','no'],
        name: 'addEmployee'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is their employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is their github username?",
        name: 'github'
    },
    {
        type: 'list',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['yes','no'],
        name: 'addEmployee'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is their employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What school do they attend?",
        name: 'school'
    },
    {
        type: 'list',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['yes','no'],
        name: 'addEmployee'
    }
]

function writeManager(res) {
    return ``;
}

function writeEngineer(res) {
    return ``;
}

function writeIntern(res) {
    return ``;
}

function pickType() {
    inquirer.prompt(
        {
            type: 'list',
            message: "Would you like to add an engineer or intern?",
            choices: ['Engineer', 'Intern'],
            name: 'role'
        }
    ).then(ans => {
        if (ans.role === "Engineer") {
            populateEngineer();
        } else {
            populateIntern();
        }   
    });
}

function populateEngineer() {
    inquirer.prompt(engineerQuestions).then(ans => {
        employeeList.push(new Engineer(ans.name, ans.id, ans.email, ans.github));
        if (ans.addEmployee === 'yes') {
            pickType();
        } else {
            writeToFile();
        }
    });
}

function populateIntern() {
    inquirer.prompt(InternQuestions).then(ans => {
        employeeList.push(new Intern(ans.name, ans.id, ans.email, ans.school));
        if (ans.addEmployee === 'yes') {
            pickType();
        } else {
            writeToFile();
        }
    });
}

function writeToFile() {
    let data = "";
    //this line is temporary for checking results
    employeeList.forEach(employee => data += `${employee.getRole()}:${employee.getName()}\n`);
    fs.writeFileSync(`./dist/${fileName}`, data);
}

function init() {
    inquirer.prompt(managerQuestions).then(ans => {
        employeeList.push(new Manager(ans.name, ans.id, ans.email, ans.officeNumber));
        if (ans.addEmployee === 'yes') {
            pickType();
        } else {
            writeToFile();
        }
    });
}

init();