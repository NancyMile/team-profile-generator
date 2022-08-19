const Employee = require('./Employee');

class Manager extends Employee{
    // Save a reference for `this` in `this` as `this` will change inside of inquirer
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;