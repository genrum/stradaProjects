function calc(operator, a, b) {
    let result;
    if (operator === "add") {
        result = a + b;
    } else if (operator === "multi") {
        result = a * b;
    } else if (operator === "subtract") {
        result = a - b;
    } else return "unknown operator"
    return result;
  }
console.log(calc("subtract",3,2))