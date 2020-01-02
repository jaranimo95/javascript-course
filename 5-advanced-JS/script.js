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

    /*
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
    */



/////////////////////////////////
// Lesson 64: Primitives vs. Objects
/////////////////////////////////

    /*
    // How Objects are Assigned
    var obj1 = {
        name: 'john',
        age: 26
    };
    var obj2 = obj1;
    obj1.age = 30;
    console.log(obj1);  // 30
    console.log(obj2);  // 30

    // Pass by Value / Reference
    var age = 27;
    var obj = {
        name: 'john',
        city: 'Lisbon'
    };

    function change(a,b) {
        a = 30;
        b.city = 'San Francisco' 
    }

    change(age,obj); // Age passed as value, obj passed as reference

    console.log(age);   // 27, primitives are passed as values to a function, meaning the value is passed instead of a reference to the original variable
    console.log(obj.city);  // 'San Francisco'
    */



/////////////////////////////////
// Lesson 65: First Class Functions, Passing Func's as Arguments
/////////////////////////////////

    // function arrayCalc(arr,fn) {
    //     var res = [];
    //     arr.forEach(element => { res.push(fn(element)) });
    //     return res;
    // }

    // function calculateAge(element) {
    //     return 2019 - element;
    // }

    // function isFullAge(element) {
    //     return calculateAge(element) >= 18;
    // }

    // var years = [1900, 1965, 1937, 2005, 1998];
    // console.log(arrayCalc(years,calculateAge));
    // console.log(arrayCalc(years,isFullAge));



/////////////////////////////////
// Lesson 66: First Class Functions, Func's Returning Func's
/////////////////////////////////

    // function interviewQuestion(job) {
    //     if (job === 'designer') {
    //         return function(name) { // Anonymous function: function without a callable name
    //             console.log(name + ', can you please explain what UX design is?');
    //         }
    //     } else if (job === 'teacher') {
    //         return function(name) { // Anonymous function: function without a callable name
    //             console.log(name + ', what subject do you teach?');
    //         }
    //     } else {
    //         return function(name) { // Anonymous function: function without a callable name
    //             console.log(name + ', what do you do?');
    //         }
    //     }
    // }

    // var teacherQuestion = interviewQuestion('teacher');
    // var designerQuestion = interviewQuestion('designer');
    // var generalQuestion = interviewQuestion('');
    // teacherQuestion('John');
    // designerQuestion('Mary');
    // generalQuestion('Tim');

    // interviewQuestion('designer')('Anthony');



/////////////////////////////////
// Lesson 67: Immediately Invoked Function Expressions
/////////////////////////////////

    // // Want to start a game, and hide the score.
    // // Can define score variable inside a function, so we can't access it in an outer score.
    // function game() {
    //     var score = Math.random() * 10;
    //     console.log(score >= 5);
    // }
    // game();

    // // Or, we can define an IIFE. But this isn't the format we want
    // (function() {
    //     var score = Math.random() * 10;
    //     console.log(score >= 5);
    // })();

    // //console.log(score); // can't access

    // // Need to trick parser into thinking this is an expression, even if it isn't assigned to anything
    // (function (goodLuck) {
    //     var score = Math.random() * 10;
    //     console.log(score >= 5 - goodLuck);
    // })(5);

    // // Mainly useful for data privacy



/////////////////////////////////
// Lesson 68: Closures
/////////////////////////////////

    // function retirement(retAge) {
    //     var a = ' years left \'til retirement'
    //     return function(yob) {
    //         var age = 2019 - yob;
    //         console.log((retAge - age) + a);
    //     }
    // }

    // var USA = retirement(66);
    // USA(1995);  // this, or
    // retirement(66)(1995); // this.


    // function interviewQuestion(job) {
    //     return function(name) {    
    //         if (job === 'designer') {
    //                 console.log(name + ', can you please explain what UX design is?');
    //         } else if (job === 'teacher') {
    //                 console.log(name + ', what subject do you teach?');
    //         } else {
    //                 console.log(name + ', what do you do?');
    //         }
    //     }
    // };

    // interviewQuestion('designer')('Tim');
    // interviewQuestion('teacher')('Dang');
    // interviewQuestion('farmer')('Scoob');



/////////////////////////////////
// Lesson 69: Bind, Call, Apply
/////////////////////////////////

    // var john = {
    //     name: 'john',
    //     age: 26,
    //     job: 'teacher',
    //     presentation: function(style, timeOfDay) {
    //         if (style === 'formal') {
    //             console.log('Good ' + timeOfDay + 
    //                         ', ladies and gentlemen! I\'m ' + this.name + 
    //                         ' and I\'m ' + this.age + ' years old.');
    //         }
    //         else if (style === 'friendly') {
    //             console.log('Hey, what\'s up! I\'m ' + this.name + 
    //             ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    //         }
    //     }
    // };

    // john.presentation('formal','morning');

    // var emily = {
    //     name: 'Emily',
    //     age: 35,
    //     job: 'designer'
    // };

    // // Want to use john's presentation function using Emily's parameters.
    // john.presentation.call(emily,'friendly','afternoon');

    // // The apply method insteads takes an array for the method arguments, but won't work for methods which don't accept arrays as arguments
    // // john.presentation.apply(emily,['friendly','afternoon']);

    // var johnFriendly = john.presentation.bind(john,'friendly');
    // johnFriendly('morning');



    // function arrayCalc(arr,fn) {
    //     var res = [];
    //     arr.forEach(element => { res.push(fn(element)) });
    //     return res;
    // }

    // function calculateAge(element) {
    //     return 2019 - element;
    // }

    // function isFullAge(limit, element) {
    //     return calculateAge(element) >= limit;
    // }

    // var years = [1900, 1965, 1937, 2005, 1998];
    // var fullJapan = arrayCalc(years,isFullAge.bind(this,20));
    // console.log(fullJapan);
