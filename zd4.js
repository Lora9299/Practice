//ZD 4
// Task 4: String Manipulator
// Create a function that takes a string and returns:
// The string in all uppercase letters
// The string in all lowercase letters
// The length of the string
// Return these three pieces of information in an object

function stringManipulator() {
  let string = document.getElementById("sentence").value;

  const uppercase = string.toUpperCase();
  const lowercase = string.toLowerCase();

  document.getElementById(
    "textResult"
  ).textContent = `Uppercase: ${uppercase} and Lowercase: ${lowercase}`;

  // return {
  //   // uppercase: string.toUpperCase(),
  //   // lowercase: string.toLowerCase(),
  //   // stringLength: string.length,
  // };
}

// let sentence = stringManipulator("This is a sentence");
// console.log(sentence);
