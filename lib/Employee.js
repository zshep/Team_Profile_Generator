//makefunction that renders HTML
    // WHEN I am prompted for my team members and their information
    // THEN an HTML file is generated that displays a nicely formatted team roster based on user input

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
        getName(){ 
            return this.name;
        }
        getId(){
            return this.id;
        }
        getEmail(){
            return this.email;
        }
        getRole(){
            return "Employee";
        } 
}



    // WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

module.exports = Employee;