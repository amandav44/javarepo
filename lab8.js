 //1
let name = "Amanda";
let age = 18;     

console.log("Name:", name);
console.log("age:", age);

//2
let month = "October";
let day = 1;
let birthday = false;
let nothing = undefined

console.log(month);
console.log(day);
console.log(birthday);
console.log(nothing);

//3
let RollNumber = 15;
if(RollNumber>10){
    console.log("The RollNumber is greater than 10");
}

//4
let isMember = true;
if(isMember){
    console.log("Member discount applied");
}

//5
let startValue = 50;
if(startValue>0){
    console.log("Positive");
}
else if(startValue<0){
    console.log("Negative");
}
else{
    console.log("0")
}

//6
let a = 4;
let b = 5;
if(a==b){
    console.log("a is equal to b");
}
if(a===b){
    console.log("a is equal to b in tyoe and value");
}
if(a!=b){
    console.log("a is not equal to b");
}
if(a>b){
    console.log("a is greater than b");
}
if(a<b){
    console.log("a is less than b");
}
if(a>=b){
    console.log("a is greater than or equal to b");
}
if(a<=b){
    console.log("a is less than or equal to b");
}

//7
let firstName = "Amanda";
let lastName = "Vetrini";
age = 18;
console.log("Hello",firstName,lastName,",you are", age, " years old.");

//8
let num = 50;


if (num > 0 && num < 100) {
    console.log("The number is within range.");
} else {
    console.log("The number is out of range.");
}

//9
let hasCar = true;
let hasLicense = true;
let hasInsurance = true;


if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}



//10

if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//11
let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80 && score < 90) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}