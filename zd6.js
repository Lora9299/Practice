//ZD 6
// Task 6: Array Operations
// Create a function that takes an array of numbers and returns:
// The sum of all numbers
// The average of all numbers
// The highest number
// The lowest number
// Return these in an object

function arrayOperations(array) {
  let sum = 0;
  let average = 0;
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    //SUM
    sum += array[i];

    ///AVERAGE
    average = sum / array.length;

    ///HIGHEST NUM
    if (array[i] > max) {
      max = array[i];
    }

    ///LOWEST NUM
    if (array[i] < min) {
      min = array[i];
    }
  }

  //RESULT
  return {
    SUM: sum,
    AVERAGE: average,
    MAX: max,
    MIN: min,
  };
}

let arraySum = [1, 12, 3, 4, 5, -9];
let sumResult = arrayOperations(arraySum);

console.log(sumResult);
