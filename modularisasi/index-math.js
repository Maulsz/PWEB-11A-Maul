import math from "./math.js"; // panggil default import/export dari file math.js

console.log(math().tambah(5, 5)); // pake dot notaion (.)
console.log(math()["kurang"](10, 5)); //menggunakan square bracket ([])

// Destructuring object
const { kali, bagi } = math(); // tanda = artinya, ambil darimana
console.log(kali(10, 5));
console.log(bagi(10, 5));
