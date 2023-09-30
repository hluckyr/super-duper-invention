// packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Project title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project Description',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'License',
        name: 'license',
        choices: ["Apache License 2.0", "GNU v3.0", "MIT", "BSD 2-Clause", "BSD 3-Clause", "Boost Software 1.0", "NONE"],
    },
    {
        type: 'input',
        message: 'installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'testing',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'contribution',
        name: 'contribution',
    },

];

console.log("const questions");

//function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(generateMarkdown(answers))
        fs.writeFileSync("README.md", generateMarkdown(answers))
    })
}
init();