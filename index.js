const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');

const fileName = 'index.html';

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
    ).then(answers => {
        
    });
}

function writeToFile() {

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