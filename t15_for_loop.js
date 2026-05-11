/****************************
arrays 1:
****************************/
console.log("Running t14_arrays_1.js");

// Variables:
let userName;
let currentYear = 2026;
let userAge;
let userMoney;
let userBirthYear;
let ageInTenYears;
let change;
let userPrefrenceChocolate;
let chocolateMessages = ["You loath chocolate.","Chocolate is meh.","Chocolate is pretty good.","Chocolate is the best thing EVER!!!!"];
let userMilkNum;
userBirthYear = currentYear - userAge;
ageInTenYears = userAge + 10;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameFeild");
const AGE_FIELD = document.getElementById("ageFeild");
const MONEY_FIELD = document.getElementById("moneyFeild");
const CHOCOLATE_SLIDER = document.getElementById("chocolateSlider");
const MILK_RANGE = document.getElementById("milkRange");
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
    userMoney = (Math.floor((MONEY_FIELD.value)*100))/100;
    userPrefrenceChocolate = (CHOCOLATE_SLIDER.value-1);
    userMilkNum = MILK_RANGE.value;
    OUTPUT.innerHTML = "<p>Your name is "+ userName +".</p>";
    if (!isNaN(userAge)){
        OUTPUT.innerHTML += "<p>You are "+ userAge +" years old.</p>";
    };
    if (!isNaN(userMoney)){
        OUTPUT.innerHTML += "<p>You have "+ userMoney +"$.</p>";
        if (userMoney >= 4){
            OUTPUT.innerHTML += "<p>A chocolate bar costs $4. You CAN afford a chocolate bar.</p>";
        }
        else{
            OUTPUT.innerHTML += "<p>A chocolate bar costs $4. Sorry you CAN'T afford a chocolate bar.</p>";
        };
        calculateChange(userMoney, 4);
    };
    OUTPUT.innerHTML += "<p>"+ chocolateMessages[userPrefrenceChocolate]+"<p>";
    for (count = userMilkNum; count > 0; count-1){
        OUTPUT.innerHTML += "<p>"+ count +" bottels of milk on the wall.</p>"
        OUTPUT.innerHTML += "<p>"+ count +" bottels of milk.</p>"
        OUTPUT.innerHTML += "<p>You take one down you pass it around.</p>"
        OUTPUT.innerHTML += "<p>"+ count-1 +" bottels of milk on the wall.</p>"
    };
};
function calculateChange(_money, _price){
    if (_money >= _price){
        OUTPUT.innerHTML += "<p>You will get "+ (Math.round((_money-_price)*100))/100 +"$ change.</p>";
    };
};