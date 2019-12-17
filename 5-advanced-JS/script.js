/////////////////////////////////
// Lesson 61: Creating Objects: Function Constructor
/////////////////////////////////

/*
var Person  = function(name, year, job) {
    this.first = name;
    this.year = year;
    this.job = job;
}

// Have Person inherit calculateAge function
Person.prototype.calculateAge = function() {
    this.age = 2019 - this.year;
    console.log(this.age);
}

Person.prototype.printFullName = function() {
    console.log(this.first + " " + this.last);
}

// Have Person inherit property 'last' with value 'Smith'
Person.prototype.last = 'Smith'

var john = new Person('John',1990,'Teacher')
var mark = new Person('Mark',1958,'Designer')
var tifa = new Person('Tifa',1938,'Retired')

// All Person object can now call calculateAge
// john.calculateAge();
// mark.calculateAge();
// tifa.calculateAge();

// Will all print 'Smith'
// console.log(john.last)
// console.log(mark.last)
// console.log(tifa.last)

// Will print first and last name
// john.printFullName()
// mark.printFullName()

*/



/////////////////////////////////
// Lesson 62: Prototype Chain in the Console
/////////////////////////////////

/*
console.log(john)
console.log(Person) 
console.log(Person.prototype)
console.log(john.__proto__ === Person.prototype)
console.log(john instanceof Person)
console.log([2,4,6])
console.log([2,4,6].length)
*/



/////////////////////////////////
// Lesson 63: Object.create
/////////////////////////////////

var personProto = { // Create object prototype
    calculateAge: function () {
        console.log(2019 - this.year)
    }
};

// Create john based off Person prototype object
var john = Object.create(personProto)
john.name = "john"
john.year = 1990
john.job = "teacher"

var jane = Object.create(personProto,
{
    name: { value: 'Jane' },
    year: { value: 1969 },
    job: { value: 'designer' }
})