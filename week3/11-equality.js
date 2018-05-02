"use strict";

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
//What do you think will be the result of x == y, x === y and z === y and z === x? Prove it!

// x & y
if (x == y) {
  console.log("x & y are equal using ==");
} else {
  console.log("x & y are not equal using ==");
}
if (x === y) {
  console.log("x & y are equal using ===");
} else {
  console.log("x & y are not equal using ===");
}

// z & y
if (z == y) {
  console.log("z & y are equal using ==");
} else {
  console.log("z & y are not equal using ==");
}
if (z === y) {
  console.log("z & y are equal using ===");
} else {
  console.log("z & y are not equal using ===");
}

// x & z
if (x == z) {
  console.log("x & z are equal using ==");
} else {
  console.log("x & z are not equal using ==");
}
if (x === z) {
  console.log("x & z are equal using ===");
} else {
  console.log("x & z are not equal using ===");
}
