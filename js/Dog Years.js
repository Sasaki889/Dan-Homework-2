let myAge = 32;
//This is my age.
let earlyYears = 2;
//this is early Years,its value will change.
earlyYears *= 10.5;
//early Years is multiplied by 10.5
let laterYears = myAge - 2;
//laterYears is myAge - 2 and its changeable hence let
laterYears *= 4;
//lateryears is multiplied by 4
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears ;
let myName = 'DANIEL'.toLowerCase();
console.log(`My name is ${myName}.I am ${myAge} years old in human years which is ${laterYears} years old in dog years.`);