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
let angka;
console.info("Sebelum di map");
console.log(angka);

const angkaDikaliDua = angka.map((num) => num * 2);
console.info("Setelah di map (dikali 2)");
console.log(angkaDikaliDua); // Output: [2, 4, 6]

// Filter => Method untuk menyaring elemen array berdasarkan kondisi tertentu, hasilnya jadi array baru
let nilaiSiswa;
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
console.info("Setelah di join");
console.log(kalimat); // Output: "Belajar JS Seru"

// apakah bisa function disimpan didalam element array?
const arrayFunct = [
  (nama) => "Hello " + nama,
  () => "Miaw 2",
  function halo() {
    return "Miaw 3";
  },
];

const [functSatu, functDua, functTiga] = arrayFunct;
console.log(functSatu("Miaw"), functDua(), functTiga());
