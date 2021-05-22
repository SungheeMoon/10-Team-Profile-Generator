const Manager = require("../classes/Manager");

it("test manager class object", () => {
    //build test case
    const TestManager = new Manager("Olivia",7,"moontjdgml@gmail.com",5);
    //make assertions
    expect(TestManager.getName()).toBe("Olivia");
    expect(TestManager.getId()).toBe(7);
    expect(TestManager.getEmail()).toBe("moontjdgml@gmail.com");
    expect(TestManager.getOfficeNumber()).toBe(5);
});