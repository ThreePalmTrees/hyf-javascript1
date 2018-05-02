"use strict";

function advertisement(vehicleNames) {
  return "#1 vehicles retailer in the Netherlands. We cover " + category + ".";
}

let category = ["car", " motorbike", " caravan", " bike"];

category.push(" go kart");

const text = advertisement(category);
console.log(text);
