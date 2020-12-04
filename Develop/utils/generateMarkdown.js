// function to generate markdown for README
function generateMarkdown(data) {
    let markdown = `# ${data.title}

## Description 
      
    ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
    ${data.installation}
    
## Usage
    ${data.usage}

## Contributing
    ${data.contributing}

## Testing
    ${data.tests}
    
## License
    ${data.license}

## Questions? 
    GitHub: @github.com/${data.username}
    Email: ${data.email}
    `
    return markdown;
};

module.exports = generateMarkdown