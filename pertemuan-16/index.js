// Asynchronous JS

// // Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yg memakan waktu yang lama."); //blocking
// console.log("Proses 4");

// Asynchronous -> multi-thread -> non-blocking
// // 1. Parallel
// setTimeout(() => {
//     console.log("Process 1");
// }, 5000);
// console.log("Proses 2");
// setTimeout(() => {
//     console.log("Process 3");
// }, 3000);
// console.log("Proses 4");

// // 2.Concurrent
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);


// // Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject ("Gagal");
//     }
// });

// // Pakai promise
// // 1. then - catch
// newPromise
//  .then((result) => {
//     console.log(result);
//  })
//  .catch((error) => console.log(error));

//  // 2. Async - Await
//  // selalu digunakan pada fungsi

//  const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//  };

