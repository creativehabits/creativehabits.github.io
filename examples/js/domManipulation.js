// The DOM (Document Object Model)
// is the representation of your web page
// (including the HTML and CSS) in JavaScript

// This will get us a JS reference to the
// HTML element with the specified ID
// (remember, JS is case-sensitive)
let body = document.getElementById("myBodyElement");

body.style.backgroundColor = "#ff22ff";




body.innerHTML = "<h1>Hello World</h1>";

// we can also append HTML to 'innerHTML'
body.innerHTML = 
    body.innerHTML +
    "<p id='myParagraph'>This was written with dynamic JS!</p>";

body.innerHTML += "<p>Here's another paragraph</p>";

let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "#3333FF";
myParagraph.style.fontWeight = "bold";
myParagraph.style.fontSize = "30px";

let isDarkMode = true;
if (isDarkMode) {
    body.style.backgroundColor = "333333";
    body.style.color = "white";
} else {
    body.style.backgroundColor = "white";
    body.style.color = "333333";
}