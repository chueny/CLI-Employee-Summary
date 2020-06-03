// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Manager(name, id, email, officeNumber){

    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";

    
    Manager.prototype.getRole = function (text){
        return this.role;
    }

    Manager.prototype.getOfficeNumber = function (text){
        return this.officeNumber; 
    }

}

module.exports = Manager; 