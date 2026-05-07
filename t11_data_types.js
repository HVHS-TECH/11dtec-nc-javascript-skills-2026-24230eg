/****************************
data types:
****************************/
console.log("Running t11_data_types.js");

// Variables:
let num1 = "50";
let num2 = 50;
let userName = "Ethan Gould";
let currentYear = 2026;
let userAge = 14;
let userMoney = 13.30;
let userBirthYear;
let ageInTenYears;
userBirthYear = currentYear - userAge;
ageInTenYears = userAge + 10;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameFeild");

/****************************
Main code:
****************************/
console.log( num1 + num1);
console.log(num2 + num2);
num1 = Number(num1);
console.log( num1 + num1);
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
    const NAME_FIELD = document.getElementById("nameFeild");
    userName = NAME_FIELD.value;
    const AGE_FIELD = document.getElementById("ageFeild");
    userAge = AGE_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+ userName +".</p>";
    OUTPUT.innerHTML += "<p>You are "+ userAge +" years old.</p>";
}
/*function start(){
    userMoney += 13.30;
    OUTPUT.innerHTML += "<h2>Added by Javascript.</h2>";
    OUTPUT.innerHTML += "<p>Hi "+ userName +".</p>";
    OUTPUT.innerHTML += "<p>As of "+ currentYear +" you are "+ userAge +" years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in "+ userBirthYear +".</p>";
    OUTPUT.innerHTML += "<p>You have "+ userMoney +" dollars.</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be "+ ageInTenYears +" years old.</p>";
    userMoney = userMoney / 2;
    OUTPUT.innerHTML += "<p>You spend half of your money, now you have "+ userMoney +" dollars.</p>";
    userMoney = userMoney + 3;
    OUTPUT.innerHTML += "<p>Then you get $3, now you have "+ userMoney +" dollars.</p>";
    welcome();
    displayProduct("Chocolate bar", 4);
    displayProduct("Chips", 3);
    displayProduct("Drink", 2.5);
};*/