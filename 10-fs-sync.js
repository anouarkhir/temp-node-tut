const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, "\n", second);

const thirdFile = writeFileSync("./content/third.txt", "Hey Anouar!");

console.log("done with this task");
console.log("starting the next one");
