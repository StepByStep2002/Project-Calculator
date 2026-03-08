//create functions add, substract, multiply, divide
let firstNumber;
let secondNumber;
let operator;
const display = document.getElementById('calcDisplay')
const calcNumbers = document.getElementById('calcNumbers')
const buttonAdd = document.getElementById('add');
const buttonSubstract = document.getElementById('substract');
const buttonMultiply =  document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonResult = document.getElementById('result');
const buttonClear = document.getElementById('clear');

const divFirstNumber = document.getElementById('firstNumber');
const divSecondNumber = document.getElementById('secondNumber');
const divOperator = document.getElementById('operator');
const divResult = document.getElementById('showResult');
function add(number1, number2)
{
    return number1 + number2;
}

function substract(number1, number2)
{
    return number1 - number2;
}

function multiply(number1, number2)
{
    return number1 * number2;
}

function divide(number1, number2)
{
    return number1 / number2;
}  

function operate(number1, operator, number2)
{
    switch(operator)
    {
        case '+':
           return add(number1, number2)
            
        case '-':
            return substract(number1, number2)
            
        case '*':
            return multiply(number1, number2)
            
        case '/':
           return divide(number1, number2)
            
    }
}

function enterFirstNumber(number)
{
    
    firstNumber += number.textContent;
    firstNumber = firstNumber.replace('undefined', '');
    firstNumber = Number(firstNumber)
    divFirstNumber.textContent = firstNumber;
    console.log('First number: '+ firstNumber);
    
}

function enterSecondNumber(number)
{
    secondNumber += number.textContent;
    secondNumber = secondNumber.replace('undefined', '');
    secondNumber = Number(secondNumber)
    divSecondNumber.textContent = secondNumber;
    console.log('Second number: '+ secondNumber);
}

function clear(){
    firstNumber = '';
    secondNumber = '';
    operator = '';
    divFirstNumber.textContent = '';
    divOperator.textContent = '';
    divSecondNumber.textContent = '';
    divResult.textContent = '';
}
for(let i = 0; i <= 9; i++)
{
    let createNumber = document.createElement('button')
    createNumber.textContent = i;
    createNumber.className = 'numbers';
    createNumber.addEventListener('click', function(){

        if(divResult.textContent) clear()
        if(!operator) enterFirstNumber(createNumber)
        else if(operator) enterSecondNumber(createNumber)

    });
    calcNumbers.appendChild(createNumber);
}

buttonAdd.addEventListener('click', () => {
    divOperator.textContent += ' + ';
    operator = '+';
});

buttonSubstract.addEventListener('click', () => {
    divOperator.textContent += ' - ';
    operator = '-';
});

buttonMultiply.addEventListener('click', () => {
    divOperator.textContent += ' * ';
    operator = '*';
});

buttonDivide.addEventListener('click', () => {
    divOperator.textContent += ' / ';
    operator = '/';
});

buttonClear.addEventListener('click', clear)
buttonResult.addEventListener('click', function(){
    divResult.textContent = ' = '
    divResult.textContent += operate(firstNumber, operator, secondNumber)
});