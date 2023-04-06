// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title name for your application?',
    }
])

// TODO: Create a function to write README file
.then((data) => {
    fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('success')
)});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();