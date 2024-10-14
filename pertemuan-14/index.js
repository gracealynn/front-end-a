// Destructuring

let sayur = ["Bayam", "Kangkung", "Sawi"]

let sayur1 = sayur[0];
let sayur2 = sayur[1];
let sayur3 = sayur[2];

console.log(sayur1);
console.log(sayur2);
console.log(sayur3);

// Destructuring dengan mengambil sebagian item (Array & Object)

let [namaDepan, , namaBelakang, , matkul] = ["Grace", "A", "Bindosano", "Matkul", "Front-End"];

console.log(namaDepan); // Output: Grace
console.log(namaBelakang); // Output: Bindosano
console.log(matkul); // Output: Front-End

// Destructuring dengan menggunakan default value (Array & Object)

let orang = {
    nama: "Grace",
    umur: 19,
  };
  
  let { nama, umur, matakuliah = "Front-End"} = orang;
  
  console.log(nama); // Output: Grace
  console.log(umur); // Output: 19
  console.log(matakuliah); // Output: Front-End

// Destructuring dengan menggunakan rest operator (Array & Object)

const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;
console.log(first);
console.log(rest);