//function to generatereadme
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.testing}

## Questions
For additional questions, you can reach me through:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
