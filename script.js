//  Used for displaying values, aswell as, for calculator functions
let calNum1 = "0";
let calOp = "";
let calNum2 = "0";

//  helps decide which calNum will be effected by any calculator function
let whichOperand = true;

const calScreen = document.querySelector(".cal-screen");
const opOneSpan = document.querySelector(".first-cal-num");
const opTwoSpan = document.querySelector(".sec-cal-num");

const calOpSpan = document.querySelector(".cal-op");
const outputSpan = document.querySelector(".cal-output");

//  Resets any values that would be edited in process of using the calculator
function clearCal() {
    
    calOutput = []
    calNum1 = "0";
    calOp = "";
    calNum2 = "0";
    
    whichOp(true);
    
    outputSpan.textContent = "";
    opOneSpan.textContent = calNum1;
    opTwoSpan.textContent = calNum2;
    calOpSpan.textContent = "_";
    prevUpdate();
};


const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

function operation(operator, num, num2) {
    if (operator === "/" && num2 === 0 ||
        calNum2 === "0") {
        return;
    }
    return operators[operator](num, num2);
};


function addDigit(str, val) {
    let oldVal = str;

    let decimalCount = countChars(str, ".");

    if (decimalCount > 0 && val === "." ||
        str.length > 17 ||
        str.length === 1 && val === 0) {
        return oldVal;
    } 

    return str + val;
};

//  Using whichOperand as the boolean, decides which of the two calculator operands are added to
function addToCal(num) {
    if (whichOperand) {
        calNum1 = addDigit(calNum1, num);
    } else if (!whichOperand) {
        calNum2 = addDigit(calNum2, num);
    }
    //  Visully upddates the calculator values
    updateCalSpans();
}

function updateTxt(str, element) {
    if (str[1] !== ".") {
        element.textContent = hideChar(str, "0");
    } else
    element.textContent = str;
    
    if (str.length === 1 && str[0] === "0") {
        element.textContent = 0;
    };
};

function updateCalSpans() {
    if (whichOperand) {
        updateTxt(calNum1, opOneSpan);
    }   else if (!whichOperand) {
        updateTxt(calNum2, opTwoSpan);
    };
};

// Deletes the most recent item in an array or string
function del(str) {
        str = str.toString();
        let arr = str.split("");
        if (arr.length > 1) {
            arr.pop();
        }
        return arr.join("");
    };
    
    //  Decides which operand to delete from
    function delFromCal() {
        if (whichOperand) {
            calNum1 = del(calNum1);
        }   else if (!whichOperand) {
            calNum2 = del(calNum2);
        }
        updateCalSpans();
};


// Depending on the whichOperand value, indicates which operand is currently going to be edited
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

//  Both event handlers, allow clicking on the calculator operand itself to switch to it
opOneSpan.addEventListener("click", () => {
    whichOp(true);
})
opTwoSpan.addEventListener("click", () => {
    whichOp(false);
})

//  Updates the value, and visual of which operator is selected
function operatorUpdate(op) {
    calOp = op;
    opTwoSpan.textContent = parseFloat(calNum2);
    calOpSpan.textContent = calOp;
};


//  the Array of previous and current calculations, until it is cleared by the clear function
let calOutput = [];

// Takes the value given by the operation function and refines it for visual representation, aswell as, variably 
function result() {
    if (calOp.length === 0) {
        outputSpan.textContent = "Choose your Operator!";
        return;
    }
        let output = operation(calOp, parseFloat(calNum1), parseFloat(calNum2));

        let op = `0${output}`
                
        //  If the user has not selected any operator, it alerts them
        if (output === undefined) {
        outputSpan.textContent = "You know you can't divide by zero. Right?";
        return;
        };
        
        //  Shows the calculation output, and adds to the array of calculations
        outputSpan.textContent = `= ${output}`;
        calNum1 = op; 
        opOneSpan.textContent = parseFloat(op);
        calOutput.push(op);

        prevUpdate();
};


const prevSpan = document.querySelector(".prev-num");
let prevNum = "0";

// Defines the new previous number value, and updates the visuals for it
function prevUpdate() {
    //  If statement of greater than 1 is so, that a NaN doesn't get added and bug the calc
    if (calOutput.length > 1) {
        prevNum = calOutput[calOutput.length - 2];

        prevSpan.textContent = `[${parseFloat(prevNum)}]`;
    } else if (calOutput.length === 1) {
        prevSpan.textContent = "[0]";
    };
};

//  if user clicks the previous value it reverts to it, and clears the previously current value
prevSpan.addEventListener("click", () => {
    if (calOutput.length > 1) {
        calOutput.pop();
        calNum1 = prevNum;
        opOneSpan.textContent = parseFloat(calNum1);
    };
    prevUpdate();
});


// second parameter dictates the amount of decimals
function roundDownDecimal(number, decimals) {
    let multiplier = Math.pow(10, decimals);
    return Math.floor(number * multiplier) / multiplier;
}

// countChars counts the amount of (char) within the (str).
// (str) and (char) must be a string.
// (char) must be a single character.
function countChars(str, char) {
    charCount = 0;
    str = str.toString();
    let arr = str.split("");
    arr.map((c) => {
        if (c === char) {
            return ++charCount;
        }
    });
    
    return charCount;
}

//  Hides a Character yet keeps the original value the same
function hideChar(str, item) {
    str = str.toString();
    let arr = str.split("");
    let indexToHide = str.indexOf(item);
        
    if (indexToHide > -1) {
        arr.splice(indexToHide, item.length);
        return arr.join("");
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

//  Event handler for which button was clicked on the calcualtor
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

    //  Event handler for which key was pressed corresponding to the calculator
    document.addEventListener("keydown", (e) => {
        
        key = e.key;

        if (key === "Tab" ||
            key === " " ||
            key === "Enter"
        ) {
            e.preventDefault()
        }

        switch (key) {
            case ".":
                addToCal(".");
                break;
            case "0":
                addToCal(0);
                break;
            case "1":
                addToCal(1);
                break;
            case "2":
                addToCal(2);
                break;
            case "3":
                addToCal(3);
                break;
            case "4":
                addToCal(4);
                break;
            case "5":
                addToCal(5);
                break;
            case "6":
                addToCal(6);
                break;
            case "7":
                addToCal(7);
                break;
            case "8":
                addToCal(8);
                break;
            case "9":
                addToCal(9);
                break;
            case "Tab":
                whichOp(!whichOperand);
                break;
            case "Enter":
                result();
                break;
            case "Backspace":
                delFromCal();
                break;
            case "Delete":
                delFromCal();
                break;
            case "-":
                operatorUpdate("-")
                break;
            case "=":
                result();
                break;
            case "+":
                operatorUpdate("+")
                break;
            case "c":
                clearCal()
                break;
            case "/":
                operatorUpdate("/")
                break;
            case "*":
                operatorUpdate("*")
                break;
            case "x":
                operatorUpdate("*")
                break;
        };
    });

    const collBtn = document.querySelector(".collapse-btn")
    const infoContent = document.querySelector(".info-content")

    //  Boolean val to determine whether or not to show extra info
    let showCollapsible = false; 

    // Click event handler to show or hide the extra information text
    collBtn.addEventListener("click", () => {
        showCollapsible = !showCollapsible

        if (showCollapsible) {
            infoContent.style.display = "flex"
        } else if (!showCollapsible) {
            infoContent.style.display = "none"
        }
    });