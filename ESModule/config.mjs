export const mahasiswa = [
  {
    nama: "Maulana",
    nilai: 90,
  },
  {
    nama: "Dhimas",
    nilai: 80,
  },
  {
    nama: "Rizky",
    nilai: 95,
  },
  {
    nama: "Jek",
    nilai: 100,
  },
];

export function hitungRataRata(data) {
  const total = data.reduce((jumlah, item) => jumlah + item.nilai, 0);
  // parameter reduce menerima function hitung, 0 itu artinya mulai dari index yang ke -0 (elemen pertama)
  // reduce= fungsinya menjumlahkan/menghitung semua nilai yang ada di dalam array/object

  return total / data.length;
}

export function tentukanPredikat(nilai) {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
}
