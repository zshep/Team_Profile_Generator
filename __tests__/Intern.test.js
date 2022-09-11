const Intern = require("../lib/Intern");
const ryan = new Intern("ryan", 3, "ryan@gmail.com", "DunderMifllin School of Hardknocks");

    //Unit test - Intern
    describe("Intern", () => {
        // testing intern arguement 
        describe("Intern", () => {

            it("should generate the github username from Engineer constructor", () => {     

                expect(ryan.school).toEqual("DunderMifllin School of Hardknocks");
               })
         });
         // testing getRole Method
         describe("getRole", () => {
            it("should override the role to Engineer", () =>{
                expect(ryan.role).toEqual("Intern")

            })

         })

    });