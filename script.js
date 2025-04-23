let calNum1 = "0";
let calOp = "";
let calNum2 = "0";

let whichOperand = true;

const calScreen = document.querySelector(".cal-screen");
const opOneSpan = document.querySelector(".first-cal-num");
const opTwoSpan = document.querySelector(".sec-cal-num");

const calOpSpan = document.querySelector(".cal-op");
const outputSpan = document.querySelector(".cal-output");

function calNumRefresh() {
    parsedNum1 = parseFloat(calNum1);
    parsedNum2 = parseFloat(calNum2);
};

let parsedNum1 = 0;
let parsedNum2 = 0;


function clearCal() {
    calNum1 = "0";
    calOp = "";
    calNum2 = "0";
    calNumRefresh();
    whichOp(true);
    outputSpan.textContent = "";
    opOneSpan.textContent = calNum1;
    opTwoSpan.textContent = "";
    calOpSpan.textContent = calOp;
};


const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

function operation(operator, num, num2) {
    return operators[operator](num, num2);
};


function assignValToCal(val) {
    let numArr1 = calNum1.split("")
    let numArr2 = calNum2.split("")

    if (whichOperand) {
        let decimalCount = countChars(calNum1, ".");        
        if (decimalCount > 0 && val === "."
            || numArr1.length == 1 && val === 0
            || numArr1.length == 17
        ) {
            return;
        }
        calNum1 += val;
        opOneSpan.textContent = calNum1
        if (calNum1[1] !== ".") {
            opOneSpan.textContent = hideChar(calNum1, "0")
        }
    } else if (!whichOperand) {
        let decimalCount = countChars(calNum2, ".");        
        if (decimalCount > 0 && val === "."
            || numArr2.length == 1 && val === 0
            || numArr2.length == 17
        ) {
            return;
        }
        calNum2 += val;
        opTwoSpan.textContent = calNum2
        if (calNum2[1] !== ".") {
            opTwoSpan.textContent = hideChar(calNum2, "0")
        }
    };
};


function del() {
    if (whichOperand) {
        let arr = calNum1.split("");
        if (arr.length > 1) {
            arr.pop();
        }
        calNum1 = arr.join("");
        calNumRefresh();
        opOneSpan.textContent = parsedNum1;
    }   else if (!whichOperand) {
        let arr = calNum2.split("");
        if (arr.length > 1) {
            arr.pop();
        };        
        calNum2 = arr.join("");
        calNumRefresh();
        opTwoSpan.textContent = parsedNum2;
    };
};


function whichOp(boolean) {
    whichOperand = boolean;
    if (whichOperand) {
        opOneSpan.setAttribute("style", "text-decoration: underline;");
        opTwoSpan.setAttribute("style", "text-decoration;");
    } else if (!whichOperand) {
        opOneSpan.setAttribute("style", "text-decoration;");
        opTwoSpan.setAttribute("style", "text-decoration: underline;;");
        calNumRefresh();
        opTwoSpan.textContent = parsedNum2;
    };
};


function operatorUpdate(op) {
    calOp = op;
    calNumRefresh();
    whichOp(false);
    opTwoSpan.textContent = parsedNum2;
    calOpSpan.textContent = calOp;
};


function result() {
    whichOp(true);
    if (calOp.length === 0) {
        outputSpan.textContent = "Select Mathmatical Operator"
    } else {
        let output = operation(calOp, parseFloat(calNum1), parseFloat(calNum2));
        outputSpan.textContent = `= ${output}`
    };
};


// countChars counts the amount of (char) within the (str).
// (str) and (char) must be a string.
// (char) must be a single character.
function countChars(str, char) {
    charCount = 0;

    let arr = str.split("");
    arr.map((c) => {
        if (c === char) {
            return ++charCount;
        }
    });
    
    return charCount;
}

function hideChar(str, item) {
    let arr = str.split("")
    let indexToHide = str.indexOf(item);
        
    if (indexToHide > -1) {
        arr.splice(indexToHide, item.length);
        return arr.join("")
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
            assignValToCal(0);
            break;
        case oneBtn:
            assignValToCal(1);
            break;
        case twoBtn:
            assignValToCal(2);
            break;
        case threeBtn:
            assignValToCal(3);
            break;
        case fourBtn:
            assignValToCal(4);
            break;
        case fiveBtn:
            assignValToCal(5);
            break;
        case sixBtn:
            assignValToCal(6);
            break;
        case svnBtn:
            assignValToCal(7);
            break;
        case eightBtn:
            assignValToCal(8);
            break;
        case nineBtn:
            assignValToCal(9);
            break;
        case switchOperandBtn:
            whichOp(!whichOperand);
            break;
        case delBtn:
            del();
            break;
        case decimalBtn:
            assignValToCal(".")
            break;
        case divideBtn:
            operatorUpdate("/");
            break;
        case multiplyBtn:
            operatorUpdate("*");
            break;
        case addBtn:
            operatorUpdate("+");
            break;
        case subtractBtn:
            operatorUpdate("-");
            break;
        case clearBtn:
            clearCal();
            break;
        case equalsBtn:
            result();
            break;
    };

});