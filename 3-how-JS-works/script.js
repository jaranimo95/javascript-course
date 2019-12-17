///////////////////////////////////////
// Lecture: Hoisting

/*

// functions 
    function calculateAge(year) {
        console.log(2016 - year);
    } // Function declarations stored in variable object before execution, so we can define functions after their use

    //retirement(1990)
    var retirement = function(year) {
        console.log(65 - (2016 - year));
    } // Function expressions cannot be called before declaration, since variables are assigned undefined until execution



// variables
    console.log(age); // undefined
    var age = 23;

    function foo() {
        console.log(this.age); // 23
        console.log(age); // undefined
        var age = 65;
        console.log(age); // 65
    }

    foo();
    console.log(age); // age = 23

*/



///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third();
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword

//console.log(this)

// calculateAge(1985)

// function calculateAge(year) {
//     console.log(2016-year);
//     console.log(this);
// }

var john = {
    name: 'John',
    year: 1990,
    calculateAge: function() {
        console.log(this); // refers to john object
        console.log(2016 - this.year)

        function innerFunc() {
            console.log(this); // refers to default object (window)
            // since innerFunc is a normal func and not an object func, it refers to window
            // when a regular function is called, this always refers to the default object
        }

        innerFunc();
    }
}
 john.calculateAge();

var mike = {
    name: 'Mike',
    year: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge(); // this value only assigned when a variable access a method, so this now refers to the mike object