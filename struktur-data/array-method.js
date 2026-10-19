// ==========================================
// METHOD YANG ADA DI ARRAY JAVASCRIPT
// ==========================================

// Reverse => Method yang digunakan untuk mengembalikan nilai array
const zubair = Array.from("ZUBAIR");
console.info("Sebelum di reverse");
console.log(zubair);

const zubairReverse = zubair.reverse();
console.info("Setelah di reverse");
console.log(zubairReverse);

// Sort => Method yang digunakan untuk mengurutkan nilai array, defaultnya ascending (A ke Z)
const dataSiswa = ["Cesar", "Ahmad", "Baihaqi"];
console.info("Sebelum Diurutkan");
console.log(dataSiswa);

const dataSiswaSort = dataSiswa.sort();
console.info("Setelah Diurutkan");
console.log(dataSiswaSort);

// Map => Method untuk mengubah atau memodifikasi setiap elemen array, hasilnya jadi array baru
let angka = [1, 2, 3];
console.info("Sebelum di map");
console.log(angka);

// map() menerima sebuah function sebagai argumen. Function yang diberikan itu disebut callback function.
// Contoh di bawah adalah pada bagian (num) => num * 2
// Itu adalah sebuah function. Function itu dikirim ke .map() supaya dijalankan untuk setiap elemen array.

const angkaDikaliDua = angka.map((num) => num * 2);
console.info("Setelah di map (dikali 2)");
console.log(angkaDikaliDua); // Output: [2, 4, 6]

// Ada tiga cara penulisannya
// Cara 1 — Arrow function
// const hasil = harga.map((nilai) => {
//   return nilai + 5000;
// });

// Cara 2 — Function biasa
// const hasil = harga.map(function (nilai) {
//   return nilai + 5000;
// });
// Hasilnya sama. Callback-nya menggunakan function expression biasa.

// Cara 3 — Function yang sudah dibuat
// function tambahPajak(nilai) {
//   return nilai + 5000;
// }
// const hasil = harga.map(tambahPajak);
// Function dibuat lebih dahulu, kemudian nama function diberikan ke .map().
// Ada hal penting pada cara ketiga: kita menulis tambahPajak, bukan tambahPajak().
// tambahPajak berarti memberikan function-nya.
// tambahPajak() berarti langsung memanggil function tersebut.
// .map() membutuhkan function yang bisa dipanggil untuk setiap elemen array.
// Kalau lu menambahkan tanda kurung begitu saja, lu justru menjalankan function-nya terlebih dahulu.

// Filter => Method untuk menyaring elemen array berdasarkan kondisi tertentu, hasilnya jadi array baru
let nilaiSiswa = [60, 70, 75, 80, 90, 95, 99];
console.info("Sebelum di filter");
console.log(nilaiSiswa);

const nilaiLulus = nilaiSiswa.filter((nilai) => nilai >= 75);
console.info("Setelah di filter (nilai >= 75)");
console.log(nilaiLulus); // Output: [75, 80, 90]

// Join => Method untuk menggabungkan semua elemen array menjadi satu string tunggal
const kata = ["Belajar", "JS", "Seru"];
console.info("Sebelum di join");
console.log(kata);

const kalimat = kata.join(" "); // Pemisah menggunakan spasi
console.info("Setelah di join"); // Isi array pada variable kata, di gabung semua
console.log(kalimat); // Output: "Belajar JS Seru"

// apakah bisa function disimpan didalam element array?
// const arrayFunct = [
//   (nama) => "Hello " + nama,
//   () => "Miaw 2",
//   function halo() {
//     return "Miaw 3";
//   },
// ];

// const [functSatu, functDua, functTiga] = arrayFunct;
// console.log(functSatu("Miaw"), functDua(), functTiga());

console.log("\n");

// Latihan DIagnostik/Mandiri Dari GPT
// Kita Punya data:
console.info("====== Latihan Diagnostik/Mandiri GPT ======");
const harga = [10000, 20000, 30000];
console.log("Sebelum Di tambah/Map");
console.log(harga);
// Tugasnya: buat array baru yang setiap harganya sudah ditambah Rp5.000, tanpa mengubah array harga yang asli.
// Hasil yang diharapkan = [15000, 25000, 35000];

const tambahLimaRibu = harga.map((nilai) => {
  return nilai + 5000;
});
// Parameter nilai dalam map di arrow function, bukanlah variable harga, tapi
// harga adalah nama variabel yang menyimpan array.
// Sementara nilai adalah parameter callback yang menerima nilai dari setiap elemen array secara bergantian.

console.log("Setelah Di tambah/Map");
console.log(tambahLimaRibu);
