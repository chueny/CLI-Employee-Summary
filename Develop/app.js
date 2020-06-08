const Employee = require ("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./output/htmlRenderer");

employees = [];

 function addMoreEmployee(response){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add more team members?",
            name: "addMore"
        }
    ]).then(function(response){
        if (response.addMore === true){
         employeeQuestions();
        };
    })
 };

employeeQuestions();
function employeeQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id"
        },
        {
            type: "input",
            message:"What is the employee's email?",
            name: "email"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices:[
                "Manager",
                "Engineer",
                "Intern"
            ],
        }
    ]).then(function(response){
        if (response.role == "Manager"){
        manager (response);
        } else if(response.role == "Engineer"){
        engineer(response);
        } else if (response.role == "Intern"){
        intern(response);
        };
    }).catch(function(error){
        console.log("An error occured:", error);
    });
};

function manager (generalInfo){
     inquirer.prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber"
            }
        ]).then(function(managerRes){
                employees.push(new Manager(generalInfo.name, generalInfo.id, generalInfo.email, managerRes.officeNumber));
                
                console.log("Employee list is: "+ employees);
                const htmlString = render(employees);

                fs.writeFile(outputPath, htmlString, function(err){
                    if (err) throw err;
                    console.log('saved');

                });

                addMoreEmployee();

        })
};

function engineer(generalInfo){
        inquirer.prompt([
                {
                type: "input",
                message: "What is your GitHub account?",
                name: "github"
                }
            ]).then(function(engRes){
                employees.push(new Engineer(generalInfo.name, generalInfo.id, generalInfo.email, engRes.github));
                console.log("Employee lis is: "+ employees[0]);
                const htmlString = render(employees);

                fs.writeFile(outputPath, htmlString, function(err){
                    if (err) throw err;
                    console.log('saved');

                });
                addMoreEmployee();
            })
};

function intern(generalInfo){
    inquirer.prompt([
                {
                    type: "input",
                    message: "What is your school?",
                    name: "school"
                }
            ]).then(function(internRes){
                employees.push(new Intern (generalInfo.name, generalInfo.id, generalInfo.email, internRes.school));
                    console.log("Employee list is: "+ employees[0]);
                    const htmlString = render(employees);
    
                    fs.writeFile(outputPath, htmlString, function(err){
                        if (err) throw err;
                        console.log('saved');
    
                    });
                addMoreEmployee();
            });
};