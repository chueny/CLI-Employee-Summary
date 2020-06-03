// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Engineer(name, id, email, GitHubUser){

    Employee.call(this, name, id, email);
    this.GitHubUser = GitHubUser;
    this.github = GitHubUser;
    this.role = "Engineer";
    

    Engineer.prototype.getRole = function (text){
        return this.role;
    }

    Engineer.prototype.getGithub = function (text){
        return this.GitHubUser; 
    }

}

module.exports = Engineer;