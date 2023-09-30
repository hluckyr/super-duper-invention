// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}
return ";"
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
## GitHub Account
${data.username}
## description
${data.description}
## license
${data.license}

## table of contents
* [Installation](#Installation)
* [Usage Information](#usage)
* [Testing](#testing)
* [Contirbution](#contritbution)
* [Questions](#questions)

### Installation
${data.installation}
### Usage
${data.usage}
### Testing
${data.testing}
### Contribution
${data.contribution}
### Questions
Please email me with any questions ${data.email}

`;
}
module.exports = generateMarkdown;