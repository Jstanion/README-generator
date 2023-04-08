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
      default: true, // Sets the default value to true 
    },
    {
      type: 'input',
      name: 'installSteps',
      message: 'Enter the step(s) required for installation.',
      filter: (input) => `Please follow these steps for installation:\n-${input}`,
      when: (data) => data.installation, // Only displays answer if the installation question is answered yes (true)
    },
    {
      type: 'input',
      name: 'installSteps',
      message: 'Please press enter to confirm the default message.',
      when: (data) => !data.installation, // Displays a default message when no installation steps are provided
      default: 'There are no installation steps required for this application at this time.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'confirm',
      name: 'screenshot',
      message: 'Would you like to add a screenshot?',
      default: true, // Sets the default value to true 
    },
    {
      type: 'input',
      name: 'imgAltText',
      message: 'Enter a description for the screenshot.',
      filter: (input) => `Please click below to view content:\n ![${input}]`,
      when: (data) => data.screenshot, // Only displays answer if the installation question is answered yes (true)
    },
    {
      type: 'input',
      name: 'imgURL',
      message: 'Enter the URL/Filepath for the screenshot.',
      filter: (input) => `(${input})`,
      when: (data) => data.screenshot, // Only displays answer if the installation question is answered yes (true)
    },
    {
      type: 'confirm',
      name: 'walkthrough',
      message: 'Would you like to add a video walkthrough link?',
      default: true, // Sets the default value to true 
    },
    {
      type: 'input',
      name: 'walkthroughDescription',
      message: 'Enter a description for the video walkthrough.',
      when: (data) => data.walkthrough, // Only displays answer if the installation question is answered yes (true)
    },
    {
      type: 'input',
      name: 'walkthroughURL',
      message: 'Enter the URL/Filepath for the video walkthrough.',
      when: (data) => data.walkthrough, // Only displays answer if the installation question is answered yes (true)
    },
])
// TODO: Create a function to write README file
.then((data) => {
    // const screenshot = data.addScreenshot ? `Please click below to view content:\n ![${data.screenshotDescription}](${data.screenshotURL})` : 'There are no screenshots available for this application.'
    const walkthrough = data.addWalkthrough ? `Please click below to view content:\n ![${data.walkthroughDescription}](${data.walkthroughURL})` : 'There are no screenshots available for this application.'
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(data, walkthrough), (err) =>
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

