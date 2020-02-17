const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

function compute() {
  let computation;
  let prev = parseFloat(previousOperandTextElement.innerText);
  let current = parseFloat(currentOperandTextElement.innerText);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperandTextElement.innerText = computation;
  operation = undefined;
  previousOperandTextElement.innerText = "";
}

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (
      button.innerText === "." &&
      currentOperandTextElement.innerText.includes(".")
    )
      return;
    currentOperandTextElement.innerText += button.innerText;
  });
});
let operation;
operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentOperandTextElement.innerText === "") return;
    if (previousOperandTextElement.innerText !== "") {
      compute();
    }
    operation = button.innerText;
    previousOperandTextElement.innerText = currentOperandTextElement.innerText;
    currentOperandTextElement.innerText = "";
    if (operation != null) {
      previousOperandTextElement.innerText = `${previousOperandTextElement.innerText} ${operation}`;
    }
  });
});
equalsButton.addEventListener("click", () => {
  compute();
});
allClearButton.addEventListener("click", () => {
  currentOperandTextElement.innerText = "";
  previousOperandTextElement.innerText = "";
  operation = undefined;
});
deleteButton.addEventListener("click", () => {
  currentOperandTextElement.innerText = currentOperandTextElement.innerText.slice(
    0,
    -1
  );
});
