/****************************
Maths:
****************************/
console.log("Running t05_introduction.js");

// Variables:
let userName = "Ethan Gould";
let currentYear = 2026;
let userAge = 14;
let userMoney = 13.30;
let userBirthYear;
let ageInTenYears;
userBirthYear = currentYear - userAge;
ageInTenYears = userAge + 10;

/****************************
Main code:
****************************/
console.log("Hi "+ userName +".");
console.log("As of "+ currentYear +" you are "+ userAge +" years old.");
console.log("You were born in "+ userBirthYear +".");
console.log("You have "+ userMoney +" dollars.");
console.log("In 10 years you will be "+ ageInTenYears +" years old.")
userMoney = userMoney / 2;
console.log("You spend half of your money, now you have "+ userMoney +" dollars.")
userMoney = userMoney + 3;
console.log("Then you get $3, now you have "+ userMoney +" dollars.")

/****************************
Functions
****************************/
