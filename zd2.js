//ZD 2
//Task 2: Calculator Functions
// Create four basic calculator functions:
// add(a, b) → returns a + b
// subtract(a, b) → returns a - b
// multiply(a, b) → returns a b
// divide(a, b) → returns a / b

function add() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let number1 = parseInt(num1);
  let number2 = parseInt(num2);

  let result = number1 + number2;

  document.getElementById("result").textContent = `Result: ${result}`;

  console.log("Result: ", result);

  //const c = a + b;

  //console.log("Result of", a, "+", b, "=", c);
}

// add(9, 15);
// add(7, 3);

////////////////

function subtract() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let number1 = parseInt(num1);
  let number2 = parseInt(num2);

  let result = number1 - number2;

  document.getElementById("result").textContent = `Result: ${result}`;

  // const c = a - b;
  // console.log("Result of", a, "-", b, "=", c);
}

// subtract(17, 9);
// subtract(3, 7);

/////////////////

function multiply() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let number1 = parseInt(num1);
  let number2 = parseInt(num2);

  result = number1 * number2;

  document.getElementById("result").textContent = `Result: ${result}`;

  // const c = a * b;

  // console.log("Result of", a, "*", b, "=", c);
}

// multiply(7, 8);
// multiply(42, 2);

/////////////////

function divide() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let number1 = parseInt(num1);
  let number2 = parseInt(num2);

  let result = number1 / number2;

  document.getElementById("result").textContent = `Result: ${result}`;

  // const c = a / b;

  // console.log("Result of", a, "/", b, "=", c);
}

// divide(24, 2);
// divide(44, 4);
