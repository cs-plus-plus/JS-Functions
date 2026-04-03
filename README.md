# CS++ JavaScript — Functions

> **Unit 8.6** | 100 Points | 8 Automated Tests

In this assignment you will learn how to write **functions** — reusable blocks of code that take inputs (parameters) and produce outputs (return values). Your functions will display results on the page using `textContent`.

---

## Table of Contents

1. [What Is a Function?](#what-is-a-function)
2. [Parameters](#parameters)
3. [Return Values](#return-values)
4. [Global Variables](#global-variables)
5. [Functions vs Methods](#functions-vs-methods)
6. [Assignment](#assignment)
7. [Scoring Rubric](#scoring-rubric)
8. [Tips for Success](#tips-for-success)
9. [FAQ](#faq)

---

## What Is a Function?

A **function** is a reusable block of code with a name. You **define** it once and **call** it whenever you need it:

```javascript
function sayHello() {
  alert("Hello!");
}

sayHello();  // calls the function
sayHello();  // calls it again
```

---

## Parameters

**Parameters** are inputs that you pass into a function:

```javascript
function greet(name) {
  alert("Hello, " + name + "!");
}

greet("Alice");  // "Hello, Alice!"
greet("Bob");    // "Hello, Bob!"
```

You can have multiple parameters:

```javascript
function add(x, y) {
  alert(x + y);
}

add(3, 5);  // 8
```

---

## Return Values

A function can **return** a value back to the code that called it:

```javascript
function double(n) {
  return n * 2;
}

let result = double(5);  // result is 10
```

The `return` statement:
1. Sends a value back to the caller
2. Immediately exits the function (code after `return` does not run)

Without `return`, a function gives back `undefined`:

```javascript
function noReturn() {
  let x = 5;
  // no return statement
}

let val = noReturn();  // val is undefined
```

---

## Global Variables

A **global variable** is declared outside any function. All functions can see and modify it:

```javascript
let count = 0;

function increment() {
  count = count + 1;
  return count;
}

increment();  // count is now 1
increment();  // count is now 2
```

This is how you make a function "remember" something between calls.

---

## Functions vs Methods

A **function** stands on its own:

```javascript
function greet(name) { return "Hello, " + name; }
```

A **method** belongs to a value:

```javascript
"hello".toUpperCase()   // toUpperCase is a method of the string
Math.sqrt(25)           // sqrt is a method of the Math object
```

In this assignment, you write **functions** that the pre-written click handlers call.

---

## Assignment

Complete the six functions in `script.js`. The click handlers are already written for you — they read input values, call your functions, and display the results on the page. **You only need to write the functions themselves.**

### Warm-Up: greet(name) — 15 points

Write a function that takes a name and returns a greeting:
- `greet("Alice")` → returns `"Hello, Alice!"`

### myFunc() — Persistent Counter — 15 points

Write a function that counts how many times it has been called:
- First call → returns `1`
- Second call → returns `2`

Use a global variable declared **above** the function.

### getRandomNum(max) — 10 points

Write a function that returns a random integer from 1 to max:
- If max is invalid (NaN, zero, or negative), return `0`
- Otherwise return `Math.floor(Math.random() * max) + 1`

### myAdder(x, y) — 10 points

Write a function that adds two numbers and returns the result:
- `myAdder(3, 5)` → returns `8`

### distance(x1, y1, x2, y2) — 20 points

Write a function that calculates the Euclidean distance between two points:
- Formula: `Math.sqrt((x2-x1)² + (y2-y1)²)`
- Return the result rounded to 2 decimal places using `.toFixed(2)`
- `distance(0, 0, 3, 4)` → returns `"5.00"`

### tipCalc(bill, tipPercent) — 15 points

Write a function that calculates a restaurant tip:
- Tip = bill * (tipPercent / 100)
- Total = bill + tip
- Return the total rounded to 2 decimal places using `.toFixed(2)`
- `tipCalc(50, 20)` → returns `"60.00"`

### Code Quality — 15 points

- **Required elements exist** in HTML (5 points)
- **Uses `return` keyword** in at least one function (10 points)

---

## Scoring Rubric

| # | Test | Points | What the autograder checks |
|---|------|--------|---------------------------|
| 1 | Required elements exist | 5 | All buttons, inputs, output divs present |
| 2 | Uses return keyword | 10 | Source code contains `return` |
| 3 | greet("Alice") → "Hello, Alice!" | 15 | Correct greeting in output div |
| 4 | myFunc() counter increments | 15 | Counts 1, 2, 3 on successive clicks |
| 5 | getRandomNum(10) returns 1–10 | 10 | Value in valid range, 0 for invalid |
| 6 | myAdder(3, 5) → 8 | 10 | Numeric addition, not string concat |
| 7 | distance(0,0,3,4) → "5.00" | 20 | Euclidean distance formula |
| 8 | tipCalc(50, 20) → "60.00" | 15 | Correct tip calculation |
| | **Total** | **100** | |

---

## Tips for Success

1. **Start with greet()** — it's the simplest function and teaches the return pattern
2. **Use `return`, not `alert()`** — your functions return values, the click handlers display them
3. **Don't modify the click handlers** — they are pre-written at the bottom of script.js
4. **Declare `count` globally** — `let count = 0;` goes ABOVE the `myFunc()` function
5. **Use `.toFixed(2)`** — distance and tipCalc both need 2 decimal places

---

## FAQ

**Q: Why do my functions need `return` instead of `alert()`?**
The click handlers call your function and use the return value to update the page. If you use `alert()` instead of `return`, the result won't appear on the page.

**Q: What is a click handler?**
A click handler is a function that runs when a button is clicked. The click handlers in this assignment are pre-written — they read inputs, call your function, and display the result.

**Q: Why does the counter reset when I refresh the page?**
Global variables only last as long as the page is open. Refreshing resets everything. This is normal.

**Q: What does `.toFixed(2)` return?**
A string. `(5).toFixed(2)` returns `"5.00"` — a string, not a number. This is fine for display.

---

View all assignments at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
