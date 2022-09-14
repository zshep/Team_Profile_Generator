//load in needed libraries
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
//const WriteHtml = require("./src/htmloutline");
//const employeecards = require("./src/htmloutline");
const employeecards = [];



//array of questions for the manager
const main_questions = [

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
]
// question for main menu (after manager has entered info)
const continue_questions = [
    {
        type: "list",
        message: "How would you like to continue?",
        name: "menu",
        choices: ["I would like to add an Engineer", "I would like to add an intern", "I am finished"],
    },
]
// array of questions for the Engineer
const engineer_questions = [
    {
        type: "input",
        message: "What is the name of your engineer?",
        name: "engineer_name"
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

]

//array of questions for the intern
const intern_questions = [
    {
        type: "input",
        message: "What is the name of your intern?",
        name: "intern_name"
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


//function to initialize the app
const init = async () => {
    inquirer.prompt(main_questions)

        .then(answers => {

            //debugging
            
            console.table(answers);
            create_manager_card(answers);                      
                    
            //goes to menu after manager questions answered 
            init_menu();
        })
}

//function to generate engineer html card
const create_manager_card = (results) => {
    const manager = new Manager(results.manager_name, results.manager_id, results.manager_email, results.manager_office);
            console.log("manager was created");
    // string to generate the html card for engineer
    const managerHTMLcard = `
    <div class="mainCard">
    <div class="container">
        <div class= "headBanner">
            <h1>${manager.getName()}</h1>
            <h2>${manager.getRole()}</h2>
        </div>
        <div class= "bottomInfo">
            <p> Id: ${manager.getId()}</p>
            <p><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p> Office Number:${manager.getOffice()}</p>
        </div>
    </div>
    </div>
    `;
    
   employeecards.push(managerHTMLcard);
}

//function for menu questions
const init_menu = () => {

    inquirer.prompt(continue_questions)

        .then(answers => {

            //debugging
            console.table(answers);
            switch(answers.menu) {
                case "I would like to add an Engineer":    
                    return init_engineer();

                case "I would like to add an intern":
                    return init_intern();

                case "I am finished":
                    console.log("the user has ended the app")
                    //
                    return WriteHtml(); //return function to start making htmal page
            }
     
        })
}

//function for engineer questions
const init_engineer = () => {
    inquirer.prompt(engineer_questions)

        .then(answers => {
            //debugging
            console.table(answers);
            create_engineer_card(answers);                      
            init_menu();
        })
}

//function to generate engineer html card
const create_engineer_card = (results) => {
    const engineer = new Engineer(results.engineer_name, results.engineer_id, results.engineer_email, results.engineer_github);
            console.log("engineer was created");
    // string to generate the html card for engineer
    const engineerHTMLcard = `
    <div class="mainCard">
    <div class="container">
        <div class= "headBanner">
            <h1>${engineer.getName()}</h1>
            <h2>${engineer.getRole()}</h2>
        </div>
        <div class= "bottomInfo">
            <p> Id: ${engineer.getId()}</p>
            <p><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p><a href="https://github.com/${engineer.getGithub()}">Github Link</a></p>
        </div>
    </div>
    </div>
    `;
    
   employeecards.push(engineerHTMLcard);
}

//function for intern questions

const init_intern = () => {
    inquirer.prompt(intern_questions)

    .then(answers => {

        //debugging
        console.table(answers);
        create_intern_card(answers);
        init_menu();

    })

}

//function to generate engineer html card
const create_intern_card = (answers) => {
    const intern = new Intern(answers.intern_name, answers.intern_id, answers.intern_email, answers.intern_school);
            console.log("intern was created");
    // string to generate the html card for engineer
    const internHTMLcard = `
    <div class="mainCard">
    <div class="container">
        <div class= "headBanner">
            <h1>${intern.getName()}</h1>
            <h2>${intern.getRole()}</h2>
        </div>
        <div class= "bottomInfo">
            <p> Id: ${intern.getId()}</p>
            <p><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p> School:${intern.getSchool()}</p>
        </div>
    </div>
    </div>
    `;
    
   employeecards.push(internHTMLcard);
}



// html tags and code to help generate html file
const htmlHeadTag = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./style.css">
</head>`;

const htmlBodyTagOpen = `
<body>
<div class="header">  
<h2>My Team</h2>
</div>
<div class="allCards">`;


const htmlBodyTagClose = `    
</div>
</body>
</html>`;





//function to take data from inquirer and generate the html
function WriteHtml() {
    console.log(typeof employeecards );
    let new_member = employeecards;
    const string = `${htmlHeadTag}${htmlBodyTagOpen}${new_member}${htmlBodyTagClose}`
    
    
    //writing file with all of the html formatting above
    fs.writeFile("./dist/team.html", string, (err) => {
        err ? console.error(err) : console.log("Success writing file")
    
    })
};






//Action code
//starting the app
init();




