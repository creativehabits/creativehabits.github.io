// variable review
let greeting = "Good Evening";
console.log(greeting);

// Simple Function
function greet () {
    console.log(greeting);
}

greet();

// Function with an input parameter
function greetUser(username) {
    let userGreeting = greeting + ", " + username;
    console.log(userGreeting);
}

greetUser("Jamir");

// Function with input parameter
// that modifies the page
function greetUserOnPage(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + ", " + username;
}

greetUserOnPage("Jamir");

// Function that returns a value
function getUserGreeting(username) {
    return greeting + ", " + username + "!";
}

getUserGreeting("Jamir");
console.log(getUserGreeting("Jamir"));

// Function using another function
// that modifies the page
function greetUserOnPageV2(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("Jamir");