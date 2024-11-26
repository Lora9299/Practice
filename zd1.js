//ZD 1
//Task 1: Hello, Name!
//Create a function that takes a name as a parameter and returns "Hello, [name]!"
//Example: sayHello("John") → "Hello, John!"

function getName() {
  let element = document.getElementById("inputId");

  let name = element.value;

  greet(name);
}

function greet(greeting) {
  console.log("Hello", greeting);
}
