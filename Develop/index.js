const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [{
        type: 'input',
        message: 'Project title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage instructions: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Test instructions: ',
        name: 'tests'
    },
    {
        type: 'checkbox',
        message: 'License: ',
        name: 'license',
        choices: ['License 1', 'License 2', 'Jordan you need to look up what licenses these are']
    }, {
        type: 'input',
        message: 'Github username: ',
        name: 'username'
    }, {
        type: 'input',
        message: 'Email address: ',
        name: 'email'
    }
];

// function to write README file
function writeToFile(mrkdwn) {
    fs.writeFile('./generatedREADME.md', mrkdwn, (err) =>
        err ? console.error(err) : console.log('README successfully generated'));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        const md = generateMarkdown(response);
        writeToFile(md);
    });
}

// function call to initialize program
init();