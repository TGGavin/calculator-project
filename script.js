//  TO DO LIST
//  Make function that has selected operand have underline, and, inverts whichOperand,
//  Make a function that will make it so when deleting until only one character changes number to 0
//  Have cNumprocess delete decimals if more than one exist within string
//  Add more functions and reduce over specification

let calNum1 = "0";
let calOp = "";
let calNum2 = "0";

let whichOperand = true

const calScreen = document.querySelector(".cal-screen");
const opOneSpan = document.querySelector(".first-cal-num");
const opTwoSpan = document.querySelector(".sec-cal-num");

const calOpSpan = document.querySelector(".cal-op")
const outputSpan = document.querySelector(".cal-output")

function textContentUpdate(elem, val) {
    elem.textContent = val;
}


function clearCal() {
    calNum1 = "0"
    calOp = ""
    calNum2 = "0"
    whichOp(true)
    textContentUpdate(outputSpan, "")
    textContentUpdate(opOneSpan, calNum1)
    textContentUpdate(opTwoSpan, "")
    textContentUpdate(calOpSpan, calOp)
}

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

function operation(operator, num, num2) {
    return operators[operator](num, num2)
}


// List of all calculator buttons
const switchOperandBtn = document.querySelector(".switch-btn");
const zeroBtn = document.querySelector(".zero-btn");
const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const svnBtn = document.querySelector(".svn-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");
const decimalBtn = document.querySelector(".decimal-btn");
const delBtn = document.querySelector(".del-btn");
const divideBtn = document.querySelector(".divide-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const subtractBtn = document.querySelector(".subtract-btn");
const addBtn = document.querySelector(".add-btn");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equal-btn");

function changeOperand(val) {
    if (whichOperand) {
        calNum1 += val
        let parsedNum1 = parseFloat(calNum1)
        textContentUpdate(opOneSpan, parsedNum1)
    } else if (!whichOperand) {
        calNum2 += val
        let parsedNum2 = parseFloat(calNum2)
        textContentUpdate(opTwoSpan, parsedNum2)
    }
}
function delLast() {
    if (whichOperand) {
        let arr = calNum1.split("")
        if (arr.length > 1) {
            arr.pop()
        }
        calNum1 = arr.join("")
        let parsed = parseFloat(calNum1)
        textContentUpdate(opOneSpan, parsed)
    }   else if (!whichOperand) {
        let arr = calNum2.split("")
        if (arr.length > 1) {
            arr.pop()
        }        
        calNum2 = arr.join("")
        let parsed = parseFloat(calNum2)
        textContentUpdate(opTwoSpan, parsed)
    }
}

function whichOp(boolean) {
    whichOperand = boolean
    if (whichOperand) {
        opOneSpan.setAttribute("style", "text-decoration: underline;")
        opTwoSpan.setAttribute("style", "text-decoration;")
    } else if (!whichOperand) {
        opOneSpan.setAttribute("style", "text-decoration;")
        opTwoSpan.setAttribute("style", "text-decoration: underline;;")
        textContentUpdate(opTwoSpan, parseFloat(calNum2))
    }
}


function operatorUpdate(op) {
    calOp = op
    let parsedNum = parseFloat(calNum2)
    whichOp(false)
    textContentUpdate(opTwoSpan, parsedNum)
    textContentUpdate(calOpSpan, calOp)
}

function result() {
    if (calOp.length === 0) {
        textContentUpdate(outputSpan, "Select operation")
    } else {
        let output = operation(calOp, parseFloat(calNum1), parseFloat(calNum2))
        textContentUpdate(outputSpan, `= ${output}`)
    }
}

// countChars counts the amount of (char) within the (str).
// (str) and (char) must be a string.
// (char) must be a single letter.
function countChars(str, char) {
    charCount = 0

    let arr = str.split("")
    arr.map((c) => {
        if (c === char) {
            return ++charCount
        }
    })
    
    return charCount
}

const calcBtnContainer = document.querySelector(".calc-btn-container");
calcBtnContainer.addEventListener("click", (e) => {
    target = e.target;
    switch (target) {
        case zeroBtn:
            changeOperand(0)
            break;
        case oneBtn:
            changeOperand(1)
            break;
        case twoBtn:
            changeOperand(2)
            break;
        case threeBtn:
            changeOperand(3)
            break;
        case fourBtn:
            changeOperand(4)
            break;
        case fiveBtn:
            changeOperand(5)
            break;
        case sixBtn:
            changeOperand(6)
            break;
        case svnBtn:
            changeOperand(7)
            break;
        case eightBtn:
            changeOperand(8)
            break;
        case nineBtn:
            changeOperand(9)
            break;
        case switchOperandBtn:
            whichOp(!whichOperand)
            break;
        case delBtn:
            delLast()
            break;
        case decimalBtn:
            //changeOperand(".")
            break;
        case divideBtn:
            operatorUpdate("/")
            break;
        case multiplyBtn:
            operatorUpdate("*")
            break;
        case addBtn:
            operatorUpdate("+")
            break;
        case subtractBtn:
            operatorUpdate("-")
            break;
        case clearBtn:
            clearCal()
            break;
        case equalsBtn:
            result()
            break;
    };

});
// make function to count "." amount
// if "." amount equal to zero, then add "." also make sure to have it appear
// if "." amount > 0, then return nothing