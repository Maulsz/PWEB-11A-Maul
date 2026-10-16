import { mahasiswa, hitungRataRata, tentukanPredikat } from "./config.mjs";

console.log("DATA NILAI MAHASISWA");

mahasiswa.forEach((item) => {
  // parameter foreach berisi item yang mewakili variable mahasiswa
  const predikat = tentukanPredikat(item.nilai); // item di sini mewakili variable mahasiswa
  console.log(`${item.nama}, ${item.nilai} dengan Predikat ${predikat}`);
});

const rataRata = hitungRataRata(mahasiswa);
console.log("==========");
console.log(`Rata Rata nilai: ${rataRata}`);
