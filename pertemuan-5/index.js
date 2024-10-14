// JavaScript Function

// Cara 1. Function Declaration
// function greetings(){
//     console.log("Hello World!!!");
// }
// greetings();

// // Cara 2. Function Expression
// let greetings2 = function (){
//     console.log("Hello World!!!");
// }
// greetings2();

// Parameter & Argument (Input) & Return (Output)

// // Cara 1.
// //                  parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //                      Argument
// let output = greetings1("John Doe");
// console.log(output);

// // Cara 2.
// let greetings2 


// Function Hoisting
// Cara 1.
let output = greetings1("John Doe");
console.log(output);

function greetings1(fullName){
    return "Hello " + fullName;
}

// Global Scope & Local Scope

let x = 10; // global scope

function foo(){
    let y = 20; // local scope
    console.log(x); //10
    console.log(y); //20
    if (y>x){
        let z = 30; 
        console.log(z);
    }
    // console.log(z); is not define bcuz of local block
    // anything inside a p
}

