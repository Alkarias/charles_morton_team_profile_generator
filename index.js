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
        message: 'Would you like to add another employee?',
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
        message: 'Would you like to add another employee?',
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
        message: 'Would you like to add another employee?',
        choices: ['yes','no'],
        name: 'addEmployee'
    }
]

function pickType() {
    // ask which type of employee should be added
    inquirer.prompt(
        {
            type: 'list',
            message: "Are they an engineer or intern?",
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
    let data = generateHtml();
    fs.writeFileSync(`./dist/${fileName}`, data);
}

function generateHtml() {
    //start the file with the necessary setup and metadata
    let content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Generator</title>
</head>
<body class="container-fluid p-0">
    <header class="bg-danger text-light py-4 mb-4">
        <h1 class="text-center">My Team</h1>
    </header>

    <section class="d-flex justify-content-center">`;
//----------------------------------
// This is where the logic to generate the cards goes
    content += writeEmployee(employeeList[0]);
    // writing this as individual loops ensures that the roles will be grouped together
    employeeList.forEach(employee => {
        if (employee.getRole() === 'Engineer') content += writeEmployee(employee);
    }); 
    employeeList.forEach(employee => {
        if (employee.getRole() === 'Intern') content += writeEmployee(employee);
    })  
//----------------------------------

// closing open element tags
content += `
    </section>
</body>
</html>`;

    return content;
}

function writeEmployee(employee) {
    return `
        <div class="shadow m-3">
            <div class="bg-primary text-light p-2">
                <h3>${employee.getName()}</h3>
                <h4>${employee.getRole()}</h4>
            </div>
            <ul class="list-group p-3">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">
                    <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                </li>
                <li class="list-group-item">${checkRole(employee)}</li>
            </ul>
        </div>`;
}

function checkRole(employee) {
    if (employee.getRole() === 'Manager') return `Office Number: ${employee.getOfficeNumber()}`;
    else if (employee.getRole() === 'Engineer') {
        return `Github: <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
    } else if (employee.getRole() === 'Intern') return `School: ${employee.getSchool()}`;
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