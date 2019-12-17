// Lesson 22: Arrays
//
// function calculateAge(birthYear) {
//     return 2019 - birthYear
// }

// var ages = []
// for (let x = 1; x <= ; x++) {
//     ages.push(Math.floor(Math.random() * (100)))
// }
// ages.push(calculateAge(4000))
// ages.unshift(calculateAge(300))
// console.log(ages)
// console.log(ages.indexOf(Math.floor(Math.random() * (100))))




// Lesson 25/26: Objects & Properties
//
// var john = { // Object literal
//     name: 'John',
//     last: 'Smith',
//     birthYear: 1990,
//     family: ['Jack', 'Mary', "Timmy"],
//     job: 'Teacher',
//     isMarried: false
// }
//
// console.log(john.birthYear)
// console.log(john['family'])
// var x = john.name
// console.log(x)
//
// var jane = new Object() // New object syntax
// jane.name = 'Jane'
// jane['last'] = 'Smith'
// jane.birthYear = 1992
// console.log(jane)
//
// var john = { // Object literal
//     name: 'John',
//     last: 'Smith',
//     birthYear: 1990,
//     family: ['Jack', 'Mary', "Timmy"],
//     job: 'Teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2019 - this.birthYear;
//     }
// }
//
// john.calcAge()
// console.log(john['age'])



//Lesson 29: Loops
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue']

// for(let i = 0; i < john.length+2; i++) { // Prints undefined twice
//     console.log(john[i])
// }

// john.forEach(element => {
//     if(typeof element === 'string') console.log(element);
// })


var a = {
    s: 'string',
    t: {
        p: 'face',
        a: 'nine'
    }
}

console.log(a['t'])



