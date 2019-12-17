## Object Prototyping
* Every JS object has a **prototype property**, which makes inheritence possible in JS
* The prototype property of an object is where we put methods and properties that we want **other object to inherit**
* The Constructor's prototype property is **NOT** the prototype of the Constructor itself: it's the prototype of **ALL** instances that are created through it
* **Chain**: When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues untl the methods is found
* An instance of an object will have the same prototype property as the object itself.
    * Both instances and defintions will contain the entirety of their prototype chain (all properties, methods available to object)

## Constructors
* Always name constructors starting with a capital letter
* *new* operator creates an empty object 
    * Then, the function is called which creates a new execution context
    * Points *this* variable to the new empty object
* Params of constructor are then assigned to *this* values specified in constructor

## Object.create
* Can create objects based off prototype object
* Difference from function constructor
    * 
