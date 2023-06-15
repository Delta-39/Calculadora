let numbers = document.querySelectorAll('.btn.number')
let display = document.querySelector('.screen')
let operators = document.querySelectorAll('.btn.operator')
let result = document.querySelector('#result')
let deleteElement = document.querySelector('.btn.delete')
let clear = document.querySelector('.btn.clear')


let valueInDisplay = ''
let num1Value
let num2Value
let operatorValue




let add = (a, b) => {
    return Number(a) + Number(b);
}

let substract = (a, b) => {
    return a - b
}

let multiply = (a, b) => {
    return a * b
}

let divide = (a, b) => {
    return a / b
}

let operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return substract(num1, num2);
        case 'x':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
        default:
            break;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        let numero = event.target.innerText;
        valueInDisplay += numero;
        display.innerText = valueInDisplay;
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        let operador = event.target.innerText;
        num1Value = valueInDisplay;
        operatorValue = operador;
        valueInDisplay = ''
        display.innerText = ''
    })
})

clear.addEventListener('click', () => {
    display.innerText = ''
    valueInDisplay = ''
    mum1 = ''
    num2 = ''
    operator = ''
})

deleteElement.addEventListener('click', () => {
    if (valueInDisplay.length > 0) {
        valueInDisplay = valueInDisplay.slice(0, -1);
        display.innerText = valueInDisplay;
    }
})

result.addEventListener('click', () => {
    num2Value = valueInDisplay
    let resultado = operate(num1Value, operatorValue, num2Value)
    display.innerText = resultado
})



// tener en cuenta que para agregar mas numeros lo puedo hacer mediante un string vacio y de ahi pasarlo a numero al moment de que la operacion