class Employee {
    // Save a reference for `this` in `this` as `this` will change inside of inquirer
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        role = this.getRole;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }   
}
module.exports = Employee;