// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?.",
    },
    {
        type: "input",
        name: "installation",
        message: "How can users install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How can your project be used?",
    },
    {
        type: "input",
        name: "credits",
        message: "Who worked on this project?",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "How can people contribute to the project?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("./README.md", data)
    });
}

// Function call to initialize app
init();