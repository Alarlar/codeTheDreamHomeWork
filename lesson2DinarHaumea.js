//--------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!  








//---------- OVERVIEW AND INSTRUCTIONS ----------

//# JavaScript Functions
// This is the coding assigment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Encapsulate code with Functions
//   - Pass Information Into Functions
//   - Arrow Functions

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. You can output the return value of a function in a similar way to how you output variable values last week.  To use a function in a console.log you invoke/call the function as part of the console log like this: 

  //  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".


// ---------- QUESTION 1. ----------
//Create a function titled 'messageString'.  Inside the function,  declare a variable named 'message' and assign it the string "Welcome to Code the Dream".  Return the 'message' variable.

// EXAMPLE LOG:
//    console.log("Q1: ", messageString());
// EXAMPLE OUTPUT:
//    Q1: Welcome to Code the Dream!

//PUT YOUR CODE HERE
function messageString() {
  //Here I am declaring and assingning the string value
  let message = "Welcome to Code the Dream";
  return message;
}
//Here I am calling fucntion
console.log("Q1: ", messageString());


// ---------- QUESTION 2. ----------
// Create a function called 'month'.  Inside the function, declare a variable named 'today' that uses the Date object.  Your function should then return only the month of the 'today' variable.  You can return the month as a number or, if you'd like to stretch your skills, convert it to the word form.

// EXAMPLE LOG:
//    console.log("Q2: ", month());
// EXAMPLE OUTPUT: (Will be different for each class but should be the current month.  For example if you're doing this assignment in January...)
//    Q2: 01  
//    stretch goal should result in: 
//    Q2: January

//PUT YOUR CODE HERE
function month() {
  let today = new Date();
  let monthNumber = today.getMonth();
  let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let monthName = monthNames[monthNumber - 1];
  return monthName;
}
console.log("Q2: ", month())

// ---------- QUESTION 3. ----------
// Create a function called 'combineStrings'.  Inside the function, declare two variables named 'string1' and 'string2'.  Assign them the strings 'Good' and 'Evening' respecitvely.  Return the two strings concatenated with a space in between.

// EXAMPLE LOG:
//    console.log("Q3: ", combineStrings());
// EXAMPLE OUTPUT:
//    Q3: Good Evening

//PUT YOUR CODE HERE
function combineStrings() {
  let string1 = "Good";
  let string2 = "Evening";
  return `${string1} ${string2}`;
}
console.log("Q3: ",combineStrings());

// ---------- QUESTION 4. ----------
// Let's start working with parameters.  Create a function called 'useParams' that takes one parameter and returns that parameter with the all letters capitalized.

// EXAMPLE LOG:
//    console.log("Q4: ", useParams("hello"));
// EXAMPLE OUTPUT:
//    Q4: HELLO

//PUT YOUR CODE HERE
function useParams(greeting) {
  let capitalizedGreeting = greeting.toUpperCase();
  return capitalizedGreeting;
}
let word = "hello";

console.log("Q4: ", useParams(word));

// ---------- QUESTION 5. ----------
// Let's consider how variable can be changed by a function. Create a variable named 'string3' and assign it the string "What I started with".  Create a function called 'changeWords' that takes one parameter, change the parameter to the string value "I changed this" and return the parameter.  This is NOT best practice (changing variable values inside functions).  This question demonstrates how console logging the same variable can give you two different values for that variable.  Be sure you discuss this concept with mentors!

// EXAMPLE LOGS:
//    console.log("Q5: ", changeWords(string3));
//    console.log("Q5 variable alone: ", string3);
// EXAMPLE OUTPUTS:
//    Q5: I changed this
//    Q5 variable alone: What I started with

// PUT YOUR CODE HERE
let string3 = "What I started with";
function changeWords(parametr) {
  return parametr = "I changed this";
}
console.log(`Q5:  ${changeWords(string3)}`);

// ---------- QUESTION 6. ----------
// Let's use two parameters now and work with both. Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together). 

// EXAMPLE LOG:
//    console.log("Q6: ", multiplyThese(num1, num2));
// EXAMPLE OUTPUT: (if num1 and num2 are 2 and 5 respectively))
//    Q6: 10

// PUT YOUR CODE HERE
let num1 = 10;
let num2 = 100;
function multiplyThese(num1, num2) {
  return num1 * num2;
}
console.log("Q6: ", multiplyThese(num1, num2));


// ---------- QUESTION 7. ----------
// Building on the last question, create a function called 'getAverage' that takes 2 parameters and returns their average (hint: there is no built-in average operator in JavaScript).  Use the variables (num1 and num2) you created in Question 6 to test your function.  NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//    console.log("Q7: ", getAverage(num1, num2));
// EXAMPLE OUTPUT: (based on num1 and num2 above)
//    Q7: 3.5

