// class task

// let subject1 = parseFloat(prompt("Enter Your Marks For English"));
// let subject2 = parseFloat(prompt("Enter Your Marks For Math"));
// let subject3 = parseFloat(prompt("Enter Your Marks For Urdu"));
// let subject4 = parseFloat(prompt("Enter Your Marks For Physics"));

// let totalmark = 500;

// let obtainedmark = subject1+subject2+subject3+subject4;

// let persentage = (obtainedmark / totalmark)*100;

// console.log("Total Mark =" + totalmark);

// console.log("obtainedMark =" + obtainedmark);

// console.log("Persentage =" + persentage.toFixed(2)+"%");

// class task

// prduct price 20% discount task 

// let price  =  parseFloat(prompt("Enter your product real price..."));

// let discount = price * 0.2

// let finalprice = price - discount

// console.log ("Real Price =" + price)

// console.log ("Discount Price =" + discount)

// console.log ("Final Price =" + finalprice)

// Home Task 

// let product1 = parseFloat(prompt("Enter your price product 01..."));
// let product2 = parseFloat(prompt("Enter your price product 02..."));
// let product3 = parseFloat(prompt("Enter your price product 03..."));


// let total = product1 + product2 + product3

// let discount = parseFloat(prompt("Enter your discount for products prices...."));

// let discountamount = (total * discount) / 100;

// let finalprice = (total - discountamount)



// console.log("Total Price =" + total.toFixed(2) + "Rs")
// console.log("Discount Price =" + discountamount.toFixed(2) + "Rs")
// console.log("Final Price =" + finalprice.toFixed(2) + "Rs")

// home task 

// let product1 = parseFloat(prompt("Enter price product 01... "));
// let quantity1 = parseFloat(prompt("Enter product 01 quantity..."));

// let prduct2 = parseFloat(prompt("Enter price product 02...."));
// let quantity2 = parseFloat(prompt("Enter product 02 quantity..."));

// let product3 = parseFloat(prompt("Enter price product 03..."));
// let quantity3 = parseFloat(prompt("Enter product 03 quantity.."));


// let total1 = product1 * quantity1;
// let total2 = prduct2 * quantity2;
// let total3 = product3 * quantity3;

// let total = total1 + total2 + total3

// let discount = parseFloat(prompt("Enter discount parsentage"));

// let discountamount = (total * discount) / 100;

// let finalprice = total - discountamount


// console.log("product 01 price =" + total1.toFixed(2) + "Rs")
// console.log("product 02 price =" + total2.toFixed(2) + "Rs")
// console.log("product 03 price =" + total3.toFixed(2) + "Rs")
// console.log("Total Price =" + total.toFixed(2) + "Rs")
// console.log("Discount Price % =" + discountamount.toFixed(2) + "Rs")
// console.log("Final Price =" + finalprice.toFixed(2) + "Rs")

// Fun park 

// let age = parseFloat(prompt("Enter your age"));
// let  studentcard = prompt("do you have a studentcard yes/no?")
// let hasstudent = studentcard.toLocaleLowerCase() === "yes";

// if(age === 18){
//     console.log("Allowed")
// }else if(age >= 14 && hasstudent){
//    console.log("Allowed")
// }else if(age < 10){
//     console.log("not Allowed")
// }
// else{
//     console.log("Special Case: Go to help desk")
// }

// Ticket Show

// let age = parseFloat(prompt("Enter Your age..."));
// let studentcard = prompt("Do you have a student card yes/no?");
// let show = prompt("Enter your show timing ?");
// let hasstudent = studentcard.toLowerCase === "yes";
// let showtime = show.toLowerCase();

// if((age >= 18 || hasstudent) && showtime === "evening"){
//     console.log("Allow Evening show")
// }else if(age < 18 && !hasstudent && showtime === "evening"){
//     console.log("Not Allow the show")
// }else if(showtime === "morning" || showtime === "afternoon"){
//     console.log("Allow for a day show")
// }else{
//     console.log("chal nikal baaa yahan sa nikal")
// }


