const Employee = require('../lib/Employee');

describe('Employee', () => {
  const employee = new Employee('1','test','test@test.com');
  it('Createa a new employee and get name', () => {
   expect(employee.getName()).toBe('test');
  });
  it('Get employee Id', () => {
    expect(employee.getId()).toBe('1');
   });
   it('Get employee email', () => {
    expect(employee.getEmail()).toBe('test@test.com');
   });
   it('Get employee role', () => {
    expect(employee.getRole()).toBe('Employee');
   });
});