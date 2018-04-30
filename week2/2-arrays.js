"use strict"
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
const maurosFavoriteAnimal = "turtle";
favoriteAnimals.push(maurosFavoriteAnimal);
console.log(favoriteAnimals);

const jimsFavoriteAnimal = "meerkat";
favoriteAnimals.splice(1, 0, jimsFavoriteAnimal); // w3schools https://www.w3schools.com/js/js_array_methods.asp
// youtube https://www.youtube.com/watch?v=H4Sf4suR3C4
console.log(
  "I thing the new value of favoriteAnimals is: blowfish, meerkat, capricorn, giraffe, turtle."
);
console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1); // no giraffe
console.log(favoriteAnimals);

const indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
favoriteAnimals.splice(indexOfMeerkat, 1); // http://www.hostingadvice.com/how-to/javascript-remove-element-array/
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + indexOfMeerkat);
