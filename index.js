//required libraries
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//variables
const fileName = 'index.html';
const employeeList = [];

// manager questions
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
// engineer questions
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
// intern questions
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
    // ask which type of employee should be added
    inquirer.prompt(
        {
            type: 'list',
            message: "Would you like to add another employee?",
            choices: ['Engineer', 'Intern'],
            name: 'role'
        }
    ).then(ans => {
        // use the answer to determine which set of questions should be asked next
        if (ans.role === "Engineer") {
            populateEngineer();
        } else {
            populateIntern();
        }   
    });
}

function populateEngineer() {
    inquirer.prompt(engineerQuestions).then(ans => {
        //add the engineer to the list of employees
        employeeList.push(new Engineer(ans.name, ans.id, ans.email, ans.github));
        //check to see if there are more employees to be added
        if (ans.addEmployee === 'yes') {
            pickType(); // select which type of employee if there are
        } else {
            writeToFile(); // write the file if done
        }
    });
}

function populateIntern() {
    inquirer.prompt(internQuestions).then(ans => {
        //add the intern to the list of employees
        employeeList.push(new Intern(ans.name, ans.id, ans.email, ans.school));
        //check to see if there are more employees to be added
        if (ans.addEmployee === 'yes') {
            pickType(); // select which type of employee if there are
        } else {
            writeToFile(); // write the file if done
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
        //add the manager to the list of employees
        employeeList.push(new Manager(ans.name, ans.id, ans.email, ans.officeNumber));
        //check to see if there are more employees to be added
        if (ans.addEmployee === 'yes') {
            pickType(); // select which type of employee if there are
        } else {
            writeToFile(); // write the file if done
        }
    });
}

init();