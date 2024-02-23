// ---------- QUESTION 1. ----------
// Declaring and giving string values to variables.
// Create three variables.  First let's make sure we're using "camel case" where all letters are lowercase except for the first letter of words that are in the middle.  So, your first variable should be titled "firstName" with the value of your first name as a string.  Your second variable should be titled "lastName" with the value of your last name as a string.  The last variable should be titled "country" with the value of the name of the country where you were born as a string.

//PUT YOUR CODE HERE
let firstName = "Dinar";
let lastName = "Ibragimov";
let country = "USSR";

console.log("My first name is: ", firstName);
console.log("My last name is: ", lastName);
console.log("I was born in the country: ", country);

// ---------- QUESTION 2. ----------
// Declaring and giving numerical values to variables.
// Create four variables.  One titled "floatingPoint" with the value of any floating point number you choose.  One titled "integer" with the value of any integer number you choose.  One titled "negative" with the value of any negative number you choose.  One titled "notANumber" with the value of 4 multipled by a string of your choice.
//NOTE: Remember from your lessons that JavaScript can treat large numbers differently than you might expect.
//STRETCH GOAL: You'll see "Stretch Goal"s throughout the course. Stretch Goals are optional, but are encouraged as they help you try your hand at something a little more advanced for the week/assignment/question. Create a fifth variable titled "bigNumber" that is 16 or more numbers long. Then write your console.log and see what happens as you play and practice working with large numbers.

// PUT YOUR CODE HERE

let floatingPoint = 0.5;
let integer = 15;
let negative = -1;
let notANumber = 4 * "test";
let bigNumber = 5235239569346934;

console.log(
  "This is a decimal, also called a floating point number: ",
  floatingPoint,
);
console.log("This is a whole number, also called an integer: ", integer);
console.log("This is a negative number: ", negative);
console.log("You can't mulitply 4 by a word! ", notANumber);
console.log("This is big number: ", bigNumber);

// ---------- Question 3. ----------
// Declaring and giving boolean values to variables.
// Create two variables.  Name the first variable anything you want and give it the value of true.  Name the second variable a different name than the first and give it the value of false.

// PUT YOUR CODE HERE
let coffee = true;
let noCoffee = false;

console.log("The variable I made true is: ", coffee);
//The output of the above should be true.
console.log("The variable I made false is: ", noCoffee);
//The output of the above should be false.

// ---------- QUESTION 4. ----------
// String Concatenation
// Create a variable that makes a concatenated string out of the variables you made in Question 1. Be sure you're using your Q1 variables and not making new ones.
// Suggested text: Hello! My name is (your first name variable and last name variable concatenated here) and I was born in (your country variable here)
// You can also choose to make the text between the variables strings and concatenate all of them together.
// STRETCH GOAL: For this stretch goal, make a second variable that still concatenates your variable from Q1, but uses template literals.

// PUT YOUR CODE HERE

let stringConcatenation =
  "Hello! My name is " +
  firstName +
  " " +
  lastName +
  " and I was born in " +
  country +
  ".";
let templateLiterals = `Hello! My name is ${firstName} ${lastName} and I was born in ${country}`;

console.log(stringConcatenation);
console.log(templateLiterals);

// Don't forget your console.logs!

// ---------- QUESTION 5. ----------
// Numerical "concatenation" also known as Addition
// Make two variables.  One will hold the addition of your your floating point and integer variables from Q2, the other should hold the addition of your integer and negative number from Q2.
//STRETCH GOAL Use an augmented assignment (also called compound assignment) operator to change the value of your floating point and integer numbers by the amount of your integer and/or negative number

// PUT YOUR CODE HERE
//Addition floating and integer
let floatingPointPlusInteger = floatingPoint + integer;

//Addition integer and negative number
let integerPlusNegative = integer + negative;

//Augmented assignment operators
floatingPoint += negative; // Add negative to floatingPoint
integer += negative; // Add negative to integer

// Don't forget your console.logs!
console.log("Floating point + integer: ", floatingPointPlusInteger);
console.log("Integer + negative: ", integerPlusNegative);
console.log("Floating point after augmented assignment: ", floatingPoint);
console.log("Integer after augmented assignment: ", integer);

