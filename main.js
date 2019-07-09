const button1 = document.querySelector('#b1')
button1.addEventListener('click', getChar)
const button2 = document.querySelector('#b2')
button2.addEventListener('click', getChar)
const button3 = document.querySelector('#b3')
button3.addEventListener('click', getChar)
const button4 = document.querySelector('#b4')
button4.addEventListener('click', getChar)
const button5 = document.querySelector('#b5')
button5.addEventListener('click', getChar)
const button6 = document.querySelector('#b6')
button6.addEventListener('click', getChar)
const button7 = document.querySelector('#b7')
button7.addEventListener('click', getChar)
const button8 = document.querySelector('#b8')
button8.addEventListener('click', getChar)
const button9 = document.querySelector('#b9')
button9.addEventListener('click', getChar)
const button0 = document.querySelector('#b0')
button0.addEventListener('click', getChar)
const buttonDecimal = document.querySelector('#bDot')
buttonDecimal.addEventListener('click', getChar)


const buttonAdd = document.querySelector('#bAdd')
buttonAdd.addEventListener('click', getChar)
const buttonSubtract = document.querySelector('#bSub')
buttonSubtract.addEventListener('click', getChar)
const buttonDivide = document.querySelector('#bDiv')
buttonDivide.addEventListener('click', getChar)
const buttonMultiply = document.querySelector('#bMult')
buttonMultiply.addEventListener('click', getChar)

const buttonClear = document.querySelector('#bC')
buttonClear.addEventListener('click', clear)

const buttonEquals = document.querySelector('#bEq')
buttonEquals.addEventListener('click', operation)

let display = document.querySelector('#bDisplay')

let displayValue = '0'
let pendingValue

function getChar(char) {
    let btnText = char.target.innerText
    if (displayValue === '0') { 
       displayValue = ''
    }
    displayValue += btnText
    display.innerText = displayValue
 }

function clear() {
    displayValue = '0'
    pendingValue = undefined
    display.innerText = displayValue
}

function operation() {
    pendingValue = eval(displayValue)
    display.innerText = pendingValue
}
