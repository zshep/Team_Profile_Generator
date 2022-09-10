const Employee = require("../lib/Employee");
const joe = new Employee("joe", 01, "joe@yhoo.com");

    // Unit test - Employee
    describe("Employee", () =>{
        describe("name", () => {

            it("should generate name from Employee class constructor", () => {
               
                expect(joe.name).toEqual("joe");
            })


        });























    });