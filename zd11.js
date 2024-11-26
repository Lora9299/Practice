// Advanced Function Tasks (11-15)
// Task 11: Deep Object Copy
// Create a function that makes a deep copy of an object
// (including nested objects) without using JSON.parse/stringify
// Test it with various nested objects and arrays

function objectCopy(object) {
  if (object === null || typeof object !== "object") {
    return object;
  }

  if (Array.isArray(object)) {
    const copy = [];
    for (let i = 0; i < object.length; i++) {
      copy[i] = objectCopy(object[i]);
    }
    return copy;
  }

  const copy = {};

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      copy[key] = objectCopy(object[key]);
    }
  }
  return copy;
}

const original = {
  name: "Ariana",
  age: 25,
  address: {
    city: "Miami",
    zip: 12345,
  },
  hobbies: ["reading", "singing"],
};

const copied = objectCopy(original);
copied.address.city = "New York";
console.log(original.address.city);
console.log(copied.address.city);
