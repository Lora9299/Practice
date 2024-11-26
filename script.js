function increment() {
  let element = document.getElementById("result");

  let currentElement = parseInt(element.textContent);

  currentElement++;

  element.textContent = currentElement;

  console.log("Trenutno: ", currentElement);
}
