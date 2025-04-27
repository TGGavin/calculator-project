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
    opTwoSpan.textContent = calNum2;
    calOpSpan.textContent = "_";
};


const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

function operation(operator, num, num2) {
    if (operator === "/" && num2 === 0) {
        return;
    }
    return operators[operator](num, num2);
};


function addDigit(calNum, val) {
    let oldVal = calNum

    let decimalCount = countChars(calNum, ".")

    if (decimalCount > 0 && val === "." ||
        calNum.length > 17 ||
        calNum.length === 1 && val === 0) {
        return oldVal
    } 

    return calNum + val
};

function addToCal(num) {
    if (whichOperand) {
        calNum1 = addDigit(calNum1, num)
    } else if (!whichOperand) {
        calNum2 = addDigit(calNum2, num)
    }
    updateCalSpans()
}

function updateTxt(str, element) {
    if (str[1] !== ".") {
        element.textContent = hideChar(str, "0")
    } else
    element.textContent = str
    
    if (str.length === 1 && str[0] === "0") {
        element.textContent = 0
    }
}

function updateCalSpans() {
    if (whichOperand) {
        updateTxt(calNum1, opOneSpan)
    }   else if (!whichOperand) {
        updateTxt(calNum2, opTwoSpan)
    }
}

//make it so 0 shows if only number
function del(str) {
        let arr = str.split("");
        if (arr.length > 1) {
            arr.pop();
        }
        return arr.join("");
    };
    
    function delFromCal() {
        if (whichOperand) {
            calNum1 = del(calNum1)
        }   else if (!whichOperand) {
            calNum2 = del(calNum2)
        }
        updateCalSpans()
}


function whichOp(boolean) {
    whichOperand = boolean;
    if (whichOperand) {
        opOneSpan.setAttribute("style", "text-decoration: underline;");
        opTwoSpan.setAttribute("style", "text-decoration;");
    } else if (!whichOperand) {
        opOneSpan.setAttribute("style", "text-decoration;");
        opTwoSpan.setAttribute("style", "text-decoration: underline;;");
    };
};

opOneSpan.addEventListener("click", () => {
    whichOp(true)
})

opTwoSpan.addEventListener("click", () => {
    whichOp(false)
})


function operatorUpdate(op) {
    calOp = op;
    calNumRefresh();
    whichOp(false);
    opTwoSpan.textContent = parsedNum2;
    calOpSpan.textContent = calOp;
};


function result() {
    whichOp(true);
    opOneSpan.textContent = parseFloat(calNum1)
    if (calOp.length === 0) {
        outputSpan.textContent = "Select Mathmatical Operator"
    } else {
        let output = operation(calOp, parseFloat(calNum1), parseFloat(calNum2));
       if (output === undefined) {
        outputSpan.textContent = "You know you can't divide by zero. Right?"
        return
       }
        outputSpan.textContent = `= ${output}`
        calNum1 = output;
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
const delSvg = document.querySelector(".del-svg")
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
            addToCal(0);
            break;
        case oneBtn:
            addToCal(1);
            break;
        case twoBtn:
            addToCal(2);
            break;
        case threeBtn:
            addToCal(3);
            break;
        case fourBtn:
            addToCal(4);
            break;
        case fiveBtn:
            addToCal(5);
            break;
        case sixBtn:
            addToCal(6);
            break;
        case svnBtn:
            addToCal(7);
            break;
        case eightBtn:
            addToCal(8);
            break;
        case nineBtn:
            addToCal(9);
            break;
        case decimalBtn:
            addToCal(".")
            break;
        case switchOperandBtn:
            whichOp(!whichOperand);
            break;
        case delBtn:
            delFromCal();
            break;
        case delSvg:
            delFromCal();
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