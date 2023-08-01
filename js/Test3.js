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
    let operatorsValues =  ['-' , '*' , '+', '/',];
    let counter = 0;
    for (operator of operatorsValues){
        counter++;
        if (operator == value){
            return true;
        }
        else if (counter == 4 && operator != value) {
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
            let button_value = buttons[i].innerHTML.replace('x', '*').replace('÷', '/');
            if (numbers(button_value) && verification.isNumberAllowed || operators(button_value) && verification.isOperatorAllowed || symbols(button_value)){
                if (output.innerHTML.trim() == '0' && !symbols(button_value)){
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
                        operation.firstNumber = output.innerHTML;
                        operation.operator = '';
                        operation.secondNumber = '';
                    }
                    else if (symbols(button_value)){
                        switch (button_value) {
                            case '=':
                                if (!verification.stillFirstNumber && verification.isOperatorAllowed){
                                    output.innerHTML = equal();
                                    operation.firstNumber = output.innerHTML;
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
                                verification.isNumberAllowed = true;
                                verification.isOperatorAllowed = false;
                                verification.stillFirstNumber = true;
                                verification.maxOperatorsReached = false;
                            break;
                        }
                    }
                }
            }
        })
    }
}
// adds key events 
window.addEventListener('keydown', event => {
    if (numbers(event.key) && verification.isNumberAllowed || operators(event.key) && verification.isOperatorAllowed || symbols(event.key)){
        if (output.innerHTML.trim() === '0' && !symbols(event.key)){
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
                let operatorValue = event.key;
                verification.isOperatorAllowed = false;
                verification.maxOperatorsReached = true;
                verification.stillFirstNumber = false;
                operation.operator += event.key;
                verification.isNumberAllowed = true;
                output.innerHTML += operatorValue.replace('/', '÷').replace('*', 'x');
            }
            else if (operators(event.key) && verification.maxOperatorsReached){
                output.innerHTML = equal();
                operation.firstNumber = output.innerHTML;
                operation.operator = '';
                operation.secondNumber = '';
                verification.isOperatorAllowed = true;
                verification.isNumberAllowed = false;
                verification.maxOperatorsReached = false;
            }
            else if (symbols(event.key)){
                switch (event.key) {
                    case 'Enter': 
                    if (!verification.stillFirstNumber && verification.isOperatorAllowed) {
                        output.innerHTML = equal();
                        operation.firstNumber = output.innerHTML;
                        operation.operator = '';
                        operation.secondNumber = '';
                    }
                    break;
                    case 'Backspace':
                        console.log('erase');
                    break;
                    case 'Delete':
                        output.innerHTML = '0';
                        operation.firstNumber = '';
                        operation.operator = '';
                        operation.secondNumber = '';
                        verification.isNumberAllowed = true;
                        verification.isOperatorAllowed = false;
                        verification.stillFirstNumber = true;
                        verification.maxOperatorsReached = false;
                    break;
                }
            }
        }
    }
})

// equal function
let equal = () => {
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
        case '*':
            return (firstNumber * secondNumber).toFixed(2);
        break;
        case '/':
            return (firstNumber / secondNumber).toFixed(2);
        break;
    }
}

// loads function when the page gets loaded
window.onload = getValues();