const Employee = require("./Employee");

    class Manager extends Employee {
        constructor(name, id, email, officeNumber){
            super(name, id, email, "Manager")
            this.officeNumber = officeNumber;
        }   

    }

//makefunction that renders HTML
    // WHEN I am prompted for my team members and their information
    // THEN an HTML file is generated that displays a nicely formatted team roster based on user input


   




 // WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

module.exports = Manager;