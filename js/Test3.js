// General variables
let buttons = document.getElementsByClassName('calc-button');
let output = document.getElementById('output');
let verification = {
    isOperatorAllowed: false,
    isNumberAllowed: true,
    maxOperatorsReached: false,
    stillFirstNumber: true,
};
let operation = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
}
// To verify if its an operator
let operators = value => {
    let operatorsValues =  ['-' , 'x' , '÷' , '+', '/'];
    let counter = 0;
    for (operator of operatorsValues){
        counter++;
        if (operator == value){
            return true;
        }
        else if (counter == 5 && operator != value) {
            return false;
        }
    }
}
// To verify if its a number
let numbers = value => {
    let numbersValues = ['1','2','3','4','5','6','7','8','9','0'];
    let counter = 0;
    for (number of numbersValues){
        counter++;
        if (number == value){
            return true;
        }
        else if (counter == 10 && number != value) {
            return false;
        }
    }
}
// To verify if its a symbol
let symbols = value => {
    let symbolsValues = ['←','C','='];
    let counter = 0;
    for (symbol of symbolsValues){
        counter++;
        if (symbol == value){
            return true;
        }
        else if (counter == 3 && symbol != value) {
            return false;
        }
    }
}
// to add event listeners to buttons and get their values
let getValues = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click' , function() {
            let button_value = buttons[i].innerHTML;
            if (numbers(button_value) && verification.isNumberAllowed || operators(button_value) && verification.isOperatorAllowed || symbols(button_value)){
                if (output.innerHTML.trim() == '0'){
                    output.innerHTML = buttons[i].innerHTML
                    verification.isOperatorAllowed = true;
                    operation.firstNumber += button_value;
                }
                else {
                    if (numbers(button_value) && verification.stillFirstNumber){
                        output.innerHTML += buttons[i].innerHTML;
                        verification.isOperatorAllowed = true;
                        operation.firstNumber += button_value;
                    }
                    else if (numbers(button_value) && !verification.stillFirstNumber) {
                        output.innerHTML += buttons[i].innerHTML;
                        verification.isOperatorAllowed = true;
                        operation.secondNumber += button_value;
                    }
                    else if (operators(button_value) && !verification.maxOperatorsReached){
                        verification.isOperatorAllowed = false;
                        verification.isNumberAllowed = true;
                        verification.maxOperatorsReached = true;
                        verification.stillFirstNumber = false;
                        operation.operator += button_value;
                        output.innerHTML += button_value;
                    }
                    else if (operators(button_value) && verification.maxOperatorsReached){
                        output.innerHTML = equal();
                        operation.firstNumber = equal();
                        operation.operator = '';
                        operation.secondNumber = '';
                    }
                    else if (symbols(button_value)){
                        switch (button_value) {
                            case '=':
                                if (!verification.stillFirstNumber && verification.isOperatorAllowed){
                                    output.innerHTML = equal();
                                    operation.firstNumber = equal();
                                    operation.operator = '';
                                    operation.secondNumber = '';
                                }
                            break;
                            case '←':
                                console.log('erase');
                            break;
                            case 'C':
                                output.innerHTML = '0';
                                operation.firstNumber = '';
                                operation.operator = '';
                                operation.secondNumber = '';
                            break;
                        }
                    }
                }
            }
            else{
                console.log(new Error('nope'));
            }
        })
    }
}
// adds key events 
document.addEventListener('keypress', function(event) {
    if (numbers(event.key) && verification.isNumberAllowed || operators(event.key) && verification.isOperatorAllowed){
        if (output.innerHTML.trim() === '0'){
            output.innerHTML = event.key
            verification.isOperatorAllowed = true;
            operation.firstNumber += event.key;
        }
        else{
            if (numbers(event.key) && verification.stillFirstNumber){
                output.innerHTML += event.key;
                verification.isOperatorAllowed = true;
                operation.firstNumber += event.key;
            }
            else if (numbers(event.key) && !verification.stillFirstNumber) {
                output.innerHTML += event.key;
                verification.isOperatorAllowed = true;
                operation.secondNumber += event.key;
            }
            else if (operators(event.key) && !verification.maxOperatorsReached){
                verification.isOperatorAllowed = false;
                verification.maxOperatorsReached = true;
                verification.stillFirstNumber = false;
                operation.operator += event.key;
                verification.isNumberAllowed = true;
                output.innerHTML += event.key;
                output.replace('/', '÷');
            }
            else if (operators(event.key) && verification.maxOperatorsReached){
                output.innerHTML = equal();
                operation.firstNumber = equal();
                operation.operator = '';
                operation.secondNumber = '';
                verification.isOperatorAllowed = true;
                verification.isNumberAllowed = false;
                verification.maxOperatorsReached = false;
            }
        }
    }
    else {
        console.log(new Error('nope'));
    }
})

// equal function
let equal = () => {
    console.log('zezez');
    let firstNumber = parseFloat(operation.firstNumber);
    let secondNumber = parseFloat(operation.secondNumber);
    verification.isOperatorAllowed = true;
    verification.isNumberAllowed = false;
    verification.maxOperatorsReached = false;
    switch (operation.operator){
        case '+':
            return (firstNumber + secondNumber).toFixed(2);
        break;
        case '-':
            return (firstNumber - secondNumber).toFixed(2);
        break;
        case 'x':
            return (firstNumber * secondNumber).toFixed(2);
        case '÷':
            return (firstNumber / secondNumber).toFixed(2);
        break;
        case '/':
            return (firstNumber / secondNumber).toFixed(2);
        break;
    }
}

// loads function when the page gets loaded
window.onload = getValues();