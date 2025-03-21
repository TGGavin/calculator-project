// used to update display, (later)
// let screenValues = {
//     operator: "No Operator",
//     operand1: "No Number1",
//     operand2: "No Number2"
// }

const zeroBtn = document.querySelector(".zero-btn")
const oneBtn = document.querySelector(".one-btn")
const twoBtn = document.querySelector(".two-btn")
const threeBtn = document.querySelector(".three.btn")
const fourBtn = document.querySelector(".four-btn")
const fiveBtn = document.querySelector(".five-btn")
const sixBtn = document.querySelector(".six-btn")
const svnBtn = document.querySelector(".svn-btn")
const eightBtn = document.querySelector(".eight-btn")
const nineBtn = document.querySelector(".nine-btn")
const negateBtn = document.querySelector(".negate-btn")
const decimalBtn = document.querySelector(".decimal-btn")
const delBtn = document.querySelector(".del-btn")
const divideBtn = document.querySelector(".divide-btn")
const multiplyBtn = document.querySelector(".multiply-btn")
const subtractBtn = document.querySelector(".subtract-btn")
const addBtn = document.querySelector(".add-btn")
const clearBtn = document.querySelector(".clear-btn")
const equalsBtn = document.querySelector(".equal-btn")


const calScreen = document.querySelector("#calc-screen")
function disUpdate(num) {
    return calScreen.textContent = num
}

const operators = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function operation(operator, num, num2) {
    // screenValues["operator"] = operator
    // screenValues["operand1"] = num
    // screenValues["operand2"] = num2
    return operators[operator](num, num2)
}
