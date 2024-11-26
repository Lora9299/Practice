// Task 9: Time Converter
// Create a function that converts minutes into:
// Hours and minutes (e.g., 145 minutes = 2 hours and 25 minutes)
// Seconds
// Return both conversions in an object

function timeConverter(time) {
  const seconds = time * 60;
  const hours = Math.floor(time / 60);
  const minutesLeft = time % 60;

  return {
    Seconds: seconds,
    hours,
    minutes: minutesLeft,
  };
}

let time = timeConverter(15);
console.log(time);

const time2 = timeConverter(245);
console.log(time2);
