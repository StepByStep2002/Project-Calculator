//create functions add, substract, multiply, divide
let firstNumber;
let secondNumber;
let operator;
let result;
const display = document.getElementById('calcDisplay')
const calcNumbers = document.getElementById('calcNumbers')

const buttonAdd = document.getElementById('add');
const buttonSubstract = document.getElementById('substract');
const buttonMultiply =  document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonFloat = document.getElementById('floatPoint')
const buttonResult = document.getElementById('result');
const buttonClear = document.getElementById('clear');
const buttonBack = document.getElementById('backspace');

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
            if(number1 == 0 || number2 == 0) return "Can't divide by 0!"
           return divide(number1, number2)
            
    }
}

function enterFirstNumber(number)
{
    
    firstNumber += number.textContent;
    firstNumber = firstNumber.replace('undefined', '');
    if(firstNumber.includes('.')) firstNumber = parseFloat(firstNumber);//turns firstNumber into a float with decimal if '.' is present
    else firstNumber = Number(firstNumber);
    divFirstNumber.textContent = firstNumber;
    console.log('First number: '+ firstNumber);
    
}

function enterSecondNumber(number)
{
    secondNumber += number.textContent;
    secondNumber = secondNumber.replace('undefined', '');
    if(secondNumber.includes('.')) secondNumber = parseFloat(secondNumber);
    else secondNumber = Number(secondNumber);
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
//Calculates the result, assign it to the firstNumber
function resultOnOperator(){
    if(secondNumber){
        firstNumber = operate(firstNumber, operator, secondNumber)
        secondNumber = '';
        divFirstNumber.textContent = firstNumber;
        divSecondNumber.textContent = '';
    }
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
    //Upon pressing operand, immediately calculates result and awaits the input of 
    //secondNumber for the next operation 
    if(operator)
    {
        resultOnOperator();
        divResult.textContent = '';
    } 
    divFirstNumber.textContent = firstNumber;
    divSecondNumber.textContent = '';
    divOperator.textContent = ' + ';
    operator = '+';
});

buttonSubstract.addEventListener('click', () => {
     if(operator)
    {
        resultOnOperator();
        divResult.textContent = '';
    } 
    divFirstNumber.textContent = firstNumber;
    divSecondNumber.textContent = '';
    divOperator.textContent = ' - ';
    operator = '-';
});

buttonMultiply.addEventListener('click', () => {
      if(operator)
    {
        resultOnOperator();
        divResult.textContent = '';
    } 
    divFirstNumber.textContent = firstNumber;
    divSecondNumber.textContent = '';
    divOperator.textContent = ' * ';
    operator = '*';
});

buttonDivide.addEventListener('click', () => {
         if(operator)
    {
        resultOnOperator();
        divResult.textContent = '';
    } 
    divFirstNumber.textContent = firstNumber;
    divSecondNumber.textContent = '';
    divOperator.textContent = ' / ';
    operator = '/';
});

buttonClear.addEventListener('click', clear)

buttonResult.addEventListener('click', function(){
    if(!firstNumber && !secondNumber) return alert('Enter all numbers');
    divResult.textContent = ' = ';
    divResult.textContent += operate(firstNumber, operator, secondNumber);
    firstNumber = operate(firstNumber, operator, secondNumber);
    secondNumber = '';
});

buttonFloat.addEventListener('click', function(){
    if(!divFirstNumber.textContent.includes('.'))
    {
        if(!operator)
        {   
            if(firstNumber == '') firstNumber = '0.';
            else firstNumber += ".";
            console.log(firstNumber)
        }
    } 
    if(!divSecondNumber.textContent.includes('.'))   
    {   
        if(operator)
        {
            if(secondNumber == '') secondNumber = '0.';
            else secondNumber += ".";
            console.log(secondNumber)
        }
    }
});

buttonBack.addEventListener('click', function(){
    if(secondNumber) 
        {   
            secondNumber = secondNumber.toString().slice(0, -1);
            divSecondNumber.textContent = secondNumber;
        }
    else if(!secondNumber && operator) 
        {
            operator = '';
            divOperator.textContent = '';
        }
    else 
        {
            firstNumber = firstNumber.toString().slice(0, -1);
            divFirstNumber.textContent = firstNumber;
        }
        //to implement: remove result
});
