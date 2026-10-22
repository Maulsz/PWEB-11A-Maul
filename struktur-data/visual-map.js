const produk = [
  {
    id: 1,
    name: "Apel",
    price: 32000,
    category: "Impor",
    stok: 12,
    gambar: "assets/img/apel-merah.svg",
    gambarAlt: "assets/img/apel-hijau.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#ffe1de", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 2,
    name: "Anggur",
    price: 32000,
    category: "Impor",
    stok: 3,
    gambar: "assets/img/apel-merah.svg",
    gambarAlt: "assets/img/apel-hijau.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#ffe1de", // warna latar foto, dibaca CSS lewat variabel --warna
  },
];

const keranjang = new Map();

const tambahKeranjang = (item) => {
  const jumlahKeranjangSaatIni = keranjang.has(item) ? keranjang.get(item) : 0;
  if (jumlahKeranjangSaatIni >= item.stok) {
    return false;
  } // validasi tambah ke keranjan, jika jumlah keranjang saat ini sudah lebih atau samadengan stok (habis), di return false/sudah tidak bisa nambah
  keranjang.set(item, jumlahKeranjangSaatIni + 1);
  return true;
};

console.log(keranjang);

console.log(tambahKeranjang(produk[1]));
console.log(keranjang);

console.log(tambahKeranjang(produk[1])); // ini timpa value nya karena keranjangsaatini + 1 / cuman value nya yang nambah
console.log(keranjang); // cuman value nya berubah bukan nimpa

console.log(tambahKeranjang(produk[0])); // nambah satu data apel karena key nya beda jadi gak di timpa/tambah value nya
console.log(keranjang);

console.log(tambahKeranjang(produk[0])); // kalau ada ini beraarti timpa/jjumlahkan value nya dari yang atas tadi
console.log(keranjang);
