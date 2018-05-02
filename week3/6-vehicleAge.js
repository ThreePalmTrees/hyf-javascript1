"use strict";

function vehicleType(color, code, age) {
  const state = age <= 1 ? " new" : " used";
  if (code === 1) {
    console.log("a " + color + state + " car");
  } else if (code === 2) {
    console.log("a " + color + state + " motorbike");
  } else {
    console.log("unknown vehicle");
  }
}
vehicleType("blue", 1, 1);
