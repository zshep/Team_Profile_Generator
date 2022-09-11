const Manager = require("../lib/Manager");
const bob = new Manager("bob", 1, "bobMarly@gmail.com", 25);

    //Unit test - Manager
    describe("Manager", () =>{
        // testing officeNumber
        describe("officeNumber", () => {

            it("should generate the office number from Manager constructor", () => {     

                expect(bob.officeNumber).toEqual(25);
               })
      } );

    });









// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number





 // WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team