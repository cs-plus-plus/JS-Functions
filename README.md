# Unit 8.6

This lesson focuses on **writing functions in JavaScript** and **using parameters**. Students interact with **five buttons**. Each button calls a function and writes results to the page using **`textContent`** (no prompts, no `console.log`).

---

## 🚀 Crash Course: JavaScript Functions

```js
function name(param1, param2) {
  // logic
  return result;
}
```

- Declare with `function`.
- Parameters are inputs.
- `return` sends a value back to the caller.
- Call a function with `name()`.

**Example**
```js
function add(a, b) { return a + b; }
let total = add(3, 5); // 8
```

---

## 🧭 Overview
You will implement five functions and connect them to buttons. All output must be written to the DOM via `textContent`.

- `myFunc()` — increments a persistent counter and displays it.
- `getRandomNum(max)` — returns an integer in **[1..max]**, or `0` if invalid.
- `myAdder(x, y)` — returns the numeric sum.
- `distance(x1, y1, x2, y2)` — Euclidean distance.
- `quadratic(a, b, c)` — returns an array of roots; for negative discriminant, return strings like `"p±qi"`.

---

## 💻 Starter: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
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
  <input id="maxRand" type="number" />
  <button id="btnRandom" onclick="onRandomClick()">Generate Random</button>
  <div id="outRandom"></div>

  <h3>myAdder(x, y)</h3>
  <label>x: <input id="addX" type="number" /></label>
  <label>y: <input id="addY" type="number" /></label>
  <button id="btnAdder" onclick="onAdderClick()">Add</button>
  <div id="outAdder"></div>

  <h3>distance(x1, y1, x2, y2)</h3>
  <label>x1: <input id="x1" type="number" /></label>
  <label>y1: <input id="y1" type="number" /></label>
  <label>x2: <input id="x2" type="number" /></label>
  <label>y2: <input id="y2" type="number" /></label>
  <button id="btnDistance" onclick="onDistanceClick()">Find Distance</button>
  <div id="outDistance"></div>

  <h3>quadratic(a, b, c)</h3>
  <label>a: <input id="qa" type="number" /></label>
  <label>b: <input id="qb" type="number" /></label>
  <label>c: <input id="qc" type="number" /></label>
  <button id="btnQuadratic" onclick="onQuadraticClick()">Solve</button>
  <div id="outQuadratic"></div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 📦 Starter: `script.js` (Helpers + Click Handlers + Function Shells)

> Keep IDs and function names **exactly** as shown for autograding.

```js

// ----- Functions to implement -----

// 1) myFunc(): persistent counter

// 2) getRandomNum(max): 1..max int or 0 if invalid

// 3) myAdder(x, y): numeric sum

// 4) distance(x1, y1, x2, y2): Euclidean distance

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
```

---

## ✅ Required IDs (for Autograding)

**Buttons:** `btnMyFunc`, `btnRandom`, `btnAdder`, `btnDistance`, `btnQuadratic`  
**Inputs:** `maxRand`, `addX`, `addY`, `x1`, `y1`, `x2`, `y2`, `qa`, `qb`, `qc`  
**Outputs:** `outMyFunc`, `outRandom`, `outAdder`, `outDistance`, `outQuadratic`

---

## 🧾 Tips
- Output must use `textContent`.
- Do **not** use `prompt()` or `alert()`.
- Keep names/IDs exact.
- Ensure no syntax errors.

---

## 🧮 Quick Checklist
- [ ] All required IDs exist.
- [ ] Each button calls the correct handler.
- [ ] Output uses `textContent` only.
- [ ] Random returns 0 when invalid.
- [ ] Counter persists between clicks.
- [ ] Distance & quadratic display correctly.
