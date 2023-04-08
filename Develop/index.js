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
    {
      type: 'input',
      name: 'description1',
      message: 'What was your motivation for this project?',
    },
    {
      type: 'input',
      name: 'description2',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'description3',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'description4',
      message: 'What did you learn?',
    },
    {
      type: 'confirm',
      name: 'installation',
      message: 'Are there required steps to install your project?',
      default: true, // Sets the default value to true to ask the question for steps of installation 
    },
    {
      type: 'input',
      name: 'installSteps',
      message: 'Enter the step(s) required for installation',
      when: (answers) => answers.installation, // Only displays answer if the installation question is answered yes (true)
    },
    
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

// {
//   type: 'input',
//   name: '',
//   message: '',
// },