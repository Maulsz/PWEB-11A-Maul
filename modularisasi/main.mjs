import { sapa } from "./config.mjs";
import { rumusFisikaSederhana } from "./config.mjs";

// Panggil/Akses Array Sapan dengan Bracket Notation ([])
console.log(sapa()[0]("Maul"));

const isiSapa = sapa()[1]("Maul");

console.log(isiSapa);

// Panggil/Akses Array dengan Destructuring
const [pagi, siang, sore, malam, pencapaian] = sapa();
console.log(sore("Maul"));
console.log(malam("Maul"));

console.info(pencapaian("Maul", "Juara Tidur Internasional"));

console.info(
  "============================================================================================",
);

// Panngil/Akses Object dengan Dot Notation (.)
console.log(rumusFisikaSederhana().kecepatan(10, 20));

// Panngil/Akses Object dengan Square Bracket ([])
console.log(rumusFisikaSederhana()["jarak"](20, 10));

// Simpan Di Variable Doeloe
const cariWaktu = rumusFisikaSederhana()["waktu"];
console.log(cariWaktu(20, 10));

// Akses dengan destructuring object
const { kecepatan, jarak, waktu, massaJenis, gaya } = rumusFisikaSederhana();

console.log(massaJenis(20, 10));
console.log(gaya(30, 20));
