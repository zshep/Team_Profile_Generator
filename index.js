//load in needed libraries
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');



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


// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
//function to take data from inquirer and write the html
function WriteHtml(answer) {

    //writing file from user input
    fs.writeFile("team.html", gennerate_members(answer), (err) => {
        err ? console.error(err) : console.log("Success writing file")
    
    })
};

    

// function to generate make up of html card
const generate_members = (answers) => {



}

//function to initialize the app
const init = async () => {
    inquirer.prompt(main_questions)

        .then(answers => {

            //debugging
            console.table(answers);
            const manager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_office);
            console.log("manager was created")
            console.log(manager);

            //goes to menu after manager questions answered 
            init_menu();
        })
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
                    return;
            }
         
        })

}

//function for engineer questions
const init_engineer = () => {
    inquirer.prompt(engineer_questions)

        .then(answers => {

            //debugging
            console.table(answers);

            init_menu();

        })

}

//function for intern questions

const init_intern = () => {
    inquirer.prompt(intern_questions)

    .then(answers => {

        //debugging
        console.table(answers);

        init_menu();

    })

}


 //staring the writeHTML function
//WriteHtml(answers);





init();