// ---------- QUESTION 6. ----------
// String Methods
// Create four variables named "length", "firstInitial", "lastInitial", and "capitalize".  Using string methods, assign the length of your first name (use your variable from Q1) to the "length" variable. Assign the first letter of your first name (use your variable from Q1) to the "firstInitial" variable.  Assign the LAST letter of your first name (use your variable from Q1) to the "lastInitial" variable.  Change your first name to all capital letters and assign it to the "capitalize" variable.
//STRETCH GOAL: Create a variable called "weirdInitials". Using string methods, have weirdInitials result in the value of the LAST letters of any first and last names and should be capitalized.  Example: "Sally Smith"'s weird initials should be "YH" and "Jose Rodriguez"'s inititals should be "EZ"

// PUT YOUR CODE HERE
let length = firstName.length;
let firstInitial = firstName.charAt(0);
let lastInitial = firstName.charAt(firstName.length - 1);
let capitalize = firstName.toUpperCase();

let weirdInitials = firstName.charAt(4) + lastName.charAt(8);
// Don't forget your console.logs!
console.log("Length: ", length);
console.log("First initial: ", firstInitial);
console.log("Last initial: ", lastInitial);
console.log("Capitalize: ", capitalize);
console.log("WeirdInitials", weirdInitials.toUpperCase());

// ---------- QUESTION 7. ----------
// Conditional Statements - part 1 of 3
// Declare a variable named "answer7".  Then create a conditional if else statement that will assign the value of true to the answer7 variable if your integer from Q2 is greater than 10 and assign it false if it is not.
// STRETCH GOAL: Make an if elseif else statement that assigns answer7 the value of "less than" if your integer from Q2 is less than 10, "equal to" if it's equal, and "greater than" if it's greater.

// PUT YOUR CODE HERE
let answer7;
if (integer > 10) {
  answer7 = true;
} else {
  answer7 = false;
}
// STRETCH GOAL:
if (integer < 10) {
  answer7 = "less than";
} else if (integer === 10) {
  answer7 = "equal to";
} else {
  answer7 = "greater than";
}

// Don't forget your console.logs!
console.log("Answer7: ", answer7);

// ---------- QUESTION 8. ----------
// Conditional Statements - part 2 of 3
// Declare a variable called "age" and assign it that value of your age in years.  Create a conditional statement that will console.log the phrase "Age is just a number!" if your age is less than or equal to 30 and "Young at heart!" if your age is greater than 30.
//STRETCH GOAL: Combine your skills!  Use template literals to console.log your name in the phrase as in "Sally, age is just a number!" or "Jose, you're young at heart!"

// PUT YOUR CODE HERE
let age = 34;
if (age <= 30) {
  console.log(`${firstName}, you're young at heart!`);
} else {
  console.log(`${firstName}, age is just a number!`);
}

// ---------- QUESTION 9. ----------
// Conditional Statements part 3 of 3
// Create a variable "randomNum" to be a random number generator that randomly returns either the number 1, 2, or 3 (you can use this resource to help you solve how to do this part: https://www.w3schools.com/js/js_random.asp). Now let's make a "Magic 8 Ball" using if elseif else that returns a different phrase for each of the three possible numbers.
// If your random number is 1, console.log the phrase "It is certain.".
// If it is 2, console.log "Perhaps.".
// If it is 3, console.log "Absolutely not.".
// STRETCH GOAL: Complete Q9 using a switch statement instead of if elseif else.

// PUT YOUR CODE HERE
let randomNum = Math.floor(Math.random() * 3);
if (randomNum === 1) {
  console.log("It is certain.");
} else if (randomNum === 2) {
  console.log("Perhaps.");
} else console.log("Absolutely not.");
// Don't forget your console.logs!

// ---------- QUESTION 10. ----------
// Math calculations part 1 of 5
// Declare a variable named "exampleNum".  Give it the value of a floating point number with 4 decimal places.  Using a Number method round it to the nearest two decimal place. Example if the number is 21.4572, exampleNum should become 21.46.
// STRETCH GOAL: Achieve the same results as Q10 using Math methods instead of Number methods. HINT: you may need to alter the variable over a series of calculations/method uses.

// PUT YOUR CODE HERE
let exampleNum = 0.101;
exampleNum = exampleNum.toFixed(2);

// Don't forget your console.logs!
console.log(exampleNum);

