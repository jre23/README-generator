const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [{
        type: "input",
        message: "Hi! What is your project name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "projectLicense"
    },
    {
        type: "input",
        message: "What is your GitHub URL?",
        name: "userGitHub"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "userEmail"
    }
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();