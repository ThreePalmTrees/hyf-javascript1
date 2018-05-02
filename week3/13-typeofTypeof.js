"use strict";
const bar = 42;
const result = typeof typeof bar; // The typeof operator returns a _string_ indicating the type of the variable, so typeof of typeof is a string.
console.log(result);
