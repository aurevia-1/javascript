

// Chapter 1: Alerts
alert("Welcome to JavaScript!");



// Chapter 2: Variables for Strings
let greeting = "Hello, user!";
alert(greeting);




// Chapter 3: Variables for Numbers
let userAge = 18;
let futureAge = userAge + 5;
console.log("Future Age:", futureAge);




// Chapter 4: Variable Names Legal and Illegal
let user_name = "Ali";
let $price = 100;
let age1 = 25;




// Chapter 5: Math Expressions – Familiar Operators
let a = 8, b = 2;
alert("Addition: " + (a + b));
alert("Subtraction: " + (a - b));
alert("Multiplication: " + (a * b));
alert("Division: " + (a / b));
alert("Modulus: " + (a % b));



// Chapter 6: Math Expressions – Unfamiliar Operators
let num = 10;
num++;
alert("After num++: " + num);
--num;
alert("After --num: " + num);



// Chapter 7: Math Expressions – Eliminating Ambiguity
let result1 = (2 + 3) * 4;
let result2 = 2 + (3 * 4);
console.log("Result 1:", result1);
console.log("Result 2:", result2);



// Chapter 8: Concatenating Text Strings
let userName = "Alex";
let greet = "Hello, " + userName + "!";
alert(greet);



// Chapter 9: Prompts
let name = prompt("Enter your name:");
alert("Welcome " + name + "!");



// Chapter 10: if Statements
let password = prompt("Enter password:");
if (password === "letmein") {
  alert("Access granted");
}



// Chapter 11: Comparison Operators
let x = 10, y = 5;
alert("x > y: " + (x > y));
alert("x < y: " + (x < y));
alert("x === y: " + (x === y));
alert("x !== y: " + (x !== y));


// Chapter 12: if...else and else if Statements
let guess = +prompt("Guess a number:");
if (guess < 7) alert("Too low");
else if (guess > 7) alert("Too high");
else alert("Correct!");



// Chapter 13: Testing Sets of Conditions
let age = 20;
let hasID = true;
if (age > 18 && hasID) {
  alert("You may enter");
}



// Chapter 14: if Statements Nested
let username = prompt("Enter username:");
let pass = prompt("Enter password:");
if (username === "admin") {
  if (pass === "1234") {
    alert("Welcome admin");
  } else {
    alert("Wrong password");
  }
} else {
  alert("Unknown user");
}




// Chapter 15: Arrays
let fruits = ["apple", "banana", "mango", "orange", "grape"];
alert("Third fruit is: " + fruits[2]);




// Chapter 16: Arrays – Adding and Removing Elements
fruits.push("kiwi");
fruits.shift();
console.log("Updated fruits:", fruits);




// Chapter 17: Arrays – Removing, Inserting, and Extracting Elements
fruits.splice(1, 1, "peach", "plum");
console.log("Spliced fruits:", fruits);




// Chapter 18: for Loops
for (let i = 0; i < fruits.length; i++) {
  alert("Fruit: " + fruits[i]);
}




// Chapter 19: for Loops – Flags, Booleans, array length, and breaks
let search = prompt("Enter fruit name to search:").toLowerCase();
let found = false;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].toLowerCase() === search) {
    found = true;
    break;
  }
}
alert(found ? "Found" : "Not found");



// Chapter 20: for Loops Nested
let firstNames = ["Cool", "Fast", "Big"];
let lastNames = ["Bear", "Tiger", "Lion"];
for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    console.log(firstNames[i] + " " + lastNames[j]);
  }
}
