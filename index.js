/**
 *  Exercise
 */

// Question 1 - comprison
/**
 * initialise the variable number to the value of 14
 * console log to check if number is greater than 14
 * write a single line comment as to what will be out putted.
 */

var number = 14;
console.log(number > 14); // false


// Question 2 - comprison
/**
 * initialise the variable number to the value of 21
 * console log to check if number is strictly equal to 20
 * write a single line comment as to what will be out putted.
 */
var number = 21;
console.log(number === 20) // false


// Question 3 - comprison
/**
 * initialise the variable number to the value of 40
 * console log to check if number is less than 45
 * write a single line comment as to what will be out putted.
 */
var number = 40;
console.log(number < 45); //True

// Question 4 - logical ||
/**
 * Initialise the variable x to the value of 15
 * initialise the variable y to the value of 10
 * console log and check if 
 * x is greater than 10 
 * OR
 * y is less than or equal to 10
 * write a single line comment as to what will be displayed
 */
var x = 15;
var y = 10;
console.log(x > 10 || y <=10); //true


// Question 5 - logical &&
/**
 * Initialise the variable a to the value of 21
 * initialise the variable b to the value of 15
 * console log and check if 
 * a is greater than 20 
 * AND
 * b is less than or equal to 15
 * write a single line comment as to what will be displayed
 */
var a = 21;
var b = 15;
console.log(a > 20 && b <= 15); // true

// Question 6 - logical && and !
/**
 * Initialise the variable e to the value of 40
 * initialise the variable f to the value of 34
 * console log and check if 
 * e is greater than 40 
 * &&
 * f is less than or equal to 35
 * Add a not operator somewhere to make the output true
 * write a single line comment as to what will be displayed
 */
var e = 40;
var f = 34;
console.log(!(e <= 40 && f <= 35 )); //true

// Question 7 - if/else
/**
 * Initialise the variable school to the value of BCIT
 * Use if/else statements to do the following checking
 * check if SFU
 * else if check UBC
 * else if check BCIT
 * else 
 */
var school = "BCIT";
if (school == "SFU") {
    console.log ("FIRST");
} else if (school == "UBC") {
    console.log("SECOND");
} else if (school == "BCIT") {
    console.log ("THIRD");
} else {
    console.log("Nothing");
}


// Question 8 - if/else
var guess = 6;
var sentence = "";

if(guess == 6) {
    sentence = "You guessed right.";
} else {
    sentence = "You guesse wrong.";
}
console.log(sentence);



// Question 9 - if/else
var guess = 4;
var sentence = "";
if(guess == 3 || guess == 5) {
    sentence = "You are close.";
} else if (guess == 4) {
    sentence = "You guess correctly.";
} else {
    sentence = "You guess wrong."
};

console.log(sentence);

// Question 10 - write your own question + answer - logical ||


// Question 11 - write your own question + answer - comparison


// Question 12 - write your own question + answer if/else with comparison


// Question 13 - write your own question + answer - if/else with logical ||


// Question 14 - write your own question + answer - if/else with logical &&


// Question 15 - write your own question + answer - if/else with average, backticks and logical &&


//Comparison Operator

//Q1 - equal to
var number = 7;
console.log("Q1", number == 6); //false
 
//Q2 - strictly equal to
var number = 7;
console.log("Q2", number === "7"); //false

//Q3 - grater than
var number = 6;
console.log("Q3", number >5); //true

//Q4 - less than
var number = 7;
console.log("Q4", number <6); //false

// Logical Operators
//Q5 - AND
var pear = 7;
var apple = 4;
console.log("Q5", pear == 7 && apple == 7); //fale

//Q6 - OR
var apple = 8;
var oranges = 3;
console.log("Question 6", apple == 6 || oranges == 2); //false

//Q7 - 
var bird = 5;
console.log("Q7", !(bird == 6)); //true (!false)

// .toUpperCase()

var sentence = "Welcome to toronto";
console.log(sentence.toUpperCase());

// .toLowerCase()
var sentence = "HELLO";
console.log(sentence.toLowerCase());

//.slice()
//ex.1
var senctence = "welcome everyone";
console.log(sentence[0].toUpperCase()); //W

var senctence = "welcome everyone";
console.log(sentence[0].toUpperCase() + sentence.slice(1)); //Welcome everyone

//ex.2
var sentence = "Welcome to la everyone";
console.log(sentence.slice(0,11)); //Welcome to 

var sentence = "Welcome to la everyone";
console.log(sentence.slice(0,11) + sentence.slice(11,13).toUpperCase() + sentence.slice(13)); //Welcome to LA everyone


// Math.floor
var number = 2.33454;
console.log(Math.floor(number)); //2

//Math.ceil
var number = 2.34235;
console.log(Math.ceil(number)); // 3

//Math.round
console.log(Math.round(7.345), Math.round(7.546), Math.round(7.888)); //7 8 8

//How to create your own range of numbers in JavaScript using Math.random() Method
console.log(Math.random()*3) // random decimal number which never reach 3

console.log(Math.floor(Math.random()*3)); //random whole number which never reach 3 (0,1,2)

console.log(Math.floor(Math.random()*3) +1); // 1 or 2 or 3 


 
