# Section 5 Notes

## Object Prototyping
* Every JS object has a **prototype property**, which makes inheritence possible in JS
* The prototype property of an object is where we put methods and properties that we want **other object to inherit**
* The Constructor's prototype property is **NOT** the prototype of the Constructor itself: it's the prototype of **ALL** instances that are created through it
* **Prototype Chain**: When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues upwards through inherited prototypes until the desired methods is found
* An instance of an object will have the same prototype property as the object itself.
    * Both instances and defintions will contain the entirety of their prototype chain (all properties, methods available to object)

## Constructors
* Always name constructors starting with a capital letter
* *new* operator creates an empty object 
    * Then, the function is called which creates a new execution context
    * Points *this* variable to the new empty object
* Params of constructor are then assigned to *this* values specified in constructor

## Object.create
* Can create new objects based off prototype object
* Difference from function constructor
    * Can define additional fields within Object.create method block instead of additional assignments

## Primitives vs. Objects
* Primitives are passed as values to functions instead of as a reference to the original variable
    * Editing an objects' fields within a method will change its properties even upon return, where a primitive will remain unchanged.
    * change(a,b) where a is a primitive and b is an object: assigning a new value to 'a' will not change the value of the variable passed in as 'a'

## Passing Functions as Arguments
* **First Class Functions**:
    1. A functions is an instance of the Object type, and
    2. A function behaves like any other object, meaning:
    3. We can store functions in a variable,
    4. We can pass functions as an argument to another function, and
    5. We can return a function from a function.

## Returning Functions From Functions
* True to first class function definition, functions returned from functions can be assigned the same as any return value or object
* Can immediately call a returned function either by calling it from the assigned variable or adding another parenthesis onto the end of the original function call like function('a')('b');

## IIFE: Immediately Invoked Function Expressions
* Function expression that is only run once, aka not assigned to any variable or defined as a function
* Format: (function () {} )();
    * Useful for maintaining data privacy, as our function isn't accessible from within the an object or prototype

## Closures
* **Closure**: An inner function always has access to the variables/parameters of its outer function, even after the outer function has returned.
    * Even after the execution context of a function is removed from the execution stack, it's variable object remains in the *scope chain*. This allows inner functions to access the returning function's properties even after returning.
    * Built into Javascript: no need to define manually

## Bind, Call, and Apply
* **Bind**, **call**, and **apply** methods allow us to manually define the **this** variable within a function's execution context
    * *call* accepts an object to define as *this*, and each value to be passed into the called function
    * *apply* accepts an object to define as *this*, and an array of values
        * will not work unless function accepts an array as an argument
    * *bind* doesn't immediately call a function, instead generating a copy of a function so we can store it somewhere.
        * Useful for a function with predefined arguments