// ---------- QUESTION 11. ----------
// Math calculations part 2 of 5
// Declare two variables named "stringNum" and "mathNum".  Assign stringNum a STRING of numbers and mathNUM numbers.  Create a third variable named "answer11" and have it multiply stringNum and mathNum.  Remember to convert your string in order for it to properly calculate!

// PUT YOUR CODE HERE
let stringNum = "2";
let mathNum = 1;
let answer11 = stringNum * mathNum;

// Don't forget your console.logs!
console.log(answer11);

// ---------- QUESTION 12. ----------
// Math calculations part 3 of 5
// Declare a variable named "diameter" and assign it an integer value. Through a series of math calculations and variables, calculate the "radius" (which is half the diameter), the "circumference" (which is 2 multiplied by the Math value pi, multiplied by the radius) and the "area" (which is the Math value pi, multiplied by the radius squared).

// PUT YOUR CODE HERE
let diameter = 8;
let radius = diameter / 2;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius ** 2;

// Don't forget your console.logs!
console.log("Radius:", radius);
console.log("Circumference:", circumference);
console.log("Area:", area);

// ---------- QUESTION 13. ----------
// Math calculations part 4 of 5
// Let's make a useful math problem - create a tip calculator! Declare two variables called "billTotal" and "tipPercentage". Assign billTotal a floating point number with two decimal places. Assign tipPercentage a floating point number between 0.1 and 0.9. Create a third variable called "tip" that will multiply tipPercentage and billTotal then use the addition assignment operator to add that amount back to billTotal. Example: if our bill 35.75 and we want to leave a 20% tip (0.2) our new billTotal should come out to 42.90.

// PUT YOUR CODE HERE
let billTotal = 31.45;
let tipPercentage = 0.15;
let tip = tipPercentage * billTotal;
billTotal += tip;

// Don't forget your console.logs!
console.log("Bill total with tip:", billTotal.toFixed(2));

// ---------- QUESTION 14. ----------
// Math calculations part 5 of 5
// We don't always deal with measurements (like in question 12) or currency (like in the last question).  Let's work with time now.  Days are 24 hour increments, so we want to see how many hours beyond an even number of days it is until vacation!  Declare a variable called "totalHourstoWait" and assign it any integer number greater than 24 that you want. The declare a variable called "days" and divide totalHourstoWait by 24. Don't forget to round down or exclude any decimals from this total.  Next, declare a variable "extraHours" and use the modulo operator to find out how many hours beyond the number of days you'll still need to wait until vacation.  Finally, console.log a template literal phrase that lets you know how many days and hours you have to wait.  Example: if totalHourstoWait is 54, days should be 2, and extraHours should be 6 (because 2 days and 6 hours is 54 hours) so your console log should result in something like "2 days and 6 hours until vacation!".

// PUT YOUR CODE HERE
let totalHourstoWait = 30;
let days = Math.floor(totalHourstoWait / 24); // Round down to whole days
let extraHours = totalHourstoWait % 24;
// Don't forget your console.logs!
console.log(+days+ " day and " +extraHours+ " hours until vacation!");

// ---------- QUESTION 15. ----------
// Student's choice!
// Look back at the past 14 questions.  Which one did you have the hardest time with? Now create a question of your own based on the same principle. Include in your comments why you made this question for yourself and how you solved it.

// I chose it because it seems to me that there might be more bugs and errors in the conditions, that's why I tried to create this question. I like to find vulnerabilities in code and solve vulnerability issues.

/*What grade we can have at school? (Exmp. A,B,C,D,F).

Write code determines a letter grade based on a numerical grade.
Sets a "grade" variable - value can be changed.
Evaluates grade using conditional statements (IF ELSE statement).
Output:

The code prints the determined letter grade to the console.

Example: With grade = 85, the output would be: Grade = B

Use double selection (IF ELSE).
If (criteria) 
  {Do this if criteria result is True}
  else 
    {Do this if criteria result is False}
Start - Do something - Criteria Condition - True - DO this (Has own Sequence). False - do this (Has own sequence) - Continue with main sequence - end.
*/

// PUT YOUR CODE HERE
let grade = 100;
if (grade >= 90) {
  console.log("Grade === A")
}
  else if (grade >= 80) {
    console.log("Grade === B");
  }
    else if (grade >= 70) {
      console.log("Grade ==== C");
    }
      else if (grade >= 60) {
        console.log("Grade === D");
      } 
        else {
          console.log("Grade === F");
        }
// Don't forget your console.logs!
