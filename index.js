//load in needed libraries
const { inquirer } = require("inquirer");





// GIVEN a command-line application that accepts user input
    //start the program by using:
    // node index.js



// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const questions = [
   { type: "input",
    message: "hello manager, what is your name?",
    name: "manager_name"
    },
    { type: "input",
    message: "hello manager, what is your name?",
    name: "manager_name"
    }


]





// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated