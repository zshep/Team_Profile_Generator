const Engineer = require("../lib/Engineer");
const trish = new Engineer("trish", 2, "trishodish@gmail.com", "trishdish");

    //Unit test - Engineer
    describe("Engineer", () =>{
        // testing github username arguement 
        describe("getGithub", () => {

            it("should generate the github username from Engineer constructor", () => {     

                expect(trish.gitHub).toEqual("trishdish");
               })
         });
         // testing getRole Method
         describe("getRole", () => {
            it("should override the role to Engineer", () =>{
                expect(trish.role).toEqual("Engineer")

            })

         })

    });