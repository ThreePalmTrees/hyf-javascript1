"use strict";
let myArray = ["Husam", 24];
console.log(myArray);

console.log(6 / 0 === 10 / 0);
if (6 / 0 === 10 / 0) {
  console.log("6/0 equals 10/0");
} else if (6 / 0 !== 10 / 0) {
  console.log("6/0 doesn't equal 10/0");
}
if (7 / 7 === 10 / 0) {
  console.log("7/7 equals 10/0");
} else {
  console.log("7/7 doesn't equal 10/0");
}

if (isFinite(6 / 0)) {
  console.log("6/0 is finite");
} else if (!isFinite(6 / 0)) {
  console.log("6/0 is not finite");
}
if (isFinite(7 / 7)) {
  console.log("7/7 is finite");
} else if (!isFinite(7 / 7)) {
  console.log("7/7 is not finite");
}
