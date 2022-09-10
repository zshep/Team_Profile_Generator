const Employee = require("../lib/Employee");
const joe = new Employee("joe", 1, "joe@yhoo.com");

    // Unit test - Employee
    describe("Employee", () =>{
        describe("name", () => {

            it("should generate name from Employee class constructor", () => {
               
                expect(joe.name).toEqual("joe");
            })


        });

        describe("id", () => {

            it("should generate id from Employee class constructor", () => {
               
                expect(joe.id).toEqual(1);
            })


        });

        describe("email, () => {

            it("should generate an email from Employee class constructor", () => {
               
                expect(joe.Email).toEqual(1);
            })


        });






















    });