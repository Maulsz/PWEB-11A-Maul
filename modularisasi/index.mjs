// Named IMport / di panggil secara eksplisit
import { cekStatusKelas } from "./kelas.mjs";
// default iport
import fun from "./kelas.mjs";
// Named import Untuk Variable
import { name, age, isMarried } from "./user.mjs";
// Named Import untuk variable dengan alias
import * as dataDiri from "./user.mjs";

console.info("Import langsung");

console.log(name);

console.info("===================================");
console.info("Import pakai alias");
console.log(dataDiri.name);
console.log(dataDiri.age);
console.log(dataDiri.isMarried); // akses dengan
console.info("===================================");

// Named Import FUnction
cekStatusKelas("10A");

// Default Import function
fun(2);

// .mjs tidak beda jauhh dengan .js
// tapi ada perbedaan
// mjs = modularjavascript
// js = javascript
