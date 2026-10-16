// Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. kalau sama seperti object, lalu object fungsinya map?
// map berfungsi untuk menutupi kekurangan object. Map dapat menggunakan key dengan tipe data apa pun, tidak seperti obejct yang hanya menerima string sebagai key.
// Map = key nya bebas dan value nya bebas
// Object = key nya hanya boleh string dan value nya bebas
// Perbedaan berdasarnya terletak pada key yang digunakan
// KEY KEY KEY KEY KEY KEY KEY KEY KEY. BEDANYA DI KEYYY BUKAN VALUE
// Map biasa digunakan untuk Looping Data

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
