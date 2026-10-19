// Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. kalau sama seperti object, lalu object fungsinya map?
// map berfungsi untuk menutupi kekurangan object. Map dapat menggunakan key dengan tipe data apa pun, tidak seperti obejct yang hanya menerima string sebagai key.
// Map = key nya bebas dan value nya bebas
// Object = key nya hanya boleh string dan value nya bebas
// Perbedaan berdasarnya terletak pada key yang digunakan
// KEY KEY KEY KEY KEY KEY KEY KEY KEY. BEDANYA DI KEYYY BUKAN VALUE
// Map biasa digunakan untuk Looping Data

// ========= Method di Map =========
// # Mengelola data
// .set(key, value):
// Menambahkan pasangan data atau memperbarui value jika key sudah ada.
// .get(key):
// Mengambil value berdasarkan key.
// .has(key):
// Mengecek apakah key tersedia. Hasilnya true atau false.
// .delete(key) dan .clear():
// Menghapus satu pasangan berdasarkan key, atau menghapus semua pasangan.

// # Mengambil data
// .keys():
// Mengambil semua key.
// .values():
// Mengambil semua value.
// .entries():
// Mengambil semua pasangan [key, value].

// Ada juga .size, yang menghitung jumlah pasangan data. Tapi ini bukan method—ini adalah property.

// Menggunakan MAP constractor (new Map())
console.info("===== MAP KOSONG =====");
const map = new Map();
console.log(map); // Output: Map(0) {}

console.log("\n"); // ENTER DIKIT

console.info("===== MAP ISI =====");
const mapIsi = new Map([
  [true, "boolean"], // key nya boolean
  [30, "Tiga Puluh"], // key nya number
  [[0, 1], "Array"], // key nya array
  [{ 0: 1, 1: 1 }, "Object"], // key nya object
]); // cara mendeklarasikan map pakai kurung siku ([]) dan untuk buat key dan value atau property nya itu, dengan membuat kurung siku lagi jadi: ([[key, value]])
console.log(mapIsi);

console.log("\n"); // ENTER DIKIT

console.info("===== OBJECT =====");
const object = {
  name: "Ahmad", // name itu adalah string walaupun petik nya tidak kelihatan
  kelas: 10,
};

console.log(object);

console.info("===== PERBEDAAN OBJECT VS MAP =====");
console.log(mapIsi);
console.log(object);

console.log("\n");

// console.info("===== CARA AKSES SALAH SATU PROPERTY DI MAP =====");
// console.log(mapIsi.get(true));
// Menambahkan data/property dalam map menggunnakan methode .set()
console.info(
  "===== Menambahkan data/property dalam map menggunnakan methode .set() ===== ",
);
const data = new Map();
data.set("nama", "Maul");
data.set(1, true);
console.log(data);

console.log("\n"); // ENTER DIKIT

// Mengakses Nilai Yang ada di dalam map ? pakai method .get(key)
console.info("===== AKSES DATA PAKAI .get(key) ===== ");

console.log(data.get("nama")); // "nama" dalam parameter .get adalah key dari map nya
console.log(data.get(1));

console.log("\n"); // ENTER DIKIT

// Menghapus Nilai spesifik yang ada di dalam map? Pakai method .delete(key)
console.info("===== HAPUS DATA PAKAI .delete(key) ===== ");
data.delete(1);
data.delete("nama");
console.log(data); // sisa property yang berisi key: nama dan value: maul

console.log("\n"); // ENTER DIKIT

// Mengecek apakah ada value yang dicari menggunakan .has()
console.info("===== MENGECEK VALUE/KEY/PROPERTY MAP PAKAI .has(key) ===== ");
data.set(1, "Alghazali");
data.set(2, "Maul");
data.set(3, "Irsyad");
data.set(4, "Kaysan");
data.set(5, "Athalla");
console.log(data);

console.log("\n"); // ENTER DIKIT

console.log(data.has(10)); // false: karena tidak ada yang menggunakan key 10
console.log(data.has(2)); // true
console.log(data.has("2")); // false: karena ini key nya string sedangkan di data
console.log(data.has(Number("5"))); // True: Karena "5" dikonversi ke number

console.log("\n"); // ENTER DIKIT

// LATIHAN MANDIRI
console.info("===== IJIN ===== ");

const dataNamaNegara = new Map();
dataNamaNegara.set(1, "Indonesia");
dataNamaNegara.set(2, "Malaysia");
dataNamaNegara.set(3, "Singapore");
dataNamaNegara.set(4, "China");
dataNamaNegara.set(5, "Jepang");
dataNamaNegara.set(6, "Russia");

