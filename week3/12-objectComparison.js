"use strict";
const o1 = { foo: "bar" }; // making a change to o1 will not affect o3 because they are not related to each other
const o2 = { foo: "bar" }; // making a change to o2 will affect o3 because the value of o2 is assigned to o3 using the assignment operator
const o3 = o2;

console.log("o1", o1, "o2", o2, "o3", o3);

o1.foo = "baz";
console.log("o1", o1, "o2", o2, "o3", o3);

o2.foo = "hyf";
console.log("o1", o1, "o2", o2, "o3", o3);
