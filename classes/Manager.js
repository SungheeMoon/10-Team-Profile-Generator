const Employee = require("./Employee");

class Manger extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() { return this.officeNumber; }

    getRole() { return "Manger" }
}

module.exports = Manger;