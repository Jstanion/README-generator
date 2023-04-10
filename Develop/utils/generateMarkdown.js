
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = function(license) {
  if(license === 'none') {
    return ''
  } else {
    return `![License: ${license}](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = function(license) {
  if(license === 'MIT') {
    return `This application is covered under the following: [License: ${license}](https://mit-license.org/)`
  } else if (license === 'BSD') {
    return `This application is covered under the following: [License: ${license}](https://choosealicense.com/licenses/bsd-3-clause/)`
  } else if (license === 'Apache 2.0') {
    return `This application is covered under the following: [License: ${license}](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'Copyleft') {
    return `This application is covered under the following: [License: ${license}](https://www.mend.io/resources/blog/open-source-copyleft-licenses/)`
  } else if (license === 'GNU GPLv3') {
    return `This application is covered under the following: [License: ${license}](https://www.gnu.org/licenses/quick-guide-gplv3.html)`
  } else {
    return ''
  };
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data, sections) => {
  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  return `# ${data.title}\n
${badge}\n
## Description\n
${data.description1} ${data.description2} ${data.description3} ${data.description4}\n
## Table of Contents\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Credits](#credits)\n
- [License](#license)\n
- [Contributing](#contributing)\n
- [Tests](#tests)\n
- [Questions](#questions)\n
## Installation\n
${sections.installation}\n
## Usage\n
${data.usage}\n
${sections.screenshot}\n
${sections.walkthrough}\n
## Credits\n
${sections.credits}\n
## License\n
${licenseLink}\n
## Contributing\n
${sections.contributing}\n
## Tests\n
${sections.tests}\n
## Questions\n
Please visit my GitHub profile for more of my work:
${data.name}${data.github}\n
For any questions about this application you can contact:
${data.name}${data.email}
`;
}

module.exports = {generateMarkdown};