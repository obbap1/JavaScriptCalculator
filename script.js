// For the screen
let visuals = document.getElementById("displayValue");

let screenDesign = document.getElementById("screen");

// Click events For the buttons...
let b1 = document.getElementById("buttonOne");
b1.addEventListener("click",() => {displayNum('1');});

let b2 = document.getElementById("buttonTwo");
b2.addEventListener("click",() => {displayNum('2');});

let b3 = document.getElementById("buttonThree");
b3.addEventListener("click",() => {displayNum('3');});

let b4 = document.getElementById("buttonFour");
b4.addEventListener("click",() => {displayNum('4');});

let b5 = document.getElementById("buttonFive");
b5.addEventListener("click",() => {displayNum('5');});

let b6 = document.getElementById("buttonSix");
b6.addEventListener("click",() => {displayNum('6');});

let b7 = document.getElementById("buttonSeven");
b7.addEventListener("click",() => {displayNum('7');});

let b8 = document.getElementById("buttonEight");
b8.addEventListener("click",() => {displayNum('8');});

let b9 = document.getElementById("buttonNine");
b9.addEventListener("click",() => {displayNum('9');});

let b0 = document.getElementById("buttonZero");
b0.addEventListener("click",() => {displayNum('0');});

let bPlus = document.getElementById("buttonPlus");
bPlus.addEventListener("click",() => {displayNum('plus');});

let bMinus = document.getElementById("buttonMinus");
bMinus.addEventListener("click",() => {displayNum('minus');});

let bMult = document.getElementById("buttonMultiply");
bMult.addEventListener("click",() => {displayNum('mult');});

let bDiv = document.getElementById("buttonDivide");
bDiv.addEventListener("click",() => {displayNum('divide');});

let bClear = document.getElementById("buttonClear");
bClear.addEventListener("click",() =>{clearStr();});

let bEquals = document.getElementById("buttonEquals");
bEquals.addEventListener("click",() =>{equals();});

let bDecimal = document.getElementById("buttonDecimal");
bDecimal.addEventListener("click",() =>{displayNum('decimal');});

var str = "";

let displayNum = (x) => {
    screenDesign.style.color = "#800F0F";
    if(x == 1) {str += "1";visuals.textContent = str;}
    else if(x == 2) {str += "2";visuals.textContent = str;}
    else if(x == 3) {str += "3";visuals.textContent = str;}
    else if(x == 4) {str+= "4";visuals.textContent = str;}
    else if(x == 5) {str += "5";visuals.textContent = str;}
    else if(x == 6) {str += "6";visuals.textContent = str;}
    else if(x == 7) {str+= "7";visuals.textContent = str;}
    else if(x == 8) {str+= "8";visuals.textContent = str;}
    else if(x == 9) {str += "9";visuals.textContent = str;}
    else if(x == 0) {str += "0";visuals.textContent = str;}
    else if(x == 'plus') {str += "+";visuals.textContent = str;}
    else if(x == 'minus') {str += "-";visuals.textContent = str;}
    else if(x == 'mult') {str += "*";visuals.textContent = str;}
    else if(x == 'divide') {str += "/";visuals.textContent = str;}
    else if(x == 'decimal') {str += ".";visuals.textContent = str;}
}

let clearStr = () => {
    str = "";
    visuals.textContent = "0";
}

let equals = () => {
    var regex = /^[(*+-/)] | [(*+-/)]$/g;
    if(str.match(regex)) return;
    var totalAnswer = eval(str);
    screenDesign.style.color = "red";
    visuals.textContent = totalAnswer;
    str = totalAnswer;
    
}




