//  TO DO LIST
//  Make upper-cal-num disappear when not in use
//  Make functioning calculator before visuals
//  Make boolean value determining whther to edit upper or lower value, if operator is selected
//  Make function that has selected operand have underline, and, inverts whichOperand,
//  Make a function that will make it so when deleting until only one character changes number to 0
//  Have cNumprocess delete decimals if more than one exist within string
//  Add more functions and reduce over specification

let calNum1 = "0";
let calOp = "";
let calNum2 = "0";

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
    whichOperand = true
    textContentUpdate(outputSpan, "")
    textContentUpdate(opOneSpan, calNum1)
    textContentUpdate(opTwoSpan, "")
    textContentUpdate(calOpSpan, calOp)
}


let whichOperand = true

//setNum, or, selNum, selOperand
function cNumProcess(val) {
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

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

function operation(operator, num, num2) {
    return operators[operator](num, num2)
}

function result() {
    if (calOp.length === 0) {
        textContentUpdate(outputSpan, "Select operation")
    } else {
        let output = operation(calOp, parseFloat(calNum1), parseFloat(calNum2))
        textContentUpdate(outputSpan, `= ${output}`)
    }
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

const calcBtnContainer = document.querySelector(".calc-btn-container");
calcBtnContainer.addEventListener("click", (e) => {
    target = e.target;
    switch (target) {
        case zeroBtn:
            cNumProcess(0)
            break;
        case oneBtn:
            cNumProcess(1)
            break;
        case twoBtn:
            cNumProcess(2)
            break;
        case threeBtn:
            cNumProcess(3)
            break;
        case fourBtn:
            cNumProcess(4)
            break;
        case fiveBtn:
            cNumProcess(5)
            break;
        case sixBtn:
            cNumProcess(6)
            break;
        case svnBtn:
            cNumProcess(7)
            break;
        case eightBtn:
            cNumProcess(8)
            break;
        case nineBtn:
            cNumProcess(9)
            break;
        case switchOperandBtn:
            whichOperand = !whichOperand
            break;
        case delBtn:
            delLast()
            break;
        case decimalBtn:
            cNumProcess(".")
            break;
        case divideBtn:
            calOp = "/"
            whichOperand = false
            textContentUpdate(calOpSpan, calOp)
            break;
        case multiplyBtn:
            calOp = "*"
            whichOperand = false
            textContentUpdate(calOpSpan, calOp)
            break;
        case addBtn:
            calOp = "+"
            whichOperand = false
            textContentUpdate(calOpSpan, calOp)
            break;
        case subtractBtn:
            calOp = "-"
            whichOperand = false
            textContentUpdate(calOpSpan, calOp)
            break;
        case clearBtn:
            clearCal()
            break;
        case equalsBtn:
            result()
            break;
        // default:
    };

});
