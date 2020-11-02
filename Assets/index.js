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
        message: "What is the project's GitHub repo URL?",
        name: "projectRepo"
    },
    {
        type: "input",
        message: "What is the project's GitHub pages URL?",
        name: "projectDeployment"
    },
    {
        type: "input",
        message: "Please write a short description on how a user should install/use your project.",
        name: "projectInstall"
    },
    {
        type: "input",
        message: "What technologies are used in your project?",
        name: "projectTech"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "userEmail"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    const readMeString = `
# ${data.projectName}

## Table of Contents

1. [Description](#Description)
2. [GitHub Repo and Deployment](#GitHub-Repo-and-Deployment)
3. [Screenshots](#Screenshots)
4. [Technologies](#Technologies)
5. [Installation](#Installation)
6. [License](#License)
7. [Questions](#Questions)

## Description

${data.projectDescription}

## GitHub Repo and Deployment

[GitHub repo](${data.projectRepo})

[Deployed on GitHub pages](h${data.projectDeployment})

## Screenshots

![${data.projectName} screenshot 1]()

![${data.projectName} screenshot 2]()

![${data.projectName} screenshot 3]()

## Technologies

Please see the following for a list of technologies used in this project:

* ${data.projectTech}

## Installation

${data.projectInstall}

## License

${data.projectLicense}

## Questions

If you have any questions about this project feel free to reach out using the following email:

${data.userEmail}

`
}

// function to initialize program
function init() {

}

// function call to initialize program
init();