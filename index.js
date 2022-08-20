const inquirer = require('inquirer'); //pakage for console input
const fs = require('fs'); //package for generate files
//calling the classes
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const render = require ('./src/page-template.js');
//array will contain the members of the team
const teamMembers = [];

//Gather data
function init(){
    //manager info
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the manager name?',
            //check that is not empty
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
            //check that contains numbers
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
            //checks the email
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
        //cretaes the object manager
        const manager = new Manager(
            answers.managerId,
            answers.managerName,
            answers.managerEmail,
            answers.managerOfficeNumber
        );
        manager.role = manager.getRole();
        teamMembers.push(manager);
        team(); //calls the options of type employees to enter
    })
   
    //team
    function team(){
        //list employees types nad calls their functions
        //otherise generates  end generating the team
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
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineer GitHub?',
                validate: (answer) =>{
                    if(answer !== ''){
                        return true;
                    }
                    return 'Please enter engineer GitHub';
                },
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerId,
                answers.engineerName,
                answers.engineerEmail,
                answers.engineerGithub
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
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the intern school name?',
                validate: (answer) =>{
                    if(answer !== ''){
                        return true;
                    }
                    return 'Please enter intern school name';
                },
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internId,
                answers.internName,
                answers.internEmail,
                answers.internSchool
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
    teamMembers.forEach((object, index) => {
 
        // object is giving the one by one object
         console.log(index, object.role, object.name, object.id, object.email);
        if(object.role == 'Manager'){
            html = html+ `
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary">
                    <iframe src = "https://giphy.com/embed/p2Ow6zI8NbaCeBnpHV" width="80" height="60" frameBorder="0" ali></iframe>
                    </div>
                <div class="card-body">
                    <h5 class="card-title">${object.role}</h5>
                    <p class="card-text">Name: ${object.name}</p>
                    <ul class="list-group list-group-flush">
                        <li class="card-text">ID: ${object.id}</li>
                        <li class="card-text">Email: ${object.email} </li>
                        <li class="card-text">Office Number: ${object.officeNumber}</li>
                    </ul>
                </div>
            </div>`;
            }
        else if(object.role == 'Engineer'){
            html = html+ `
            <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header bg-success">
                <iframe src = "https://giphy.com/embed/LqW9dLVjQm3cs" width="60" height="60" frameBorder="0"></iframe>
            </div>
            <div class="card-body">
                <h5 class="card-title">${object.role}</h5>
                <p class="card-text">Name: ${object.name}</p>
                <ul class="list-group list-group-flush">
                    <li class="card-text">ID: ${object.id}</li>
                    <li class="card-text">Email: ${object.email} </li>
                    <li class="card-text">GitHub: <a href="https://github.com/${object.gitHubAccount}" target="blank">profile</a></li>
                </ul>
            </div>
        </div>`;
        }
        else{
            html = html+ `
            <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                <div class="card-header bg-warning">
                    <iframe src = "https://giphy.com/embed/iDZ8vrWkg9BKg" width="60" height="60" frameBorder="0"></iframe>        </div>
                    <div class="card-body">
                    <h5 class="card-title">${object.role}</h5>
                    <p class="card-text">Name: ${object.name}</p>
                    <ul class="list-group list-group-flush">
                        <li class="card-text">ID: ${object.id}</li>
                        <li class="card-text">Email: ${object.email} </li>
                        <li class="card-text">School: ${object.school}</li>
                    </ul>
                </div>
            </div>`;
        }
    })
       //once finished the foreach generate the file
       fs.writeFileSync('./dist/team.html', `<!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <!-- Bootstrap CSS -->
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"/>
         <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
       </head>
       <body>
         <div class="card-columns">`
               +html+
         `</div>
       </body>
       </html>` 
       );
}

init();