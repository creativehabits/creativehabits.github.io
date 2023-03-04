// An Array is basically a list of objects.
// Arrays are a type of "data structure",
// which are constructs that hold data.

// Arrays can be created with square brackets
let emptyArray = []; // more can be added later

let numberArray = [27, 7, 2, 2929, 45]; // length of 5

let stringArray = ["apple", "orange", "grapes", "pear"]; // length of 4

let mixedArray = ["cat", 2, 5, "dog", "platypus", 12, [2, 3]];

let groceryList = [
    "bacon",
    "eggs",
    "coffee",
    "cheese",
    "fruits and veggies",
    "pastrami"
];

console.log(groceryList);

// Accessing data from an Array also uses square brackets
// And, we use a number called an "index" to specify
// which element in an Array we want to get.
// HOWEVER, indicates start counting at 0!

let firstGroceryItem = groceryList[0]; // bacon
console.log(firstGroceryItem);

let thirdGroceryitem = groceryList[2]; // coffee
console.log(thirdGroceryitem);

let lastGroceryItem = groceryList[5];
console.log(lastGroceryItem); // pastrami

// We can add items to an existing array.
// One way of doing that is using the push method.

console.log(groceryList);
groceryList.push("ice cream");

console.log(groceryList);

// START DYNAMIC GROCERY LIST DEMO

const pageList = document.getElementById("pageList");
const itemInput = document.getElementById("itemInput");
const itemSubmit = document.getElementById("itemSubmit");

function displayList() {
    pageList.innerHTML = groceryList
        .toString()
        .replaceAll(",", "<br>");
}
displayList();

itemSubmit.addEventListener("click", function(e) {
    let newItem = itemInput.value;
    itemInput.value = "";
    groceryList.push(newItem);
    displayList();
});