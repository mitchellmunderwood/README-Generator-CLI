// Build and Commit Plan

// (done) Get the skeleton set up
// (done) Get Input Questionare set up
// (done) get configuration object set up(have the top - down flow of the object mirror the eventual document)
// get Readme hard file set up
// get the badges to workout https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// Get progressive top down build, based on object
// Record the video
// create a github repo that hosts the video 


var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "user_github",
        message: "Please input your github username.",
        default: ""
    },
    {
        type: "input",
        name: "user_email",
        message: "Please input your email address.",
        default: ""
    },
    {
        type: "input",
        name: "project_title",
        message: "Please input the project's title.",
        default: ""
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
        type: "input",
        name: "project_contribution",
        message: "Please input the project's contribution guidelines.",
        default: ""
    },
    {
        type: "input",
        name: "project_test",
        message: "Please input the project's test instructions.",
        default: ""
    },
    {
        type: "list",
        name: "project_license",
        choices: [
            "license #1",
            "license #2",
            "license #3",
        ]
    },
    {
        type: "input",
        name: "project_question",
        message: "Please input any project questions.",
        default: ""
    },
]).then(function (data) {
    console.log(data);

    const readme_text =
        `# ${data.project_title} \n` +
        '### Table of Contents \n' +
        `[**Description**](#Description)    [**Installation**](#Installation)   [**Usage**](#Usage)    [**License**](#License)    [**Contributing**](#Contributing)    [**Tests**](#Tests)   [**Questions**](#Questions)    [**Images**](#Images) \n` +
        `### Description \n ${data.project_description} \n` +
        `### Installation \n ${data.project_installation} \n` +
        `### Usage \n ${data.project_usage} \n` +
        `### License \n ${data.project_license} \n` +
        `### Contributing \n ${data.project_contribution} \n` +
        `### Tests \n ${data.project_test} \n` +
        `### Questions \n ${data.project_question} \n\n` +
        `For additional projects and materials, go to ***[github.com/${data.user_github}](https://github.com/${data.user_github})*** \n` +
        `For additional questions, email me at ***${data.user_email}*** \n` +


        fs.writeFile("README.md", readme_text, function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Readme Created");

        });

});