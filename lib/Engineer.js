const Employee = require("./Employee");

    class Engineer extends Employee {
        constructor(name, id, email, gitHub){
            super(name, id, email, "Engineer")
            this.gitHub = gitHub;
        }
        getGithub(){
            return this.gitHub;

        }   
        
}

    
module.exports = Engineer;