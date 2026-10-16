// Gabung import named dengan deafult
// import hi, { sayBye } from "./export.mjs";
// Pisah
import halo from "./export.mjs";
import { sayBye } from "./export.mjs";

console.log(halo("Jek")); // Output: Hi Jek
console.log(sayBye("Jek")); // Output: Bye Jek
