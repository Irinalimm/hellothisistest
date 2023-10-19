// Function with Returns

//Workbook Exercise

//13-2-2

/** Initialise the variable shopping to the function called my shopping list. 
 * Have parameter values be 12,4. Multiply quantity time price in the function. 
 * Return the answer. Then console log th value below the function. Add the answer as a comment. Write a multiline comment above the function to describe it. 
 */

var shopping = myShoppingList(12,4);
/**
 * @desc to calculate how much the total price of the shopping list
 * @param {*} quantity the quantity of the product
 * @param {*} price the price of the product
 * @returns the total price of shopping list
 */
function myShoppingList(quantity,price) {
    return quantity*price;
};

console.log(shopping); //48

//9-5-2

/** Initialise the variable addition to a function called addition function with the values 3,4
 * Add two numbers. Console log the variable asstion afterwards.
 * Then the answer on the same linne as the console log using
 */

var addition = additionFunction(3,4);
/**
 * @desc adding numbers together.
 * @param {*} a the first value
 * @param {*} b the second value
 * @returns the addition of the first and second value
 */
function additionFunction(a,b) {
    return a+b;
};

console.log(addition); //7

//9-5-3

/**Initialise the value subtraction to a function called subtraction function with the values 10 and 4.
 * Subtract 4 from 10. Console log the variable subtraction afterwards.
 * Add a single comment with the displayed output. 
 */
var subtraction = subtractionFunction(4,10);
/**
 * @desc subtracting the first value from the second value
 * @param {*} numone the first value
 * @param {*} numtwo the second value
 * @returns subtracted value of numone from numtwo.
 */
function subtractionFunction(numone,numtwo) {
    return numtwo - numone;
};

console.log(subtraction); //6

//9-5-4
/**
 * Initialise the variable divide to a function called divide function with the parameters of 12 and 4.
 * Calculate 12 divided by 4 in the function created. Console log the variable divide afterwards.
 * Add a single line comment with the displayed output. 
 */

var divide= divideFunction(12,4);
/**
 * @desc the divide function
 * @param {*} numone the first value
 * @param {*} numtwo the second value
 * @returns the value of dividing numone by numtwo
 */

function divideFunction(numone,numtwo) {
    return numone / numtwo;
};

console.log(divide); //3

//13-2-3

/**Initialise the variale x to the function called myFunction. Have the function take in the number 5 and 6.
 * Return the answer a multiplied by b. Then console log the value below the function to describe it.
 * 
 * Next, create a variable d and give it the value of 5. Initialise another variable z to the function called addinfFive.
 * Make addingFive take in the variables x and d. Then inside the function add the variable g and h. After the function
 * console log out the variable z. Write a comment above the function to describe it. 
 */

var x = myFunction(5,6);
var d = 5;
var z = addingFive(x,d);

/** 
 * @desc the multiply function
 * @param {*} a  the first value
 * @param {*} b  the second value
 * @returns the first value multiplied by the second value
 */
 function myFunction(a,b) {
    return a * b;
 };



 /**
  * @desc the function adding value h to g
  * @param {*} g the first value
  * @param {*} h the 2nd value
  * @returns addition of two values
  */

 function addingFive(g,h) {
    return g + h; 
 };

 console.log(x); //30
 console.log(z); //35


//13-2-4
/**Take the question 13-2-3 and organize it in therms of having the variable at the top, 
 * then the function followed by the console log each time.
 */

//30
//35


//13-2-6
/**
 * Initialise a function called sentence function that takes in the name and age. 
 * This will return the sentence My name is _name_ and I am _age_ years old.
 * 
 * Write a variable called person one and make it equal to the sentence function that has the value George Smith and 25. 
 * Console log out person one.
 */


function sentenceFunction(name,age) {
    return "My name is "+ name + " and I am "+ age + " years old.";
};

var personOne = sentenceFunction("George Smith", 25);

console.log(personOne);


//13-2-7

/**Initialise a function in one line using the variable first name.
 * This function should be called name fix.
 * This will take in the value george which is all lowercase.
 * Initialise the second function to the variable person one.
 * This function should be called sentence function. This will take in the value of the first name abve and number 25.
 * 
 * Below the var just created, write the function for sentence function which takes in the values first name and age. 
 * Then have it return the sentence saying :My name is _firstName_ and I am _age_years old. Write functional comment.
 * 
 * Initialise the 2nd function that is calles name fix and have it take in the firstname. 
 * Then have it return the name formatted the proper way with the first letter being capitalised. 
 * Write function comment. 
 * 
 * Lastly, at the bottom console log out person one. 
 * 
 */

var firstName = nameFix("george");

var personOne = sentenceFunction(firstName,25);

/**
 * @desc Making the sentence
 * @param {*} firstName the first name of the person
 * @param {*} age the age in years
 * @returns the sentence containing the first name and age
 */
function sentenceFunction(firstName,age) {
    return "My name is " + firstName + " and I am " + age + " years old."
};
/**
 * @desc to format the name with the first letter capitalized
 * @param {*} first the name of the person
 * @returns the name with its first letter capitalized
 */
function nameFix(first) {
    return first[0].toUpperCase() + first.substring(1);
};

console.log(personOne);


