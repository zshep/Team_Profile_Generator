//load in needed libraries
const inquirer  = require("inquirer");
const { Employee } = require("./lib/Employee");
const { Manager  } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");
const fs = require('fs');









// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const questions = [
    
    {
        type: "input",
        message: "hello manager, what is your name?",
        name: "manager_name"
    },
    {
        type: "input",
        message: "What is your id number?",
        name: "manager_id"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "manager_email",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "manager_office",
    },
    {
        type: "list",
        message: "How would you like to continue?",
        name: "menu",
        choices: ["I would like to add an Engineer", "I would like to add an intern", "I am finished"],
    },
    {
        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        type: "input",
        message: "What is the name of your engineer?",
        name: "engineer_name",
        when: (answers) => answers.menu === "I would like to add an Engineer",
    },
    {
        type: "input",
        message: "What is the id of your engineer?",
        name: "engineer_id",      
    },
    {
        type: "input",
        message: "What is the email of your engineer?",
        name: "engineer_email",      
    },
    {
        type: "input",
        message: "What is the github username of your engineer?",
        name: "engineer_github",      
    },
    {
        type: "list",
        message: "How would you like to continue?",
        name: "menu",
        choices: ["I would like to add an Engineer", "I would like to add an intern", "I am finished"],   
    },
    // WHEN I select the intern option
    // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    {
        type: "input",
        message: "What is the name of your intern?",
        name: "intern_name",
        when: (answers) => answers.menu === "I would like to add an intern",
    },
    {
        type: "input",
        message: "What is the id of your intern?",
        name: "intern_id",      
    },
    {
        type: "input",
        message: "What is the email of your intern?",
        name: "intern_email",      
    },
    {
        type: "input",
        message: "What school is your intern attending?",
        name: "intern_school",      
    },


    
]
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
//function to take data from inquirer and write the html
function WriteHtml(answer){
    
    
};






//function to initialize the app
function init() {
    inquirer.prompt(questions)

        .then(answers => {

        //debugging
        console.table(answers);
        //staring the writeHTML function
        WriteHtml(answers);

        })

}

// GIVEN a command-line application that accepts user input
//start the program by using:
// node index.js
init();




