// post increment
let a = 10;

let b =a++

console.log(b)
// post decriment 
let c = 15

let d = c--  

console.log(c)

// let firstname = prompt('Enter Your First Name')
// console.log(firstname)

// let Lastname = prompt('Enter Your  Lastname')
// console.log( Lastname)

// let email = prompt('Enter Your email')
// console.log(email)

// let contact = prompt('Enter Your contact')
// console.log(contact)


let subject1 = +prompt("Enter marks for Subject 1:")
let subject2 = +prompt("Enter marks for Subject 2:")
let subject3 = +prompt("Enter marks for Subject 3:")
let subject4 = +prompt("Enter marks for Subject 4:")
let subject5 = +prompt("Enter marks for Subject 5:")

let totalMarks = 500;

let obtainedmark = subject1+subject2+subject3+subject4+subject5

let persentage = (totalMarks / obtainedmark)*100

console.log(persentage)


