const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./generateSVG");

//prompt of questions and returns the mardown file
inquirer
    .prompt([

        {
            type: 'input',
            name: 'text',
            message: 'text'
        },

        {
            type: 'input',
            name: 'txtColor',
            message: 'text color'
        },
    
        {
            type: 'list',
            name: 'shape',
            message: '',
            choices: ['circle', 'triangle']
        },

        {
            type: 'input',
            name: 'shpColor',
            message: 'shape color'
        }
    ])
    .then((data) => {
        fs.writeFile('sampleLogo.svg', generateSVG(data), (err) =>
    err ? console.error(err) : console.log('LOGO generated')
  );
    });
