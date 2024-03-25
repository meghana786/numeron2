// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers() {
    var randomNum1 = randomNumber(1, 100);
    var randomNum2 = randomNumber(1, 100);
    number1.textContent = randomNum1;
    number2.textContent = randomNum2;
}

generateRandomNumbers();

// Iteration 3: Creating variables required to make the game functional
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const number3 = document.getElementById("number3");

// Iteration 5: Creating a randomise function to make the game functional
let num1 = parseInt(number1.textContent);
let num2 = parseInt(number2.textContent);

function randomise() {
    const operations = ['+', '-', '*', '/', '%'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    let result;
    switch (randomOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = (num1 / num2).toFixed(2);
            break;
        case '%':
            result = num1 % num2;
            break;
    }
    number3.textContent = result;
    return result;
}

randomise();

// Iteration 6: Making the Operators (button) functional
plus.addEventListener("click", checkAdd);
minus.addEventListener("click", checkMinus);
mul.addEventListener("click", checkMul);
divide.addEventListener("click", checkDiv);
modulus.addEventListener("click", checkMod);
var score=0;
function checkAdd() {
    if (num1 + num2 === parseInt(number3.textContent)) {
        score+=1;
        timeLeft=21;
    }
    generateRandomNumbers();
    num1 = parseInt(number1.textContent);
    num2 = parseInt(number2.textContent);
    randomise();
}

function checkMinus() {
    if (num1 - num2 === parseInt(number3.textContent)) {
        score+=1;
        timeLeft=21;
    }
    generateRandomNumbers();
    num1 = parseInt(number1.textContent);
    num2 = parseInt(number2.textContent);
    randomise();
}

function checkMul() {
    if (num1 * num2 === parseInt(number3.textContent)) {
        score+=1;
        timeLeft=21;
    }
    generateRandomNumbers();
    num1 = parseInt(number1.textContent);
    num2 = parseInt(number2.textContent);
    randomise();
}

function checkDiv() {
    var d = (num1 / num2).toFixed(2);
    var e = parseFloat(number3.textContent).toFixed(2); 

    if (d === e) { 
        score += 1;
        timeLeft = 21;
    }
    generateRandomNumbers();
    num1 = parseInt(number1.textContent);
    num2 = parseInt(number2.textContent);
    randomise();
}

function checkMod() {
    if (num1 % num2 === parseInt(number3.textContent)) {
        score+=1;
        timeLeft=21;
    }
    generateRandomNumbers();
    num1 = parseInt(number1.textContent);
    num2 = parseInt(number2.textContent);
    randomise();
}
console.log(score)
// Iteration 7: Making Timer functional
var timer=document.getElementById("timer");
var timeLeft=20;
function updateTimer()
{
    timer.textContent=timeLeft;
}
var timerInterval=setInterval(function(){
    timeLeft--;
    updateTimer();
    if(timeLeft==0)
    {
        clearInterval(timerInterval);
        handleTimeOut();
    }

},1000);
function handleTimeOut()
{
    window.location.href="gameover.html";
    localStorage.setItem("score",score);
}
updateTimer();
