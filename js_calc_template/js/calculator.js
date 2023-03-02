let result = document.getElementById("result");

function displayTwoPlusTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

function displayThreeTimesFour() {
    result.innerHTML = 3 * 4;
}

function displayFiveMinusTen() {
    result.innerHTML = 5 - 10;
}

function displayMultiply() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) * parseInt(input2.value);
}

displayMultiply();

function displayDivision() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) / parseInt(input2.value);
}

displayDivision();

function displaySubstraction() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) - parseInt(input2.value);
}

displaySubstraction();

function displayAddition() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

displayAddition();