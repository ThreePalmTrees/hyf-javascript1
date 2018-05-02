"use strict";

function vehicleType(color, code, age) {
  let category = ["car", "motorbike", "caravan", "bike"];
  const state = age <= 1 ? " new " : " used ";
  if (code === 1) {
    return "a " + color + state + category[0];
  } else if (code === 2) {
    return "a " + color + state + category[1];
  } else if (code === 3) {
    return "a " + color + state + category[2];
  } else if (code === 4) {
    return "a " + color + state + category[3];
  } else {
    return "unknown vehicle";
  }
}

console.log(vehicleType("yellow", 4, 1));
