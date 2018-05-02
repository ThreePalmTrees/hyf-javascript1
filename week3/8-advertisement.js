"use strict";

function advertisement(vehicleNames) {
  return "#1 vehicles retailer in the Netherlands. We cover " + category + ".";
}

let category = ["car", " motorbike", " caravan", " bike"];

const text = advertisement(category);
console.log(text);
// console.log(advertisement()); // will give the same result as the one used in lines 9 + 10
