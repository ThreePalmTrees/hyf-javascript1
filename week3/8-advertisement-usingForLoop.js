"use strict";

function advertisement(vehicleNames) {
  let adText = "#1 vehicles retailer in the Netherlands. We cover: ";
  const lastVehicle = "and " + vehicleNames[vehicleNames.length - 1] + "s.";

  for (let i = 0; i < vehicleNames.length - 1; i++) {
    adText += vehicleNames[i] + "s, "; // Adding "s, " to all elements but the last one
  }
  return adText + lastVehicle;
}

let category = ["car", "motorbike", "caravan", "bike"];

const text = advertisement(category);
console.log(text);
