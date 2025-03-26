//  TO DO LIST
//  Make upper-cal-num disappear when not in use
//  Make functioning calculator before visuals
//  Make boolean value determining whther to edit upper or lower value, if operator is selected


let calNum1 = "0";
let calOp = "";
let calNum2 = "";

const calScreen = document.querySelector(".cal-screen");
const opOneSpan = document.querySelector(".first-cal-num");
const opTwoSpan = document.querySelector(".sec-cal-num");
const calOpSpan = document.querySelector(".cal-op")

function textContentUpdate(elem, val) {
    elem.textContent = val;
}


function clearCal() {
    calNum1 = "0"
    calOp = ""
    calNum2 = ""
    textContentUpdate(opOneSpan, calNum1)
    textContentUpdate(opTwoSpan, calNum2)
    textContentUpdate(calOpSpan, calOp)
}

    let hasOps = (opVal) => {
        switch (opVal) {
            case "-":
            case "+":
            case "/":
            case "*":
                return true;
            case "":
                return false;
            default:
                return 404;
            }
        }

function cNumProcess() {
    //let isWhichOperand = hasOps(calOp)
    let parsedNum1 = parseInt(calNum1)
    let parsedNum2 = parseInt(calNum2)
    textContentUpdate(opOneSpan, parsedNum1)
    textContentUpdate(opTwoSpan, parsedNum2)

}

const operators = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
    // add negate
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

const calcBtnContainer = document.querySelector(".calc-btn-container");
calcBtnContainer.addEventListener("click", (e) => {
    target = e.target;
    switch (target) {
        case zeroBtn:
            console.log(calNum1);
            break;
        case oneBtn:
            calNum1 += 1;
            console.log(calNum1);
            break;
        case twoBtn:
            calNum1 += 2
            console.log(calNum1);
            break;
        case threeBtn:
            calNum1 += 3
            console.log(calNum1);
            break;
        case fourBtn:
            console.log(target);
            break;
        case fiveBtn:
            console.log(target);
            break;
        case sixBtn:
            console.log(target);
            break;
        case svnBtn:
            console.log(target);
            break;
        case eightBtn:
            console.log(target);
            break;
        case nineBtn:
            console.log(target);
            break;
        case switchOperandBtn:
            console.log(target);
            break;
        case delBtn:
            console.log(target);
            break;
        case decimalBtn:
            console.log(target);
            break;
        case divideBtn:
            console.log(target);
            break;
        case multiplyBtn:
            console.log(target);
            break;
        case addBtn:
            console.log(target);
            break;
        case subtractBtn:
            console.log(target);
            break;
        case clearBtn:
            clearCal()
            break;
        case equalsBtn:
            console.log(target);
            break;
        // default:
    };

});
