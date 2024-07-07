// use new keyword to create an instance of an Object
let person = new Object();
person.Name = 'John Li';
// normal function(), a 'this' varialble is created which references the object that call it.
person.SetName = function(name) { this.Name = name; }
person.GetName = function() { return person.Name; }

// Javascript Object anonymous method does not inherit this, so it's limited with setup methods for a instance person
person.AnonymousSetName = (name) => { person.Name = name; }
person.AnonymousGetName = () => { return person.Name }
person.AnonymousGetNameByParameter = (name) => { return name; };

console.log(person.Name);// Output: John Li
person.SetName('Annie Yu');
console.log(person.GetName());// Output: Annie Yu
console.log(person.AnonymousGetNameByParameter("lan"));// Output: lan
console.log(person.AnonymousGetName());// Output: Annie Yu

// object literal way to create an instance of an Object, this is the preferred method
let student = {
    Name: "Original Name",
    Greet: function(){
        console.log(`Hello ${this.Name}`);
    },
    TheName: function(){
        return this.Name;
    },
    // !!! Arrow function does not create the 'this' binding.
    // As a result, any reference to this would point to what this was before the function was created. 
    // In this case it was this class's prototype, it was undefined
    GetName: () => { return this.Name}
}


student.Greet();
console.log(student.TheName());
console.log(student.GetName());

// remove a property
delete student.Name;
console.log(`property Name has been deleted from object (or class instance) student, now its value is '${student.Name}'`);
