const Intern = require("../classes/Intern");

it("test intern class object", () => {
    //build test case
    const TestIntern = new Intern("Olivia",7,"moontjdgml@gmail.com","penn");
    //make assertions
    expect(TestIntern.getName()).toBe("Olivia");
    expect(TestIntern.getId()).toBe(7);
    expect(TestIntern.getEmail()).toBe("moontjdgml@gmail.com");
    expect(TestIntern.getSchool()).toBe("penn");
});