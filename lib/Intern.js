const Employee = require('./Employee');

class Intern extends Employee {
    // Save a reference for `this` in `this` as `this` will change inside of inquirer
    constructor(id, name, email, gitHubAccount) {
        super(id, name, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHubAccount = gitHubAccount;
    }
    getRole(){
        return 'Intern';
    }
}
module.exports = Intern;