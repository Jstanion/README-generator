// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Import the generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

 // TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title name for your application?',
    },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    //   },
])
// TODO: Create a function to write README file
.then((data) => {
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('success')
)});

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();