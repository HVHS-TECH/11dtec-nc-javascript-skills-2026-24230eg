/****************************
functions return:
****************************/
console.log("Running t13_functions_return.js");

// Variables:
let userName;
let currentYear = 2026;
let userAge;
let userMoney;
let userBirthYear;
let ageInTenYears;
let change;
userBirthYear = currentYear - userAge;
ageInTenYears = userAge + 10;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameFeild");
const AGE_FIELD = document.getElementById("ageFeild");
const MONEY_FIELD = document.getElementById("moneyFeild");
/****************************
Main code:
****************************/

/****************************
Functions
****************************/
function welcome(){
    OUTPUT.innerHTML += "<p>Welcome to the shop.</p>";
};
function displayProduct (_name, _price){
    OUTPUT.innerHTML += "<p>"+ _name +": $"+ _price +"</p>";
};
function getFormInput(){
    userName = NAME_FIELD.value;
    userAge = Math.floor(Number(AGE_FIELD.value));
    userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML = "<p>Your name is "+ userName +".</p>";
    if (!isNaN(userAge)){
        OUTPUT.innerHTML += "<p>You are "+ userAge +" years old.</p>";
    };
    OUTPUT.innerHTML += "<p>You have "+ userMoney +"$.</p>";
    if (userMoney >= 4){
        OUTPUT.innerHTML += "<p>A chocolate bar costs $4. You CAN afford a chocolate bar.</p>";
    }
    else{
        OUTPUT.innerHTML += "<p>A chocolate bar costs $4. Sorry you CAN'T afford a chocolate bar.</p>";
    };
    calculateChange(userMoney, 4)
};
function calculateChange(_money, _price){
    if (_money >= _price){
        OUTPUT.innerHTML += "<p>You will get "+ Math.round(_money-_price) +" change.</p>";
    }
}