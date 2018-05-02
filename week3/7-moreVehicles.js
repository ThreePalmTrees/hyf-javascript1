"use strict";

function vehicleType(color, code, age) {
  let category = ["car", "motorbike", "caravan", "bike"];
  const state = age <= 1 ? " new " : " used ";
  if (code === 1) {
    console.log("a " + color + state + category[0]);
  } else if (code === 2) {
    console.log("a " + color + state + category[1]);
  } else if (code === 3) {
    console.log("a " + color + state + category[2]);
  } else if (code === 4) {
    console.log("a " + color + state + category[3]);
  } else {
    console.log("unknown vehicle");
  }
}

vehicleType("yellow", 4, 1);
