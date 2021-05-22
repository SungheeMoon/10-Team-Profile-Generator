const Employee = require("../classes/Employee");

it("test employee class object", () => {
    //build test case
    const TestEmployee = new Employee("Olivia",7,"moontjdgml@gmail.com");
    //make assertions
    expect(TestEmployee.getName()).toBe("Olivia");
    expect(TestEmployee.getId()).toBe(7);
    expect(TestEmployee.getEmail()).toBe("moontjdgml@gmail.com");
});