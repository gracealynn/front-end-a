// IIFE & Callback Function
// 1. IIFE (Immediately Invoked Function Expression)
// a. No parameter & argument & return value
// (function (){
//     console.log("Hello World!!!"); //code
// })();
// b. With parameter & argument & return value
// let output = (function (fullName){
//     return "Hello" + fullName;
// })("John Doe");

// 2. Callback Function 
// a. No parameter & argument & return value
// function sayHello(callback){
//     callback();
// }
// sayHello(function (){
//     console.log("hello world");
// });

// b. With parameter, argument, return value
function sayHello(callback){
let result = callback("John Doe");
    return result;
}
let output = sayHello(function (fullName){
    return "Hello " + fullName;
});
console.log(output);