for (const [key, value] of dataNamaNegara) {
  console.log(value); // hanya akses value nya saja
  // console.log(key); // key nya saja yang di akses
  // console.log(key, value); // akses keduanya
  // bukan karena destructuring membuat .get() tidak diperlukan,
  //  melainkan karena for...of sudah memberikan pasangan key-value secara langsung.
  // Yang terjadi secara konsep:
  // 1. Iterasi pertama menerima pasangan ["A", "Apel"].
  // 2. Destructuring memisahkannya: key berisi "A", sedangkan value berisi "Apel".
  // 3. console.log(key) mencetak "A".
  // 4. Iterasi kedua menerima pasangan ["B", "Banana"] dan mencetak "B".
  // Perhatikan, value tetap tersedia meskipun tidak kita cetak.
  //   Jadi, perbedaan utamanya:
  // - .get(key) untuk mengambil satu value berdasarkan key tertentu.
  // - for...of untuk melakukan iterasi terhadap pasangan-pasangan dalam Map.
  // - [key, value] adalah destructuring yang memisahkan pasangan tersebut menjadi dua variabel.
}
// Perulangan for...of dalam JavaScript berfungsi untuk mengiterasi
// atau menelusuri nilai (value) secara langsung dari objek yang dapat
// diulang (iterable), seperti Array, String, Map, dan Set.

//
console.log("\n"); // ENTER DIKIT
// console.info("===== TUGAS DARI GPT ===== ");
// Buat Map bernama buah.
// Tambahkan dua pasangan data: "A" → "Apel" dan "B" → "Banana".
// Gunakan for...of untuk menampilkan key dan value sekaligus.
// const buah = new Map();
// buah.set("A", "Apel");
// buah.set("B", "Banana");
// buah.set("C", "Chery");
// buah.set("D", "Durian");

// .keys() — mengambil semua key
// console.info(
//   "== Mengambil/Menampilkan/Mengakses semua Key dengan Mehtod .keys() ==",
// );
// console.log(buah.keys());
// Ini menghasilkan iterator berisi key. Kalau mau menampilkannya satu per satu:
// for (const key of buah.keys()) {
//   console.log(key);
// }

// .values() — mengambil semua value
console.log("\n"); // ENTER DIKIT
// console.info(
//   "== Mengambil/Menampilkan/Mengakses semua Values dengan Mehtod .values() ==",
// );
// console.log(buah.values());
// for (const value of buah.values()) {
//   console.log(value);
// }

// .entries() — mengambil Semua Pasangan Key Dan Values
// console.info(
//   "== Mengambil/Menampilkan/Mengakses semua Values dengan Mehtod .entries() ==",
// );
// console.log(buah.entries());

// for (const [key, value] of buah) {
//   console.log(key, value);

//   //   for...of mengambil setiap pasangan data di buah secara bergantian.
//   // [key, value] memisahkan pasangan tersebut menjadi dua variabel.
//   // console.log(key, value) menampilkan keduanya sekaligus.
// }

// for (const [key, value] of buah) {
//   if (key === "B") {
//     console.log(value);
//   } // output nya cuman Banana
//   //   for...of mengulang semua pasangan data di dalam buah.
//   // if (key === "B") memeriksa setiap pasangan. Kalau key-nya bukan "B", console.log(value) dilewati.
//   // Key yang diperiksa	    Kondisi key === "B"          	Hasil
//   // "A"	                  Salah (false)	                Tidak tampil
//   // "B"	                  Benar (true)	                Banana
//   // "C"	                  Salah (false)	                Tidak tampil
//   // "D"	                  Salah (false)	                Tidak tampil
//   // Poin pentingnya: if tidak otomatis berarti "kalau B ada, tampilkan semua value". Perintah di dalam { }
//   // milik if hanya dijalankan ketika kondisi pada pemeriksaan tersebut bernilai true.
//   // Kalau lu mau menampilkan semua value hanya jika key "B" memang ada, logikanya berbeda: lu perlu
//   // memeriksa keberadaan key terlebih dahulu, misalnya menggunakan buah.has("B").

//  // Dalam for...of, kita menggunakan pengertian
//  // "Kalau key yang sedang diperiksa adalah B, jalankan proses."
//  // for...of memeriksa setiap pasangan secara bergantian. Setiap kali giliran satu pasangan, if mengecek apakah key pasangan itu "B".
//  // Jadi, if bukan menentukan proses perulangannya. for...of yang mengulang; if yang menentukan apakah perintah di dalamnya dijalankan.
// }

// for (const [key, value] of buah) {
//   if (key === "B" && key === "D") {
//     console.log(value);
//   }
// }

// for (const [key, value] of buah) {
//   if (key === "B" || key === "D") {
//     console.log(value);
//   }
// }
