const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


describe('Intern', () => {
  const engineer = new Engineer('4','test-engineer','test-engineer@test.com','NancyMile');
  it('Createa a new engineer and get name', () => {
   expect(engineer.getName()).toBe('test-engineer');
  });
  it('Get engineer Id', () => {
    expect(engineer.getId()).toBe('4');
   });
   it('Get engineer email', () => {
    expect(engineer.getEmail()).toBe('test-engineer@test.com');
   });
   it('Get engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer');
   });
   it('Get engineer Github', () => {
    expect(engineer.getGithub()).toBe('NancyMile');
   });
});