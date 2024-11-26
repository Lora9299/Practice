// Task 10: Array Filter
// Create a function that takes an array and:
// Removes all falsy values (false, null, 0, "", undefined, NaN)
// Returns the filtered array
// Example: [0, 1, false, 2, "", 3] → [1, 2, 3]

function arrayFilter(array) {
  const numFilter = array.filter((item) => item); //keeps items if they are truthy

  return {
    filteredArray: numFilter,
  };
}

const array = [0, 1, false, 2, "", 3];

const filtered = arrayFilter(array);

console.log(filtered);
