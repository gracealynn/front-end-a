// JavaScript Object
// Object memiliki properti dan nilai.
// Array memiliki index dan nilai.

//// Deklarasi Object
// Object Literal
let john = {
    firstName: "John",
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreeting: function(){
        console.log("Hello my name is " + this.firstName);
    },
    address:{
        street: "Jl. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
        postalCode: 95371
    },
};
console.log(john);

// Mangakses properti dalam object
// 1. Dot notation
console.log(john.firstName); //John
console.log(john.age); //30
john.age = 31; //mengganti nilai
console.log(john);
john.job = "Teacher" //tambah properti baru
console.log(john.job);

// 2. Bracket notation
console.log(john["isMarried"]); // true
john["nationality"] = "Indonesian"; //tambah properti dan nilai baru
console.log(john);

// Object Method
john.sayGreeting();

// Object inside object
console.log(john.address.city); //Minahasa Utara

// Delete properti dalam object
delete john.grade;
console.log(john);

// Conditional
// 1. If - Else
// Jika suhu hari ini lebih dari atau samadengan 37
// tampilkan suhu hari ini panas
// jika tidak tampilkan suhu hari ini dingin

let temp = 37;
if (temp >= 37){
    console.log("Suhu hari ini panas")
}else{
    console.log("Suhu hari ini tidak panas")
}

// 2. if - else if - else
// Jika 
let grade = 100;
if(grade >= 80 && grade <= 100){
    console.log("A")
}else if(grade >= 70 && grade<80){
    console.log()
}