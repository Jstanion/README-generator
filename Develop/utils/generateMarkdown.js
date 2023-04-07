// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n

## Description\n
${data.description1} ${data.description2} ${data.description3} ${data.description4}\n

## Table of Contents\n


## Installation\n


## Usage\n


## Credits\n


## License\n


## Contributing\n


## Tests\n


## Questions
`;
}
module.exports = {generateMarkdown};
