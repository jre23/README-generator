// dependencies
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
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "Eclipse Public", "GNU", "Mozilla", "ISC"],
        name: "projectLicense"
    },
    {
        type: "input",
        message: "What is the project's GitHub repo name?",
        name: "projectRepo"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHubUserName"
    },
    {
        type: "input",
        message: "Please write a short description on how a user should install your project.",
        name: "projectInstall"
    },
    {
        type: "input",
        message: "Please write a short description on how a user should use your project.",
        name: "projectUsage"
    },
    {
        type: "input",
        message: "Please write a short description on how a user should contribute to your project.",
        name: "projectContribute"
    },
    {
        type: "input",
        message: "Please write a short description on how a user should test your project.",
        name: "projectTest"
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
    let licenseBadge = "";
    // if statements to determine what badge to display depending on user input
    // links from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    if (data.projectLicense === "MIT") {
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)";
    } else if (data.projectLicense === "Apache 2.0") {
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (data.projectLicense === "BSD 3-Clause") {
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (data.projectLicense === "BSD 2-Clause") {
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (data.projectLicense === "Eclipse Public") {
        licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (data.projectLicense === "GNU") {
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (data.projectLicense === "Mozilla") {
        licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (data.projectLicense === "ISC") {
        licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }

    // string to pass to fs.writeFile
    const readMeString = `# ${data.projectName}

## Table of Contents

1. [Description](#Description)
2. [GitHub Repo and Deployment](#GitHub-Repo-and-Deployment)
3. [Screenshots](#Screenshots)
4. [Technologies](#Technologies)
5. [Installation](#Installation)
6. [Usage](#Usage)
7. [License](#License)
8. [Questions](#Questions)

## Description

${data.projectDescription}

${licenseBadge}

## GitHub Repo and Deployment

[GitHub repo](https://github.com/${data.gitHubUserName}/${data.projectRepo})

## Screenshots

![${data.projectName} screenshot 1]()

![${data.projectName} screenshot 2]()

![${data.projectName} screenshot 3]()

## Technologies

Please see the following for the technologies used in this project:

* ${data.projectTech}

## Installation

${data.projectInstall}

## Usage

${data.projectUsage}

## License

This project is licensed under the ${data.projectLicense} license.

## Contributing

${data.projectContribute}

## Tests

${data.projectTest}

## Questions

Check out my GitHub profile:

[GitHub Profile](https://github.com/${data.gitHubUserName})

If you have any questions about this project feel free to reach out using the following email link:

[Email](mailto:${data.userEmail})
`
    // call fs.writeFile to create the README-project.md
    fs.writeFile(fileName, readMeString, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your new README file is titled 'README-" + data.projectName + ".md' and should be located in your local repo!");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (response) {
            writeToFile("README-" + response.projectName + ".md", response);
        });
}

// function call to initialize program
init();