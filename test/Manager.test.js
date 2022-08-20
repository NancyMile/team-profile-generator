const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


describe('manager', () => {
  const manager = new Manager('3','test-manager','test-manager@test.com','111');
  it('Createa a new manager and get name', () => {
   expect(manager.getName()).toBe('test-manager');
  });
  it('Get manager Id', () => {
    expect(manager.getId()).toBe('3');
   });
   it('Get manager email', () => {
    expect(manager.getEmail()).toBe('test-manager@test.com');
   });
   it('Get manager role', () => {
    expect(manager.getRole()).toBe('Manager');
   });
});