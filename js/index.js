let storage = '0';
const answerDisplay = document.querySelector('.answer-display');

//this function is to write numbers, clear, or back
function operandButtonClick(value) {
    if (!(isNaN(parseInt(value)))) {
        determineNumber(value);
    }
}

//this function is for each of the four operations or equal sign
function operationButtonClick(value) {

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

function performMath(number, operation) {

}

function init() {
    console.log('hi')
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