// PUT YOUR CODE HERE
function getAverage(num1, num2) {
  average = (num1 + num2) / 2.0;
  return average;
}
console.log("Q7: ", getAverage(num1, num2));

// ---------- QUESTION 8. ----------
// Create a function called 'absDiff' that takes 2 parameters and returns the absolute difference between them. For example, if the first parameter is smaller than the second, the first parameter will be subtracted from the second. If the first parameter is larger than the second, the second parameter will be subtracted from the first. If they are both equal, return the first parameter subtracted by the second.  It's important to consider boundary cases - situations that may change how you expect your code to behave.  For this reason, work with same numbers and negative numbers as well to see if you get your absDiff function to calculate the absolute difference regardless of number type.

// EXAMPLE LOG 1:
//    console.log("Q8 first larger: ", absDiff(29, 5));
// EXAMPLE OUTPUT: (if using the numbers 29 and 5 as in the example log)
//    Q8 first larger: 24
// EXAMPLE LOG 2:
//    console.log("Q8 second larger: ", absDiff(3, 16));
// EXAMPLE OUTPUT: (if using the numbers 3 and 16 as in the example log)
//    Q8 second larger: 13
// EXAMPLE LOG 3:
//    console.log("Q8 same nums: ", absDiff(5, 5));
// EXAMPLE OUTPUT 3: (if using the numbers 5 and 5 as in the example log)
//    Q8 same nums: 0
// EXAMPLE LOG 4:
//    console.log("Q8 neg num: ", absDiff(-6, 5));
// EXAMPLE OUTPUT 4: (if using the numbers -6 and 5 as in the example log)
//    Q8 neg num: 11

// PUT YOUR CODE HERE
function absDiff(num1, num2) {
  // Math.abs() function 
  return Math.abs(num1 - num2);
}
console.log("Q8:  first larger: ",absDiff(29, 5));
console.log("Q8:  second larger:",absDiff(3, 16));
console.log("Q8:  same nums:",absDiff(5, 5));
console.log("Q8:  neg num:",absDiff(-6, 5));

// ---------- QUESTION 9. ----------
// That was a lot of math! Now let's work with strings... Create two variables named 'word1' and 'word2' and assign them any strings you want.  Then create a function called 'biggestStringLength' that takes word1 and word2 as parameters and returns the length of the longer string. If they are of equal length, just return that length.  Stretch your skills by making an empty string and seeing what happens in that situation.

// EXAMPLE LOG:
//    console.log("Q9: ", biggestStringLength(word1, word2));
// EXAMPLE OUTPUT: (if your word1 was 'Code' and word2 was 'Dream')
//    Q9: 5

// PUT YOUR CODE HERE
let word1 = "red";
let word2 = "green";

function biggestStringLength(word1, word2) {
  
  return Math.max(word1.length, word2.length);
}
  /*if (word1.length > word2.length) {
    return word1.length;
  } else if (word2.length > word1.length) {
      return word2.length;
    }   else {
          return word1.length;
      }*/

console.log("Q9: ", biggestStringLength(word1, word2));

// NOTE: ONCE YOU START WORKING ON THE NEXT TWO QUESTIONS, WHEN YOU HIT RUN, YOU'LL HAVE SEVERAL POP-UP BOXES THAT APPEAR BEFORE ALL YOUR CODE WILL COMPLETE RUNNING IN THE CONSOLE.  IF YOU HAVE POP UP BLOCKERS YOU MAY RUN INTO ISSUES.

// ---------- QUESTION 10. ----------
// Let's explore dates now.  Create a variable named 'birthday' and assign it a prompt that will allow you to enter the date of your next birthday into an pop-up box.  Then create a function called 'birthdayCountdown' that takes birthday as a parameter and returns the number of days until your next birthday.  Remember that you may need to instruct the user in the prompt on what format they should use when entering their birthday so you can properly convert the data to something you can use in the function.  CAUTION: 2024 is a leap year!  STRETCH GOAL: As we mentioned in Question 8, you should consider boundary cases. What if the user didn't follow your instructions and put in invalid data? Include in your function a way to verify the data is valid, and handle it (ex. through an error or Alert, etc) if it is invlaid.
// NOTE: If you have pop-up blockers on your web browser, you may run into problems with your prompt/alert.  Be sure you allow pop-ups from replit.com to avoid this.

// EXAMPLE LOG:
//    console.log("Q10: ", birthdayCountdown(birthday));
// EXAMPLE OUTPUT: (if your next birthday was March 15, 2024 and today was February 3, 2024)
//    Q10: 41

