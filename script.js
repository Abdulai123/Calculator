
function add(x1, x2) { 
    return x1 + x2; 
}

function substract(x1, x2) { 
    return x1 - x2; 
}

function divide(x1, x2) { 
    return x1 / x2; 
}

function multiply(x1, x2) { 
    return x1 * x2; 
}

function operate(operator, number1, number2){

    switch (operator) {
        case '+':
            return add(number1, number2);
            break;
        case '-':
            return substract(number1, number2);
            break;
        case '/':
            return divide(number1, number2);
            break;
        case '*':
            return multiply(number1, number2);
            break;
        
        default:
            return 'Invalid operation choose between (+, -, /, *)';
            break;
    }
}





