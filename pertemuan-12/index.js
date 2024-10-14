// String Literals, Arrow Function & Default Parameter

// 1. String Literals
let fullName = "Grace Allyn";
let umur = 19;
let address = "Manado";

let kalimat = "Halo, Nama saya " + fullName + ", umur saya " + umur + " tahun dan saya tinggal di " + address;
console.log(kalimat);

// menggunakan back tick
let kalimat2 = `Halo, Nama saya ${fullName}, umur saya ${umur} tahun dan saya tinggal di ${address}.`
console.log(kalimat2)

// 2. Arrow Function
const sayGreetings = () => {
    return `Hello, My Name is ${fullName}.`;
};
console.log(sayGreetings("Grace Allyn"));

// secara implisit memiliki return value. berlaku jika hanya satu baris kode.
const sayGreetings2 = () => `Hello, My Name is ${fullName}.`;
console.log(sayGreetings("Grace Allyn"));

// Arrow function pada IIFE
let output = (() => "Hello")();
console.log(output);

// Arrow function pada callback
let numbers = [1,2,3,4,5];
let output2 = numbers.map((item) => item);
console.log(output2);


// 3. Default Parameter
const sayGreetings3 =(fullName) => {
    if (fullName === undefined){
        fullName = "John Doe";
    }
    if (age === undefined){
        age = 30;
    }
    if (address === undefined){
        address = "Manado";
    }
    console.log(`Hello, Nama saya ${fullName}, Umur saya ${age} tahun dan saya tinggal di ${address}.`)
};
sayGreetings3();

const sayGreetings4 = (fullName = "Grace Allyn", age = 19, address = "Manado") =>{
    console.log(`Hello, Nama saya ${fullName}, Umur saya ${age} tahun dan saya tinggal di ${address}.`)
};
sayGreetings4();