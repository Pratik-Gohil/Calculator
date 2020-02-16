let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let view = document.querySelector(".textview");
let display = document.querySelector("span");

numbers.forEach(number => {
  document.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
      view.value = eval(view.value);
    }
    if (e.key == number.value) {
      view.value += number.value;
    }
  });

  number.addEventListener("click", function() {
    display.style.display = "none";
    view.value += number.value;
  });
});

operators.forEach(operator => {
  document.addEventListener("keydown", function(e) {
    if (
      e.key == operator.value &&
      e.key !== "=" &&
      e.key !== "C" &&
      e.key !== "<"
    ) {
      view.value += operator.value;
    }
  });

  operator.addEventListener("click", function() {
    display.style.display = "none";

    if (operator.value == "C") {
      view.value = "";
    } else if (operator.value == "<") {
      view.value = view.value.substring(0, view.value.length - 1);
    } else if (operator.value == "=") {
      if (view.value == "") {
        setTimeout(function() {
          view.value = "";
        }, 1500);
        view.value += "ERROR!";
      } else {
        view.value = eval(view.value);
      }
    } else {
      if (!view.value.endsWith(operator.value)) {
        view.value += operator.value;
      }
    }
  });
});

document.addEventListener("keydown", function(e) {
  if (e.key == "c" || e.key == "C") {
    view.value = "";
  }
  if (e.key == "Backspace") {
    view.value = view.value.substring(0, view.value.length - 1);
  }
});
