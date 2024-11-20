let storage = '0';
const answerDisplay = document.querySelector('.answer-display');
let storageArray = [];

//this function is to write numbers, clear, or back
function operandButtonClick(value) {
    if (!(isNaN(parseInt(value)))) {
        determineNumber(value);
    } else if (value === 'C') {
        storage = '0';
        rerender();
    } else {
        back();
    }
}

//this function is for each of the four operations or equal sign
function operationButtonClick(value) {
    storageArray.push(storage);
    if (value === '=') {
        performMath();
    }
    else {
        storageArray.push(value);
        storage = '0';
    }
}

//this is to keep track of the number
function determineNumber(value) {
    if (storage === '0') {
        storage = value;
    } else {
        storage += value;
    }
    rerender();
}

//back button implementation
function back() {
    if (storage === '0') {
        storage = '0'
    }
    else {
        storage = storage.slice(0, -1);
    }
    rerender();
}

//performing the math
function performMath() {
    if (storageArray.length === 3) {
        let firstOperand = storageArray.pop();
        let operation = storageArray.pop();
        let secondOperand = storageArray.pop();
        switch (operation) {
            case '÷':
                if (firstOperand === '0') {
                    storage = 'undefined';
                } else {
                    storage = (parseInt(secondOperand) / parseInt(firstOperand)).toString();
                }
                break;
            case '×':
                storage = (parseInt(secondOperand) * parseInt(firstOperand)).toString();
                break;
            case '-':
                storage = (parseInt(secondOperand) - parseInt(firstOperand)).toString();
                break;
            case '+':
                storage = (parseInt(secondOperand) + parseInt(firstOperand)).toString();
                break;
        }
    }
    rerender();
}

function init() {
    document.querySelector('.grey-operands')
            .addEventListener("click", function(event) {
                operandButtonClick(event.target.innerText);
            })
    document.querySelector('.operations')
            .addEventListener("click", function(event) {
                operationButtonClick(event.target.innerText);
            })
}

function rerender() {
    answerDisplay.innerText = storage;
}

init();