// Task home class 6

// let student = prompt("Enter your name ?");
// let mark = +prompt("Enter your marks ?");

// let grade = 
// mark >= 90 ? "A grade" :
// mark >= 80 ? "B grade" :
// mark >= 70 ? "C grade" :
// mark >= 60 ? "D grade" :
// "Fail";

// let message =  `student name:${student}
// Grade:${grade}
// ${grade !== "Fail" ? "Congratulations! You passed." : "Sorry, you failed. Better luck next time!"}`;

// console.log(message)


// task home product ......

// let p1 = +prompt("Enter your product price?")
// let q1 = +prompt("Enter your product Quality?")
// let p2 = +prompt("Enter your product price?")
// let q2 = +prompt("Enter your product Quality?")

// let total1 = p1 * q1
// let total2 = p2 * q2
// let total = total1 + total2;

// let discount = +prompt("Enter your discount percentage!")
// let discountamount = (total * discount)/100
// let finalprice = total-discountamount

// console.log(`Total price :${total.toFixed(2)} Rs`)
// console.log(`discount amount : ${discountamount.toFixed(2)} Rs`)
// console.log(`Final price : ${finalprice.toFixed(2)} Rs`)
// console.log(`${finalprice >= 5000 ? "You Got A Big Order" : "Best of Fluck"}`)


//  Practice 3: Eligibility for Movie

// let age = +prompt("Enter Your Age ?");
// let studentcard = prompt("Enter your Student Card (Yes/No)").toLowerCase();
// let showtime = prompt("Enter Your Show Time (morning/evening/afternoon)").toLowerCase();

// let hascard = studentcard === "yes";

// if((age >= 18 || hascard)&& showtime === "evening"){
//     console.log("Enjoy Your Movie");
// }else if(showtime === "morning" || showtime === "afternoon"){
//     console.log("Enjoy for a day movie time")
// }else{
//     console.log("Not Eiligible for movie")
// }


// test + revision

let studentname = prompt("Enter Your Name");
let studentage  = +prompt("Enter Your Age");
let  studentcard = prompt("enter Your Studentcard Yes/No").toLowerCase();
let showtime = prompt("enter Your Show Time").toLowerCase();
let hascard = studentcard == "yes"


let movietime = "";
if((studentage >= 18 || hascard) && showtime === "evening"){
       movietime = "Allow for evening movie show";
}else if (showtime === "morning" || showtime === "afternoon"){
       movietime = "Allow for day movie show";
}else{
    movietime = "not eligible for movie show"
}


let p1 = +prompt("enter your product price 01");
let q1 = +prompt("enter your product quatity 01");
let p2 = +prompt("enter your product price 02");
let q2  = +prompt("enter your product quantity 02");

let total1 = p1 * q1
let total2 = p2 * q2
let total = total1 + total2;
let discount = +prompt("Enter Your discount persentage %");
let discountamount = (total * discount)/100
let finalprice = total - discountamount;
let bigorder = finalprice >= 5000 ? "you purches a big order" : "thanks for purchesing";


let studentmark = +prompt("Enter Your marks");
let mark = 
studentmark >= 90 ? "A grade" :
studentmark >= 80 ? "B grade" :
studentmark >= 70 ? "C grade" :
studentmark >= 60 ? "D grade" : "fail";
let result = mark !== "fail" ? "congrate you are a passed" : "sorry try again";


let fruit = ['apple','banana','mango','lichi'];
fruit.push('grapes');
fruit.shift()

console .log(
`
------  Next ---------

student name : ${studentname}
student age : ${studentage}
Movie Time : ${movietime}


------  Next ---------

product price total : ${total.toFixed(2)}
Discountamount : ${discountamount.toFixed(2)}
final price : ${finalprice.toFixed(2)}
${bigorder};

------  Next ---------

student mark : ${mark}
Grade : ${studentmark}
Final Result : ${result}

------  Next ---------

Fruit Name : ${fruit}

`
)

