//create functions add, substract, multiply, divide
let firstNumber;
let secondNumber;
let operator;
let result;
const display = document.getElementById('calcDisplay')
const calcNumbers = document.getElementById('calcNumbers')
const body = document.querySelector('body');

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
    if(firstNumber == '0') firstNumber = '0';
    else
    {
        firstNumber += number.textContent;
        firstNumber = firstNumber.replace('undefined', '');
        divFirstNumber.textContent = firstNumber;
        console.log('First number: '+ firstNumber);
    }
    
}

function enterSecondNumber(number)
{
    if(secondNumber == '0') secondNumber = '0';
    else
    {
        secondNumber += number.textContent;
        secondNumber = secondNumber.replace('undefined', '');
        divSecondNumber.textContent = secondNumber;
        console.log('Second number: '+ secondNumber);
    }
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

function operatorPress(button)
{
    if(firstNumber)
    {
        divFirstNumber.textContent = firstNumber;
        divSecondNumber.textContent = '';
        divOperator.textContent = '  ' + button + ' ';
        operator = button;
    }
}
//Calculates the result on pressing operator, assign it to the firstNumber
function resultOnOperator(){
    if(secondNumber){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        firstNumber = Math.round(operate(firstNumber, operator, secondNumber) * 1000)/1000;
        console.log(firstNumber);
        secondNumber = '';
        divFirstNumber.textContent = firstNumber;
        divSecondNumber.textContent = '';
        divResult.textContent = '';
    }
}
for(let i = 9; i >= 0; i--)
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
    }
    operatorPress(buttonAdd.textContent)
});

buttonSubstract.addEventListener('click', () => {
     if(operator)
    {
        resultOnOperator();
    } 
    operatorPress(buttonSubstract.textContent)
});

buttonMultiply.addEventListener('click', () => {
      if(operator)
    {
        resultOnOperator();
    } 
    operatorPress(buttonMultiply.textContent)
});

buttonDivide.addEventListener('click', () => {
         if(operator)
    {
        resultOnOperator();
    } 
    operatorPress(buttonDivide.textContent)
});

buttonClear.addEventListener('click', clear)

buttonResult.addEventListener('click', function(){
    if(!firstNumber || !secondNumber) return alert('Enter all numbers');

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    divResult.textContent = ' = ';
    divResult.textContent += Math.round(operate(firstNumber, operator, secondNumber) * 1000)/1000;
});

buttonFloat.addEventListener('click', function(){
    if(!divFirstNumber.textContent.includes('.'))
    {
        if(!operator)
        {   
            if(!firstNumber) firstNumber = '0.';
            else firstNumber += ".";
            divFirstNumber.textContent = firstNumber;
            console.log(firstNumber)
        }
    } 
    if(!divSecondNumber.textContent.includes('.'))   
    {   
        if(operator)
        {
            if(!secondNumber) secondNumber = '0.';
            else secondNumber += ".";
            divSecondNumber.textContent = secondNumber;
            console.log(secondNumber)
        }
    }
    
});

buttonBack.addEventListener('click', function(){
    if(divResult.textContent) divResult.textContent = '';
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
});

body.addEventListener('keydown', (e) => {
    let regex = /\d/;
    if(regex.test(e.key)) {
        if(divResult.textContent) clear();
        if(!operator)
        {   
            if(firstNumber == '0') firstNumber = '0';
            else
            {
                firstNumber += e.key;
                firstNumber = firstNumber.replace('undefined', '');
                divFirstNumber.textContent = firstNumber;
            }
        }
        else
        {
            if(secondNumber == '0') secondNumber = '0';
            else
            {
                secondNumber += e.key;
                secondNumber = secondNumber.replace('undefined', '');
                divSecondNumber.textContent = secondNumber;
            }
        }
    };

    let specialCharacters = /[+\-\*\/=\.]/g;
    if(firstNumber && e.key.match(specialCharacters))
    {
        switch(e.key)
        {
            case '+':
                if(operator)
                {
                    resultOnOperator();
                } 
                operatorPress(e.key)
                break;
            
            case '-':
                if(operator)
                {
                    resultOnOperator();
                } 
                operatorPress(e.key)
                break;
            
            case '/':
                if(operator)
                {
                    resultOnOperator();
                } 
                operatorPress(e.key)
                break;
            
            case '*':
                if(operator)
                {
                    resultOnOperator();
                } 
                operatorPress(e.key)
                break;
            
            case '=':
                if(!firstNumber || !secondNumber) return alert('Enter all numbers');
                if(firstNumber == '0.' || secondNumber == '0.') return alert('Number is entered incorrectly')
                firstNumber = Number(firstNumber);
                secondNumber = Number(secondNumber);
                divResult.textContent = ' = ';
                divResult.textContent += Math.round(operate(firstNumber, operator, secondNumber) * 1000)/1000;
                break;
            
            case '.':
                if(!divFirstNumber.textContent.includes('.'))
                {
                    if(!operator)
                    {   
                        if(!firstNumber) firstNumber = '0.';
                        else firstNumber += '.';
                        divFirstNumber.textContent = firstNumber;
                        console.log(firstNumber)
                    }
                }

                if(!divSecondNumber.textContent.includes('.'))   
                {   
                    if(operator)
                    {
                        if(!secondNumber) secondNumber = '0.';
                        else secondNumber += '.';
                        divSecondNumber.textContent = secondNumber;
                        console.log(secondNumber)
                    }
                }
                break;
                            
        }
    }

    if(e.key == 'Backspace')
    {
        if(divResult.textContent) divResult.textContent = '';
        else if(secondNumber) 
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
    }
});

