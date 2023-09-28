// TODO: Include packages needed for this application
const badmath = require('badmath');
// TODO: Create an array of questions for user input

//Title of my project and sections entitled Description, 
//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

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
        type: 'input',
        message: 'Table of Contents:',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'installation instructions:',
        name: 'installation',
        choices: ["Apache License 2.0", "GNU v3.0". "MIT", "BSD 2-Clause", "BSD 3-Clause", "Boost Software 1.0"."NONE"],
    },
    {
        type: 'input',
        message: 'usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'License:',
        name: 'license',
    },
    {
        type: 'input',
        message: 'contribution guidelines:',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'test instructions:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Questions:',
        name: 'questions',
    },
];

console.log("const questions");

// TODO: Create a function to write README file
const README = `My Github account to view my other project ${questions.username}, to contact me  ${questions.email} from the album ${music.album} is currently playing`;

console.log(songSnippet)

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

