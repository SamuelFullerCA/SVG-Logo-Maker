const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./generateSVG");

//prompts the user with questions and returns the generated SVG file using the generateSVG function
inquirer
    .prompt([

        {
            type: 'input',
            name: 'text',
            message: 'Add 3 letters to your Logo:'
        },

        {
            type: 'input',
            name: 'txtColor',
            message: 'What color would you like your text?'
        },
    
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape:',
            choices: ['circle', 'triangle', 'square']
        },

        {
            type: 'input',
            name: 'shpColor',
            message: 'What color would you like your shape?'
        }
    ])
    .then((data) => {
        fs.writeFile('sampleLogo.svg', generateSVG(data), (err) =>
    err ? console.error(err) : console.log('LOGO generated')
  );
    });
