# Unit 8.6 – Functions (with Parameters)

This lesson focuses on **writing functions in JavaScript** and **using parameters**.  
During the activity, students will interact with **five buttons**; each button calls a function and displays results on the page using **`textContent`** (no prompts, no `console.log`).

---

## 🚀 Crash Course: JavaScript Functions

Functions are reusable blocks of code designed to perform specific tasks.  
They help organize programs and make code easier to test and maintain.

### Function Syntax
```js
function name(parameter1, parameter2) {
  // Code to execute
  return result;
}
```
- **`function`** declares a function.
- **Parameters** are placeholders for input values.
- **`return`** sends a value back to where the function was called.
- A function must be **called** (e.g., `myFunc()`) to run.

Example:
```js
function add(a, b) {
  return a + b;
}
let total = add(3, 5); // total = 8
```

---

## 🧭 Overview
This project helps students understand **JavaScript functions**, **parameters**, and **return values** using interactive buttons and text displayed on the web page.

Students will build five small functions and connect each to a button that runs the function and displays results using `textContent`.

---

## 💻 Starter Code – `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unit 8.6 – Functions</title>
</head>
<body>
  <h1>Unit 8.6 – Functions</h1>
  <p>Each button calls a function and shows the result below using <code>textContent</code>.</p>

  <h3>myFunc()</h3>
  <button id="btnMyFunc" onclick="onMyFuncClick()">Click Me</button>
  <div id="outMyFunc"></div>

  <h3>getRandomNum(max)</h3>
  <label for="maxRand">Enter a max value:</label>
  <input id="maxRand" type="number">
  <button id="btnRandom" onclick="onRandomClick()">Generate Random</button>
  <div id="outRandom"></div>

  <h3>myAdder(x, y)</h3>
  <label>x: <input id="addX" type="number"></label>
  <label>y: <input id="addY" type="number"></label>
  <button id="btnAdder" onclick="onAdderClick()">Add</button>
  <div id="outAdder"></div>

  <h3>distance(x1, y1, x2, y2)</h3>
  <label>x1: <input id="x1" type="number"></label>
  <label>y1: <input id="y1" type="number"></label>
  <label>x2: <input id="x2" type="number"></label>
  <label>y2: <input id="y2" type="number"></label>
  <button id="btnDistance" onclick="onDistanceClick()">Find Distance</button>
  <div id="outDistance"></div>

  <h3>quadratic(a, b, c)</h3>
  <label>a: <input id="qa" type="number"></label>
  <label>b: <input id="qb" type="number"></label>
  <label>c: <input id="qc" type="number"></label>
  <button id="btnQuadratic" onclick="onQuadraticClick()">Solve</button>
  <div id="outQuadratic"></div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🧠 Function Behavior (Requirements)
- **`myFunc()`** — Increments a persistent counter and updates `#outMyFunc`.
- **`getRandomNum(max)`** — Returns a random integer in **1..max**, or 0 if invalid.
- **`myAdder(x, y)`** — Returns `x + y` (numbers) and displays in `#outAdder`.
- **`distance(x1, y1, x2, y2)`** — Returns Euclidean distance and displays in `#outDistance`.
- **`quadratic(a, b, c)`** — Returns an array of root(s). For negative discriminant, show `"p±qi"` strings in `#outQuadratic`.

---

## 📱 Page Interaction
- Each button uses `onclick` to call a function.
- Functions read inputs, call the function, and update output using `textContent`.
- **No** `prompt()` or `alert()` allowed.
- **No** `console.log` for output.

---

## ✅ Required IDs (for Autograding)
| Type | IDs |
|------|-----|
| **Buttons** | btnMyFunc, btnRandom, btnAdder, btnDistance, btnQuadratic |
| **Inputs** | maxRand, addX, addY, x1, y1, x2, y2, qa, qb, qc |
| **Outputs** | outMyFunc, outRandom, outAdder, outDistance, outQuadratic |

---

## 🧾 Tips for Success
- Match **all IDs** exactly for autograding.
- Use `textContent` for all output.
- Keep function names the same as listed.
- Avoid console output or prompt boxes.
- Ensure your code runs without syntax errors.

---

## 🧮 Quick Checklist
- [ ] All required IDs exist.
- [ ] Each button calls the correct function.
- [ ] Output uses `textContent`.
- [ ] Random numbers return 0 when invalid.
- [ ] Counter persists between clicks.
- [ ] Distance and quadratic display correctly.
