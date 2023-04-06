// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input => can this be an inquirer/prompt method here?
inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title name for your application?',
    }
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();