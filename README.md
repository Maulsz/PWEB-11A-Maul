# Rangkuman Materi JavaScript (Dasar - Intermediate)

Catatan materi pembelajaran JavaScript (modul / kelas Dicoding JS).

---

## 1. Konversi Tipe Data (Data Type Conversion)

### A. Konversi Eksplisit (Explicit Conversion)

**Konversi eksplisit** adalah cara paling dapat diandalkan untuk mengubah tipe data, karena dilakukan dengan **instruksi yang jelas (eksplisit) dari programmer**.

> **Catatan Ekspresi:** Nilai atau ekspresi dapat ditulis langsung di dalam parameter fungsi/method.

#### 1. Mengubah / Konversi Ke String

- `String(value)` — Fungsi global untuk mengubah nilai menjadi string.
- `value.toString()` — Method untuk mengubah nilai menjadi string.

#### 2. Mengubah / Konversi Ke Number

- `Number(value)` — Fungsi global untuk mengubah nilai menjadi tipe data number.
- `parseInt(value)` — Mengubah string/nilai menjadi bilangan bulat (_integer_).
- `parseFloat(value)` — Mengubah string/nilai menjadi bilangan desimal (_float_).

#### 3. Mengubah / Konversi Ke Boolean

- `Boolean(value)` — Mengubah nilai menjadi tipe data boolean (`true` atau `false`).

---

### B. Truthy & Falsy Values

Hampir semua nilai di JavaScript bernilai **truthy** (`true`), **kecuali** nilai-nilai **falsy** berikut:

- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `''` (String kosong)
- `null`
- `undefined`
- `NaN` (Not a Number)

---

### C. Konversi Implisit (Implicit Conversion)

**Konversi implisit** terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi langsung dari programmer. Ini biasanya terjadi dalam konteks operasi tertentu.

- **Contoh:** Operator `+` digunakan untuk penggabungan string (_string concatenation_). Jika salah satu operan bernilai string, operan lainnya akan otomatis dikonversi menjadi string.

---

## 2. Operator dalam JavaScript

**Operator** adalah sebuah simbol atau teks yang digunakan untuk melakukan suatu operasi (aritmatika, penugasan, perbandingan, dll).

- **Operan:** Nilai yang menjadi target dari suatu operasi.

### Klasifikasi Operator Berdasarkan Jumlah Operan

1. **Unary:** Membutuhkan **1 operan**.
   - Contoh: `typeof`, increment (`++`), decrement (`--`).
2. **Binary:** Membutuhkan **2 operan**.
   - Contoh: Operator aritmatika (`+`, `-`, `*`, `/`), operator logis, dll.
3. **Ternary:** Membutuhkan **3 operan**.
   - Contoh: Conditional operator (`kondisi ? nilai_true : nilai_false`).

### Jenis-Jenis Operator

- **Assignment Operator (Operator Penugasan):** Digunakan untuk menginisialisasi atau memperbarui nilai variable (contoh: `=`, `+=`, `-=`).
- **Increment & Decrement:** Penambahan/pengurangan 1. Simbol `++` atau `--` dapat diletakkan di awal (_prefix_) atau di akhir (_postfix_).
- **Comparison Operator (Operator Perbandingan):** Membandingkan dua nilai dan mengembalikan nilai boolean (`true` atau `false`).

---

## 3. Function (Fungsi)

- **Tujuan Utama:** Menghindari pekerjaan repetitif dan kode yang redundan.
- **Deklarasi Function (Function Declaration):**
  - Nama function bertindak sebagai _identifier_.
  - Mendukung fitur **Hoisting** di JavaScript (function dapat dipanggil sebelum baris deklarasinya).

### Parameter vs Argument

- **Parameter:** Variabel yang didefinisikan saat membuat/mendeklarasikan function. Parameter diperlakukan mirip seperti variabel di dalam body function.
- **Argument:** Nilai aktual yang diberikan/diteruskan dalam tanda kurung `()` saat dipanggil/dieksekusi.
- **Default Parameter:** Nilai bawaan yang diberikan pada parameter jika argument tidak diisi saat pemanggilan.
  - _Contoh:_ `function kaliTiga(number = 3)` $
ightarrow$ `3` adalah default parameter.

### Return Statement

- Digunakan untuk mengembalikan nilai hasil eksekusi dari dalam function ke pemanggilnya.

### Function Expression & First-Class Citizen

- **Function Expression:** Menulis function sebagai nilai dari sebuah variabel.
- **First-Class Citizen (Fungsi sebagai Entitas Utama):**
  1. Function dapat disimpan sebagai nilai dalam variabel.
  2. Function dapat diterima sebagai parameter di function lain.
  3. Function dapat mereturn function lain.

### Arrow Function

Sintaks penulisan function yang lebih ringkas menggunakan simbol panah (`=>`).

---

## 4. Tipe Data Object & Array

Keduanya merupakan tipe data kompleks (non-primitif).

### A. Object

- Kumpulan pasangan **key-value** (_property_ dan _value_).
- Data dalam object **tidak terurut**.

### B. Array

- Struktur data spesial yang digunakan untuk menyimpan kumpulan data yang **terurut**.
- Bersifat **dinamis** (ukurannya dapat berubah secara otomatis).
- Di JavaScript, **Array sebenarnya merupakan tipe data Object**.
- Mengecek tipe data array menggunakan `typeof` akan mengembalikan `'object'`.

---

## Informasi Tambahan

- **Email / Kontak:** `numan@iqis.sch.id`
- **Tugas / Catatan Tambahan:** Kirim link GitHub.
