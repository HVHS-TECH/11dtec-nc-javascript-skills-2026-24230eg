/****************************
data types:
****************************/
console.log("Running t11_data_types.js");

// Variables:
let num1 = "50";
let num2 = 50;
let userName;
let currentYear = 2026;
let userAge;
let userMoney;
let userBirthYear;
let ageInTenYears;
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
    if !(userAge === NaN){

    }
    OUTPUT.innerHTML += "<p>You are "+ userAge +" years old.</p>";
    OUTPUT.innerHTML += "<p>You have "+ userMoney +"$.</p>";
};