// PUT YOUR CODE HERE
  // 1. Ask for the birthday in YYYY-MM-DD format
console.log("Q10: ");

const input = require("readline-sync");

function birthdayCountdown(birthday) {
  
  if (!birthday.match(/^\d{4}-\d{2}-\d{2}$/)) {
    console.log("Invalid Birthday");
  return false;
}

birthday = new Date(birthday);
let today = new Date();

//Set current year or the next year if you already had birthday this year
birthday.setFullYear(today.getFullYear());
  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

let diff = Math.floor((birthday - today) / (1000 * 60 * 60 * 24));

//Check if year is leap year
  if (
(today.getFullYear() % 4 == 0 && today.getFullYear() % 100 != 0) ||
today.getFullYear() % 400 == 0
) {
diff++;
}

  return diff;
}

let birthday = input.question("Please enter your date of birth in the YYYY-MM-DD format:\n");

console.log("Q10: ", birthdayCountdown(birthday));



// ---------- QUESTION 11. ----------
// If we work with dates, we should work with time also.  Create a variable named 'startTime' and assign it a prompt that will allow the user to enter a start time.  Create a variable named 'endTime' and assign it a prompt that will allow the user to enter an end time.  Then create a function called 'timeDifference' that takes startTime and endTime as parameters and returns the number of hours and minutes between the start and end times.  Remember that you may need to instruct the user in the prompt on what format they should use when entering their times so you can properly convert the data to something you can use in the function.  STRETCH GOAL: As we mentioned in Question 8 and 10, you should consider boundary cases. What if the user didn't follow your instructions and put in invalid data? Include in your function a way to verify the data is valid, and handle it (ex. through an error or alert, etc) if it is invlaid.
// NOTE: If you have pop-up blockers on your web browser, you may run into problems with your alerts.  Be sure you allow pop-ups from replit.com to avoid this.

// EXAMPLE LOG:
//    console.log("Q11: ", timeDifference(startTime, endTime));
// EXAMPLE OUTPUT: (if startTime was 12:37pm and endTime was 3:19pm)
//    Q11: 2 hours and 42 minutes

// PUT YOUR CODE HERE
console.log("Q11: ");

function timeDifference(startTime, endTime) {
  // function converting 12 hour format time to 24
  function convertTo24Hour(time) {
    // remove all spaces from 'time' param
    time = time.replace(/\s+/g, "");

    // split time and 'AM/PM'
    let part1 = time.substring(0, time.length - 2);
    let part2 = time.substring(time.length - 2);

    // split hours and minutes
    let timeParts = part1.split(":");

    // convert hours and minutes to number and check if they have valid format
    let hours = parseInt(timeParts[0], 10);
    let minutes = parseInt(timeParts[1], 10);

    if (hours > 12 || hours < 1 || minutes < 0 || minutes > 59) {
      //console.log('Invalid time');
      return null;
    }

    if (part2.toUpperCase() === "PM" && hours !== 12) hours += 12;
    else if (part2.toUpperCase() === "AM" && hours === 12) hours = 0;

    return `${hours < 10 ? "0" + hours : hours}:${minutes}`;
  }

  startTime = convertTo24Hour(startTime);
  endTime = convertTo24Hour(endTime);

  if (startTime === null || endTime === null) {
    return "Invalid time input";
  }

  let start = new Date(`2024-01-01T${startTime}:00`);
  let end = new Date(`2024-01-01T${endTime}:00`);

  if (end < start) {
    end.setDate(end.getDate() + 1);
  }

  // difference in milliseconds
  let diff = end - start;

  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours} hours and ${minutes} minutes`;
}

let startTime = input.question("Enter the start time (HH:MM AM/PM format):\n");
let endTime = input.question("Enter the end time (HH:MM AM/PM format):\n");

console.log("Q11: ", timeDifference(startTime, endTime));


// ---------- QUESTION 12. ----------
// Student's choice! 
// Look back at the past 11 questions.  Which one did you have the hardest time with? Now create a question of your own based on the same principle. Include in your comments why you made this question for yourself and how you solved it.

//Write a program and function that inputs a 4 digit year and outputs the ROMAN numeral year.
//Try to use function and loop , se how different is numeric system looks like. See how computer CPU fast and can do it in seconds.
// PUT YOUR CODE HERE
function toRomanNumeral(year) {
  const numerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let roman = "";

  for (const [numeral, value] of numerals) {
    while (year >= value) {
      roman += numeral;
      year -= value;
    }
  }

  return roman;
}

// Don't forget your console.logs!
console.log("Roman numeral for 2024:", toRomanNumeral(2024));  // Output: MMXXI
console.log("Roman numeral for 1989:", toRomanNumeral(1989));  // Output: MCMLXXXIX
