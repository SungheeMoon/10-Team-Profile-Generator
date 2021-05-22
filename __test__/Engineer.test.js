const Engineer = require("../classes/Engineer");

it("test engineer class object", () => {
    //build test case
    const TestEngineer = new Engineer("Olivia",7,"moontjdgml@gmail.com","sungheemoon");
    //make assertions
    expect(TestEngineer.getName()).toBe("Olivia");
    expect(TestEngineer.getId()).toBe(7);
    expect(TestEngineer.getEmail()).toBe("moontjdgml@gmail.com");
    expect(TestEngineer.getGithub()).toBe("sungheemoon");
});