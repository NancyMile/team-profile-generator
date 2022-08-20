const Employee = require('./Employee');

class Intern extends Employee {
    // Save a reference for `this` in `this` as `this` will change inside of inquirer
    constructor(id, name, email, school) {
        super(id, name, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;