"use strict";

function advertisement(vehicleNames) {
  const lastOccurence =
    category.toString().replace(/,([^,]*)$/, " and ") +
    category[category.length - 1];
  const vehiclesString = lastOccurence.replace(/,/g, ", ");
  return (
    "#1 vehicles retailer in the Netherlands. We cover " + vehiclesString + "."
  );
}

let category = ["car", "motorbike", "caravan", "bike"];

const text = advertisement(category);
console.log(text);
