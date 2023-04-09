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
      message: 'Enter the step(s) required for installation.',
      filter: (input) => `${input}`,
      when: (data) => data.installation, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use.',
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
      message: 'Enter a description for the screenshot.',
      filter: (input) => `![${input}]`,
      when: (data) => data.screenshot, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'screenshotURL',
      message: 'Enter the URL/Filepath for the screenshot.',
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
      message: 'Enter a short description for the video walkthrough.',
      filter: (input) => `[${input}]`,
      when: (data) => data.walkthrough, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'walkthroughURL',
      message: 'Enter the URL/Filepath for the video walkthrough.',
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
      message: 'Enter a short description for the collaborator, third-party asset, or tutorial.',
      filter: (input) => `[${input}]`,
      when: (data) => data.walkthrough, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'creditURL',
      message: 'Enter the URL/Filepath for the collaborator, third-party asset, or tutorial.',
      filter: (input) => `(${input})`,
      when: (data) => data.walkthrough, // Only displays answer if the installation question is given a truthy value
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
      message: 'Enter a short description for the contribution guidelines source.',
      filter: (input) => `[${input}]`,
      when: (data) => !data.contributing, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'contributingURL',
      message: 'Enter the URL/Filepath for the contribution guidelines source.',
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
      message: 'Please provide tests for your application.',
      when: (data) => data.tests, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'testAltText',
      message: 'Enter a short description for the test example.',
      filter: (input) => `[${input}]`,
      when: (data) => data.tests, // Only displays answer if the installation question is given a truthy value
    },
    {
      type: 'input',
      name: 'testURL',
      message: 'Enter the URL/Filepath for the test example source.',
      filter: (input) => `(${input})`,
      when: (data) => data.tests, // Only displays answer if the installation question is given a truthy value
    },
])
// TODO: Create a function to write README file
.then((data) => {
  const sections = {
    installation : data.installation ? `Please follow these steps for installation:\n-${data.installSteps}` : 'There are no installation steps required.',
    screenshot : data.screenshot ? `Please click below to view screenshot:\n${data.screenshotText}${data.screenshotURL}` : 'There are no screenshots available for this application.',
    walkthrough : data.walkthrough ? `Please click the link to view walkthrough video:\n${data.walkthroughText}${data.walkthroughURL}` : 'There are no walkthrough videos available for this application.',
    credits : data.credits ? `Please click the link to view the profile or website:\n${data.creditText}${data.creditURL}` : 'There are no collaborators, third-party assets, or tutorials for this application.',
    contributing : data.contributing ? 'Please click the link to view contribution guidelines:\n[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt)' : `${data.contributingText}${data.contributingURL}`,
    tests: data.tests ? `${data.testDescription}\nPlease click the link to view test examples:\n${data.testAltText}${data.testURL}` : 'There are no tests for this application.'
  };
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(data, sections), (err) =>
    err ? console.log(err) : console.log('success')
)});
};

// Function call to initialize app
init();