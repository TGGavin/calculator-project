
let screenValues = {
    operator: "No Operator",
    operand1: "No Number1",
    operand2: "No Number2"
}

const operators = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function operation(operator, num, num2) {
    screenValues["operator"] = operator
    screenValues["operand1"] = num
    screenValues["operand2"] = num2
    return operators[operator](num, num2)
}
