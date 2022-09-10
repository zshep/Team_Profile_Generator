const Employee = require("../lib/Employee");
const joe = new Employee("joe", 1, "joe@yhoo.com");

    // Unit test - Employee
    describe("Employee", () =>{
        // Testing the name arguement 
        describe("name", () => {

            it("should generate name from Employee class constructor", () => {
               
                expect(joe.name).toEqual("joe");
            })


        });
        // testing the id arguement
        describe("id", () => {

            it("should generate id from Employee class constructor", () => {
               
                expect(joe.id).toEqual(1);
            })


        });
            //testing the email arguement 
        describe("email", () => {
            it("should generate an email from Employee class constructor", () => {
               
                expect(joe.email).not.toBeNull();
            })


        });

        describe("getName", () => {
            it("should grab the name from class constructor", () => {
                
                expect(joe.getName()).toEqual(joe.name);

            })

        });

        describe("getId", () => {
            it("should grab the Id from class constructor", () => {
                
                expect(joe.getId()).toEqual(joe.id);

            })

        });

        describe("getEmail", () => {
            it("should grab the email from class constructor", () => {
                
                expect(joe.getEmail()).toEqual(joe.email);

            })

        });

        describe("getRole", () => {
            it("should grab the Role from class constructor", () => {
                
                expect(joe.getRole()).toEqual("Employee");

            })

        });






    });