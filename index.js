const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const render = require ('./src/page-template.js');
const teamMembers = [];

//Gather data
function init(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the manager name?',
            validate: (answer) =>{
                if(answer !== ''){
                    return true;
                }
                return 'Please enter manager name';
            },
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manager Id?',
            validate: (answer) =>{
                if(answer.match(/^[1-9]\d*$/)){
                    return true;
                }
                return 'Please enter manager Id';
            },
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the manager email?',
            validate: (answer) =>{
                if(answer.match(/\S+@\S+\.\S+/)){
                    return true;
                }
                return 'Please enter manager email';
            },
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the manager Office Number?',
            validate: (answer) =>{
                if(answer.match(/^[1-9]\d*$/)){
                    return true;
                }
                return 'Please enter manager office number';
            },
        },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerId,
            answers.managerName,
            answers.managerEmail,
            answers.managerOfficeNumber
        );
        manager.role = manager.getRole();
        teamMembers.push(manager);
        team();
    })
   
    //team
    function team(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'What type of employee would you like to add?',
                choices: [
                    'Intern',
                    'Engineer',
                    'None'
                ],
            },
        ])
        .then((choice) =>{
            switch(choice.teamMember){
                case 'Engineer': addEngineer();
                      break;
                case 'Intern': addIntern();
                      break;
                default:
                    createTeam();
                    break;
            }
        })
    }

    //employee enginner
    function addEngineer(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer name?',
                validate: (answer) =>{
                    if(answer !== ''){
                        return true;
                    }
                    return 'Please enter engineer name';
                },
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the engineer Id?',
                validate: (answer) =>{
                    if(answer.match(/^[1-9]\d*$/)){
                        return true;
                    }
                    return 'Please enter engineer Id';
                },
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineer email?',
                validate: (answer) =>{
                    if(answer.match(/\S+@\S+\.\S+/)){
                        return true;
                    }
                    return 'Please enter a valid email email';
                },
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerId,
                answers.engineerName,
                answers.engineerEmail
            );
            engineer.role = engineer.getRole();
            teamMembers.push(engineer);
            team();
        })
    }

    //employee intern
    function addIntern(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the intern name?',
                validate: (answer) =>{
                    if(answer !== ''){
                        return true;
                    }
                    return 'Please enter intern name';
                },
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the intern Id?',
                validate: (answer) =>{
                    if(answer.match(/^[1-9]\d*$/)){
                        return true;
                    }
                    return 'Please enter intern Id';
                },
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the intern email?',
                validate: (answer) =>{
                    if(answer.match(/\S+@\S+\.\S+/)){
                        return true;
                    }
                    return 'Please enter a valid email email';
                },
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internId,
                answers.internName,
                answers.internEmail
            );
            intern.role = intern.getRole();
            teamMembers.push(intern);
            team();
        })
    }
}

//create team
function createTeam (){
    // for each member create a card
    let html = "";
    let giphy = "";
    teamMembers.forEach((object, index) => {
 
        // object is giving the one by one object
         console.log(index, object.role, object.name, object.id, object.email);
        if(object.role == 'Manager'){
            giphy = `<iframe src = "https://giphy.com/embed/gbJhETc9WknE0w5o4k" width="60" height="60" frameBorder="0" class="giphy-embed"></iframe>`;
        }
        else if(object.role == 'Engineer'){
            giphy = `<iframe src = "https://giphy.com/embed/LqW9dLVjQm3cs" width="60" height="60" frameBorder="0" class="giphy-embed"></iframe>`;
        }
        else{
            giphy = `<iframe src="https://giphy.com/embed/ZZYvpiBAS7kSUE4ACs" width="60" height="60" frameBorder="0" class="giphy-embed"></iframe>`;
        }
         html = html+ `
        <div class="weatherparams-container" id="weatherparams-container">
            <section class="flex-row weather-card">
                <header>${object.role}</header>
                `+ giphy + `
                <p><strong>Name:</strong> ${object.name}</p>
                <p><strong>ID:</strong> ${object.id}</p>
                <p><strong>GitHub:</strong> ${object.managerOfficeNumber}</p>
               </section>
        </div>`
       })
        //console.log("HTML: "+html);       
       //once finished the foreach generate the file
       fs.writeFileSync('./dist/team.html', `<!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./style.css" />
        <title>Employees</title>
       </head>
       <body>
         <div>`
               +html+
         `</div>
       </body>
       </html>` 
       );
}

init();