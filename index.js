// Build and Commit Plan

// (done) Get the skeleton set up
// (done) Get Input Questionare set up
// (done) get configuration object set up(have the top - down flow of the object mirror the eventual document)
// get Readme hard file set up
// Get progressive top down build, based on object
// Record the video
// create a github repo that hosts the video 


var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "user_github",
        message: "Please input your github username."
    },
    {
        type: "input",
        name: "user_email",
        message: "Please input your email address."
    },
    {
        type: "input",
        name: "project_title",
        message: "Please input the project's title."
    },
    {
        type: "input",
        name: "project_description",
        message: "Please input the project's description."
    },
    {
        type: "input",
        name: "project_installations",
        message: "Please input the project's installation instructions."
    },
    {
        type: "input",
        name: "project_usage",
        message: "Please input the project's usage information."
    },
    {
        type: "input",
        name: "project_contribution",
        message: "Please input the project's contribution guidelines."
    },
    {
        type: "input",
        name: "project_test",
        message: "Please input the project's test instructions."
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
]).then(function (data) {
    console.log(data);

});