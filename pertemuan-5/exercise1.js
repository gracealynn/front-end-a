function BMI(){
    berat = 60;
    tinggi = 1.5;
    bmi = berat / (tinggi*tinggi);
    console.log(bmi);
}
BMI();

function BMI(berat, tinggi){
    return berat / (tinggi * tinggi);
}
let output = BMI(60,1.5);
console.log(output);