// ============================================
//  Unit 8.6 – Functions
// ============================================
//  Complete each function below by following
//  the STEP comments. Do NOT rename the functions.
//
//  Each function is called by a pre-written click
//  handler at the bottom of this file. You only need
//  to write the functions themselves.
// ============================================


// --- WARM-UP: greet(name) ---
// This function takes a name and returns a greeting string.
//
// STEP 1: The function receives one parameter called "name".
// STEP 2: Return the string "Hello, " + name + "!"
//         Example: greet("Alice") should return "Hello, Alice!"

function greet(name) {
  // Write your code here

}


// --- myFunc() — Persistent Counter ---
// This function counts how many times it has been called.
// It uses a global variable to remember the count between calls.
//
// STEP 1: ABOVE this function, declare a global variable:
//         let count = 0;
//
// STEP 2: Inside the function, add 1 to count.
//
// STEP 3: Return the new count value.
//         First click → returns 1, second → returns 2, etc.



function myFunc() {
  // Write your code here

}


// --- getRandomNum(max) ---
// This function returns a random integer between 1 and max.
// If max is not valid (not a number, zero, or negative), return 0.
//
// STEP 1: Check if max is not a number, or if max is less than 1.
//         If so, return 0.
//
// STEP 2: Generate a random integer from 1 to max using:
//         Math.floor(Math.random() * max) + 1
//
// STEP 3: Return the random number.

function getRandomNum(max) {
  // Write your code here

}


// --- myAdder(x, y) ---
// This function adds two numbers and returns the result.
//
// STEP 1: Return x + y.
//         Make sure both x and y are numbers, not strings!
//         The click handler already converts them for you.

function myAdder(x, y) {
  // Write your code here

}


// --- distance(x1, y1, x2, y2) ---
// This function calculates the Euclidean distance between
// two points (x1, y1) and (x2, y2).
//
// Formula: sqrt((x2 - x1)² + (y2 - y1)²)
//
// STEP 1: Calculate (x2 - x1) and square it.
// STEP 2: Calculate (y2 - y1) and square it.
// STEP 3: Add them together.
// STEP 4: Return Math.sqrt() of the sum, rounded to 2 decimal
//         places using .toFixed(2).

function distance(x1, y1, x2, y2) {
  // Write your code here

}


// --- tipCalc(bill, tipPercent) ---
// This function calculates a tip and returns the total.
//
// STEP 1: Calculate the tip amount: bill * (tipPercent / 100)
// STEP 2: Calculate the total: bill + tip
// STEP 3: Return the total rounded to 2 decimal places
//         using .toFixed(2).
//         Example: tipCalc(50, 20) → tip is 10, total is "60.00"

function tipCalc(bill, tipPercent) {
  // Write your code here

}


// ============================================
//  CLICK HANDLERS (pre-written — do not modify)
// ============================================
// These functions read input values, call your functions,
// and display the result. You do NOT need to change these.

function onGreetClick() {
  let name = document.getElementById("greetInput").value;
  let result = greet(name);
  document.getElementById("outGreet").textContent = result;
}

function onMyFuncClick() {
  let result = myFunc();
  document.getElementById("outMyFunc").textContent = result;
}

function onRandomClick() {
  let max = parseInt(document.getElementById("maxRand").value);
  let result = getRandomNum(max);
  document.getElementById("outRandom").textContent = result;
}

function onAdderClick() {
  let x = parseFloat(document.getElementById("addX").value);
  let y = parseFloat(document.getElementById("addY").value);
  let result = myAdder(x, y);
  document.getElementById("outAdder").textContent = result;
}

function onDistanceClick() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let result = distance(x1, y1, x2, y2);
  document.getElementById("outDistance").textContent = result;
}

function onTipClick() {
  let bill = parseFloat(document.getElementById("tipBill").value);
  let pct = parseFloat(document.getElementById("tipPercent").value);
  let result = tipCalc(bill, pct);
  document.getElementById("outTip").textContent = result;
}
