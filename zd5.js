//ZD 5
// Task 5: Number Check
// Create a function that takes a number and returns:
// Whether it's positive, negative, or zero
// Whether it's even or odd
// Return these two pieces of information in an object

function numberCheck() {
  let num = document.getElementById("numToCheck").value;

  if (num > 0 && num % 2 === 0) {
    document.getElementById(
      "numResult"
    ).textContent = `Positive and Even: ${num}`;
  } else if (num > 0 && num % 2 !== 0) {
    document.getElementById(
      "numResult"
    ).textContent = `Positive and Odd: ${num}`;
  } else if (num < 0 && num % 2 === 0) {
    document.getElementById(
      "numResult"
    ).textContent = `Negative and Even: ${num}`;
  } else if (num < 0 && num % 2 !== 0) {
    document.getElementById(
      "numResult"
    ).textContent = `Negative and Odd: ${num}`;
  } else {
    document.getElementById("numResult").textContent = `The number is 0`;
  }

  // if (num > 0 && num % 2 === 0) {
  //   return {
  //     positive: num,
  //     even: num,
  //   };
  // } else if (num > 0 && num % 2 !== 0) {
  //   return {
  //     positive: num,
  //     odd: num,
  //   };
  // } else if (num < 0 && num % 2 === 0) {
  //   return {
  //     negative: num,
  //     even: num,
  //   };
  // } else if (num < 0 && num % 2 !== 0) {
  //   return {
  //     negative: num,
  //     odd: num,
  //   };
  // } else {
  //   return {
  //     zero: num,
  //   };
  // }
}

// let number = numberCheck(7);

// console.log(number);

// let number2 = numberCheck(9);

// console.log(number2);

// let num4 = numberCheck(8);

// console.log(num4);
