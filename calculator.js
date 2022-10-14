function calc(operator, a, b) {
    let result;
    switch (operator) {
        case "add":
            result = a + b;
            break;
        
        case "multi":
            result = a * b;
            break;

        case "subtract":
            result = a - b;
            break;
        default: 
            return "unknown operator";
            break;
    }
    return result;
}
console.log(calc("multi",3,2))