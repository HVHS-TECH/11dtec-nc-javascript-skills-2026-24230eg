/****************************
constants:
****************************/
console.log("Running t20_constants.js");

// Variables:
let userName;
const CURRENTYEAR = 2026;
let userAge;
let userMoney;
let userBirthYear;
let userPrefrenceChocolate;
const CHOCOLATEMESSAGES = ["You loath chocolate.","Chocolate is meh.","Chocolate is pretty good.","Chocolate is the best thing EVER!!!!"];
let userMilkNum;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const FORM = document.getElementById("formForm");
const NAME_FIELD = document.getElementById("nameFeild");
const AGE_FIELD = document.getElementById("ageFeild");
const MONEY_FIELD = document.getElementById("moneyFeild");
const CHOCOLATE_RANGE = document.getElementById("chocolateRange");
const MILK_RANGE = document.getElementById("milkRange");
/****************************
Main code:
****************************/

/****************************
Functions
****************************/
function getFormInput(){
    userName = NAME_FIELD.value;
    userAge = Math.floor(Number(AGE_FIELD.value));
    userMoney = (Math.floor((MONEY_FIELD.value)*100))/100;
    userPrefrenceChocolate = (CHOCOLATE_RANGE.value-1);
    userMilkNum = MILK_RANGE.value;
    console.log("1");
    if (FORM.checkValidity() === false){
    } else{
        console.log("2");
        if (isNaN(userName) && userName.length >2){
            OUTPUT.innerHTML = "<p>Your name is "+ userName +".</p>";
        }else if(userName.length < 3){
            OUTPUT.innerHTML = "<p>Your name is too short.</p>";
        }else{
            OUTPUT.innerHTML = "<p>Your name can't be a number.</p>";
        }
        if (!isNaN(userAge)){
            OUTPUT.innerHTML += "<p>You are "+ userAge +" years old.</p>";
        }else{
            OUTPUT.innerHTML += "<p>That is not a valid age.</p>";
        };
        if (isNaN(userMoney)){
            OUTPUT.innerHTML += "<p>That is not a valid amount of money.</p>";
        }else if (userMoney<0) {
            OUTPUT.innerHTML += "<p>How are you in debt in pocket money.</p>";
        }else {
            OUTPUT.innerHTML += "<p>You have "+ userMoney +"$.</p>";
            if (userMoney >= 4){
                OUTPUT.innerHTML += "<p>A chocolate bar costs $4. You CAN afford a chocolate bar.</p>";
            }
            else{
                OUTPUT.innerHTML += "<p>A chocolate bar costs $4. Sorry you CAN'T afford a chocolate bar.</p>";
            };
            calculateChange(userMoney, 4);
        };
        OUTPUT.innerHTML += "<p>"+ CHOCOLATEMESSAGES[userPrefrenceChocolate]+"<p>";
        for (let count = userMilkNum; count > 0; count = (count-1)){
            OUTPUT.innerHTML += "<p>"+ count +" bottels of milk on the wall.</p>";
            OUTPUT.innerHTML += "<p>"+ count +" bottels of milk.</p>";
            OUTPUT.innerHTML += "<p>You take one down you pass it around.</p>";
            OUTPUT.innerHTML += "<p>"+ (count - 1) +" bottels of milk on the wall.</p>";
        };
    };
};
function calculateChange(_money, _price){
    if (_money >= _price){
        OUTPUT.innerHTML += "<p>You will get "+ (Math.round((_money-_price)*100))/100 +"$ change.</p>";
    };
};