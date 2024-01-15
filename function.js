function calculate(a, b, operator) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
  }

//   function calculate(a, b, operator) {
//     switch (operator) {
//       case "+":
//         return add(a, b);
//       case "-":
//         return subtract(a, b);
//       case "*":
//         return multiply(a, b);
//       case "/":
//         return divide(a, b);
//     }
//   }

// const result = calculate(1, 5, "+");
// console.log("The result is", result);

// const anotherResult = calculate(2, 10, "*");
// console.log("Another result is", anotherResult);
