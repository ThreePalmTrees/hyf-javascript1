"use strict";
let objectExample = {};

let teachers = [
  { firstName: "Ariadne", lastName: "Gomes" },
  { firstName: "Philipp", lastName: "Beau" },
  { firstName: "Unmesh", lastName: "Joshi" },
  { firstName: "Osman", lastName: "Ungur" },
  { firstName: "Hardit", lastName: "Singh" },
  { firstName: "Jim", lastName: "Cramer" },
  { firstName: "Rohan", lastName: "Nicholls" }
];

teachers[0].languages = ["HTML", "CSS"];
teachers[1].languages = ["HTML", "CSS"];
teachers[2].languages = ["CLI", "GIT"];
teachers[3].languages = ["CLI", "GIT"];
teachers[4].languages = ["CLI", "GIT"];
teachers[5].languages = ["JavaScript"];
teachers[6].languages = ["JavaScript"];

console.log(teachers);
