// variables need to be declared 
// before they can be used.
// varaible declaration is one
// by using the 'let' keyword.

// a variable assigned a String data type
let greeting = "Good evening";
console.log(greeting);

// a String assigend a Number data type
let myNumber = 5;
console.log(myNumber);

// we can change the value assigned to a variable
myNumber = 10;
console.log(myNumber);

// we can also change the data type of a variable
// myNumber = "one thousand"
// console.log(myNumber);

// we can also use operator for variable assignment
let myNewNumber = 5 + 4
console.log(myNewNumber);

// we can also use variables in variable assignment
let anotherNumber = myNumber + myNewNumber;
console.log(anotherNumber);

// we can even use the same variable
// in its own assignments
anotherNumber = anotherNumber + 5;
console.log(anotherNumber);

// a more practical example of how
// variables can be used on a site
let username = "Jamo";
let personalizedGreeting = greeting + " " + username;
console.log(personalizedGreeting);
