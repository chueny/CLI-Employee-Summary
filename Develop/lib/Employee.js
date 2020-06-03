// TODO: Write code to define and export the Employee class
function Employee(name, id, email){

    this.name = name;
    this.id = id; //parseInt(id) maybe for later?
    this.email = email;
    this.role = "Employee";

   Employee.prototype.getName = function(text){
       return this.name;
   }

   Employee.prototype.getId = function (text){
       return this.id;
   }
    
   Employee.prototype.getEmail = function (text){
    return this.email; 
   }

   Employee.prototype.getRole = function (text){
        return this.role;
    }
}

module.exports = Employee;