// Buat 2 function dalam satu file bernama config.mjs, function pertama return nya adalah array dengan 5 elemen, tiap elemen/index adalah function yang berkaitan dengan nama funciton tersebut. function kedua returnya adalah object dengan 5 property, tiap property adalah function yang berkaitan dengan nama property

// Panggil kedua function tersebut di dalam satu file bernama main.mjs lalu panggil semua function yang ada di dalam kedua function tersebut menggunakan masing masing cara pemanggilan array atau objek.
// HARUS PAKAI ARROW FUNCTION

export function sapa() {
  // array
  const kumpulanRumusSegitiga = [
    (nama) => {
      return "Selamat Pagi " + nama;
    },
    (nama) => {
      return `Selamat Siang ${nama}`;
    },
    (nama) => {
      return `Selamat Sore ${nama}`;
    },
    (nama) => {
      return "Selamat Malam " + nama;
    },
    (nama, capaian) => {
      return `Selamat ${nama}! Telah Berhasil Meraih ${capaian}!`;
    },
  ];

  return kumpulanRumusSegitiga;
}

// console.info(
//   "====== Array(PANGGIL PAKAI SQUARE BRACKET/BRACKET NOTATION ([])) ========",
// );
// console.log(sapa()[1]("Maul", "Software Enginer Terbaik Angkatan Ke-5 Iqis"));
// console.info("======================");
// ===========================================================================
// console.info("====== Array(Akses dengan destructuring) ========");
// const [pagi, siang, sore, malam, pencapaian] = sapa();
// console.log(
//   pencapaian("Maul", "Juara Satu Lomba Tidur International Di Jepang"),
// );
// console.info("======================");
// ===========================================================================

export function rumusFisikaSederhana() {
  const kumpulanRumusFisikaSederhana = {
    kecepatan: (jarak, waktu) => jarak / waktu + " km",
    jarak: (kecepatan, waktu) => kecepatan * waktu + " km",
    waktu: (kecepatan, jarak) => kecepatan / jarak + " jam",
    massaJenis: (massa, volume) => massa / volume + " g/cm³",
    gaya: (massa, percepatan) => massa * percepatan + " N/Newton",
  };
  return kumpulanRumusFisikaSederhana;
}

// Akses Menggunakan
