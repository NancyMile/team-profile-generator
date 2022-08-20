const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


describe('Intern', () => {
  const intern = new Intern('2','test-intern','test-intern@test.com','Melbourne School');
  it('Createa a new intern and get name', () => {
   expect(intern.getName()).toBe('test-intern');
  });
  it('Get intern Id', () => {
    expect(intern.getId()).toBe('2');
   });
   it('Get intern email', () => {
    expect(intern.getEmail()).toBe('test-intern@test.com');
   });
   it('Get intern role', () => {
    expect(intern.getRole()).toBe('Intern');
   });
   it('Get intern school', () => {
    expect(intern.getRole()).toBe('Intern');
   });

});