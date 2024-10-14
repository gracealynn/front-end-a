// 1. IIFE
// let output = (function (berat,tinggi){
//     return berat /(tinggi*tinggi)
// })(60,1.5);
// console.log(output)

// 2. Callback
function bmi(callback){
    let result = callback(60,1.5)
    return result;
}
let output = bmi(function (berat,tinggi){
    return berat / (tinggi*tinggi);
})
console.log(output);