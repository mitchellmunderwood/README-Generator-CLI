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

    const readme_text = `# Title \n 
    ### Table of Contents \n
    [** Description **](#Description)[** Installation **](#Installation)[** Usage **](#Usage)[** License **](#License)[** Contributing **](#Contributing)[** Tests **](#Tests)[** Questions **](#Questions)[** Images **](#Images) \n
    ### Description \n
    ### Installation \n
    ### Usage \n
    ### License \n
    ### Contributing \n
    ### Tests \n
    ### Questions \n
    For additional projects and materials, go to *** github link *** \n
    For additional questions, email me at *** email *** \n
    ### Images \n
    [** Top of Page **](#Title) \n`


    fs.writeFile("log.txt", readme_text, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Readme Created");

    });

});