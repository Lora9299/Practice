//ZD 3
// Task 3: Temperature Converter
// Create two functions:
// celsiusToFahrenheit(celsius) → converts Celsius to Fahrenheit
// fahrenheitToCelsius(fahrenheit) → converts Fahrenheit to Celsius
// Formula: (°C × 9/5) + 32 = °F

function celsiusToFahrenheit() {
  let num = document.getElementById("temp").value;

  let celsius = parseInt(num);

  const fahrenheit = (celsius * 9) / 5 + 32;

  document.getElementById("tempResult").textContent = `Result: ${fahrenheit}`;
  // const fahrenheit = (celsius * 9) / 5 + 32;

  // console.log("Fahrenheit: ", fahrenheit);
}

// celsiusToFahrenheit(24);

function fahrenheitToCelsius() {
  let num = document.getElementById("temp").value;

  let fahrenheit = parseInt(num);

  const celsius = ((fahrenheit - 32) * 5) / 9;

  document.getElementById("tempResult").textContent = `Result: ${celsius}`;

  // const celsius = ((fahrenheit - 32) * 5) / 9;
  // console.log("Celsius: ", celsius);
}

// fahrenheitToCelsius(40);
