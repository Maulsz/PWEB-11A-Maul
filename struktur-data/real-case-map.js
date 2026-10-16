const userA = { id: 1, name: "Rizky" };
const userB = { id: 2, name: "Zubair" };
const userC = { id: 3, name: "Dihyah" };
const userD = { id: 4, name: "Dhimas" };

const sessionBrowser = new Map();

sessionBrowser.set(userA, "Authenticated");
sessionBrowser.set(userB, "Guest");
sessionBrowser.set(userC, "Guest");

console.log(sessionBrowser);
console.log(sessionBrowser.has(userC));

console.log(sessionBrowser.get(userB.name));
const zubairName = userB.name;
console.log(zubairName);

sessionBrowser.set(userD, { 1: "authenticated", 2: "Guest" });
console.log(sessionBrowser);

console.log(sessionBrowser.get(userD));

// const { A, B, C, D } = sessionBrowser;

// Spread Operator
