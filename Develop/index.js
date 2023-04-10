// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Import the generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
function init() {
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
      default: false, 
    },
    {
      type: 'input',
      name: 'installSteps',
      message: 'Enter the step(s) required for installation:',
      filter: (input) => `${input}`,
      when: (data) => data.installation, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide any usage instructions and examples:',
    },
    {
      type: 'confirm',
      name: 'screenshot',
      message: 'Would you like to add a screenshot?',
      default: false,
    },
    {
      type: 'input',
      name: 'screenshotText',
      message: 'Enter a description for the screenshot alt text:',
      filter: (input) => `![${input}]`,
      when: (data) => data.screenshot, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'screenshotURL',
      message: 'Enter the URL/Filepath for the screenshot:',
      filter: (input) => `(${input})`,
      when: (data) => data.screenshot, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'confirm',
      name: 'walkthrough',
      message: 'Would you like to add a video walkthrough link?',
      default: false,
    },
    {
      type: 'input',
      name: 'walkthroughText',
      message: 'Enter a short description for the video walkthrough hyperlink:',
      filter: (input) => `[${input}]`,
      when: (data) => data.walkthrough, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'walkthroughURL',
      message: 'Enter the URL/Filepath for the video walkthrough:',
      filter: (input) => `(${input})`,
      when: (data) => data.walkthrough, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'confirm',
      name: 'credits',
      message: 'Would you like to add a collaborator, third-party asset, or tutorial?',
      default: false,
    },
    {
      type: 'input',
      name: 'creditText',
      message: 'Enter a short description for the collaborator, third-party asset, or tutorial hyper link:',
      filter: (input) => `[${input}]`,
      when: (data) => data.walkthrough, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'creditURL',
      message: 'Enter the URL/Filepath for the collaborator, third-party asset, or tutorial:',
      filter: (input) => `(${input})`,
      when: (data) => data.walkthrough, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your application:',
      choices: ['None', 'MIT', 'BSD', 'Apache 2.0', 'Copyleft', 'GNU GPLv3'],
      default: 'None'
    },
    {
      type: 'confirm',
      name: 'contributing',
      message: 'Would you like to add the standard contribution guidelines from Contributor Covenant?',
      default: true,
    },
    {
      type: 'input',
      name: 'contributingText',
      message: 'Enter a short description for the contribution guidelines source hyperlink:',
      filter: (input) => `[${input}]`,
      when: (data) => !data.contributing, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'contributingURL',
      message: 'Enter the URL/Filepath for the contribution guidelines source:',
      filter: (input) => `(${input})`,
      when: (data) => !data.contributing, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'confirm',
      name: 'tests',
      message: 'Would you like to provide tests for your application?',
      default: false,
    },
    {
      type: 'input',
      name: 'testDescription',
      message: 'Please provide tests for your application:',
      when: (data) => data.tests, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'testAltText',
      message: 'Enter a short description for the test example hyperlink:',
      filter: (input) => `[${input}]`,
      when: (data) => data.tests, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'testURL',
      message: 'Enter the URL/Filepath for the test example source:',
      filter: (input) => `(${input})`,
      when: (data) => data.tests, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please provide your full name:',
      filter: (input) => `[${input}]`,
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your GitHub profile username:',
      filter: (input) => `(https://github.com/${input})`,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address:',
      filter: (input) => `(mailto:${input})`,
    },

])
// TODO: Create a function to write README file
.then((data) => {
  const sections = {
    installation: data.installation ? `-${data.installSteps}` : '',
    screenshot: data.screenshot ? `${data.screenshotText}${data.screenshotURL}` : '',
    walkthrough: data.walkthrough ? `${data.walkthroughText}${data.walkthroughURL}` : '',
    credits: data.credits ? `${data.creditText}${data.creditURL}` : '',
    contributing: data.contributing ? '[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt)' : `${data.contributingText}${data.contributingURL}`,
    tests: data.tests ? `${data.testDescription}\n ${data.testAltText}${data.testURL}` : ''
  };
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(data, sections), (err) =>
    err ? console.log(err) : console.log('success')
)});
};

// Function call to initialize app
init();