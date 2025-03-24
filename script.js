//  TO DO LIST 
//  Make upper-cal-num disappear when not in use
//  Make functioning calculator before visuals
//  Make boolean value determining whther to edit upper or lower value, if operator is selected


let calNum1 = "0";
let calOp = "";
let calNum2 = "0";

const calScreen = document.querySelector(".cal-screen");
const upperCal = document.querySelector(".cal-upper-content");
const lowerCal = document.querySelector(".lower-cal-num");

// Calculator value updater for html spans, so accurate values are displayed
function textContentUpdate(elem, val) {
    elem.textContent = val;
}

// function calSpanUp() {
//     textContentUpdate()
// }

// Determines to change top or bottom calculator value
function tOrB() {
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
        let trueOrFalse = hasOps(calOp)
        return trueOrFalse
}

function cNumProcess(str) {
    let parsedStr = parseInt(str)
    // if (isTopOrBottom) {
        textContentUpdate(upperCal, parsedStr)
    // } else if (isTopOrBottom) {
    //     textContentUpdate(lowerCal, parsedStr)
    // }
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
const negateBtn = document.querySelector(".negate-btn");
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
        case negateBtn:
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
            calNum1 = 0;
            calOp = "";
            calNum2 = 0;
            break;
        case equalsBtn:
            console.log(target);
            break;
        // default:
    };

});
