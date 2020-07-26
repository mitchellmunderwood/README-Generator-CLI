// Build and Commit Plan

// (done) Get the skeleton set up
// (done) Get Input Questionare set up
// (done) get configuration object set up(have the top - down flow of the object mirror the eventual document)
// (done) get Readme hard file set up
// (done) Get progressive top down build, based on object
// get the badges to workout https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// Record the video
// create a github repo that hosts the video 


var inquirer = require("inquirer");
var fs = require("fs");

// Input your default github and email
var github = "sassypigeon"
var email = "mitchellmunderwood@gmail.com"

// Prompt and Document generation
inquirer.prompt([
    {
        type: "input",
        name: "project_title",
        message: "Please input the project's title.",
        default: "Project Title"
    },
    {
        type: "input",
        name: "project_description",
        message: "Please input the project's description.",
        default: ""
    },
    {
        type: "input",
        name: "project_installations",
        message: "Please input the project's installation instructions.",
        default: ""
    },
    {
        type: "input",
        name: "project_usage",
        message: "Please input the project's usage information.",
        default: ""
    },
    {
        type: "list",
        name: "project_license",
        choices: [
            "Apache 2.0",
            "BSD 2.0",
            "BSD 3.0",
            "GPL 2.0",
            "GPL 3.0",
            "MIT"
        ]
    },
    {
        type: "input",
        name: "project_contribution",
        message: "Please input the project's contribution guidelines.",
        default: ""
    },
    {
        type: "input",
        name: "project_tests",
        message: "Please input the project's test instructions.",
        default: ""
    },
    {
        type: "input",
        name: "project_questions",
        message: "Please input any project questions.",
        default: ""
    },
    {
        type: "input",
        name: "user_github",
        message: "Please input your github username.",
        default: `${github}`
    },
    {
        type: "input",
        name: "user_email",
        message: "Please input your email address.",
        default: `${email}`
    }
]).then(function (data) {


    let license_text;

    switch (data.project_license) {
        case 'MIT':
            license_text = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'GPL 3.0':
            license_text = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'GPL 2.0':
            license_text = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            break;
        case 'Apache 2.0':
            license_text = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'BSD 2.0':
            license_text = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            break;
        case 'BSD 3.0':
            license_text = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        default:
            license_text = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
    }


    const readme_text =
        `# ${data.project_title} \n` +
        `${license_text} \n` +
        `### Description \n ${data.project_description} \n` +
        '### Table of Contents \n' +
        `- [**Description**](#Description) \n` +
        `- [**Installation**](#Installation) \n` +
        `- [**Usage**](#Usage) \n` +
        `- [**License**](#License) \n` +
        `- [**Contributing**](#Contributing) \n` +
        `- [**Tests**](#Tests) \n` +
        `- [**Questions**](#Questions)\n` +
        `### Installation \n ${data.project_installations} \n` +
        `### Usage \n ${data.project_usage} \n` +
        `### License \n` +
        `This project is covered under the ${data.project_license} license. \n` +
        `### Contributing \n ${data.project_contribution} \n` +
        `### Tests \n ${data.project_tests} \n` +
        `### Questions \n ${data.project_questions} \n` +
        `For additional projects and materials, go to ***[github.com/${data.user_github}](https://github.com/${data.user_github})***. \n` +
        `For additional questions, email me at ***${data.user_email}*** \n`

    fs.writeFile("README.md", readme_text, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Readme Created");
    });

});