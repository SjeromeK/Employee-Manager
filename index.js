const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const teamArray = [];


function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Welcome Manager, What is your name?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "Please enter your name";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your Id?",
            validate: answer => {
                const pass = answer.match(/^[0-9]*$/)
                if(pass) {
                    return true;
                } 
                return "Please enter only numbers"
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your email?",
            validate: answer => {
                const pass = answer.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

                if(pass) {
                    return true;
                }
                return "Please enter a valid email address";
            }
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is your office number?",
            validate: answer => {
                const pass = answer.match(/^[0-9]*$/)
                if(pass) {
                    return true;
                } 
                return "Please enter only numbers"
            }
        }

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
        teamArray.push(manager);
        console.log(teamArray);
        createTeam();
    })
}
function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "What Type of Employee do you want to create",
            name: "teamRole",
            choices: [
                "engineer",
                "intern",
                "none"
            ]
        }
    ]).then(answers => {
        switch (answers.teamRole) {
            case "engineer":
                addEngineer();
                break;
            case "intern":
                addIntern();
                break;
            default:
            // code block
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Welcome Manager, What is your name?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "Please enter your name";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your Id?",
            validate: answer => {
                const pass = answer.match(/^[0-9]*$/)
                if(pass) {
                    return true;
                } 
                return "Please enter only numbers"
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your email?",
            validate: answer => {
                const pass = answer.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

                if(pass) {
                    return true;
                }
                return "Please enter a valid email address";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your github?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "Please enter your github";
            }
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName,answers.engineerId, answers.engineerEmail,answers.engineerGithub);
        teamArray.push(engineer)
    })
} 
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Welcome Manager, What is your name?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "Please enter your name";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is your Id?",
            validate: answer => {
                const pass = answer.match(/^[0-9]*$/)
                if(pass) {
                    return true;
                } 
                return "Please enter only numbers"
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your email?",
            validate: answer => {
                const pass = answer.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

                if(pass) {
                    return true;
                }
                return "Please enter a valid email address";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school do you attend",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "Please enter your school";
            }
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName,answers.internId, answers.internEmail,answers.internSchool);
        teamArray.push(intern)
    })
} 

createManager();