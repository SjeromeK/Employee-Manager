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
            message: "Welcome Manager, What is your name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your Id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is your office number?"
        }

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId,answers.managerEmail, answers.managerOfficeNum);
        teamArray.push(manager);
        console.log(teamArray);
    })
}

createManager();