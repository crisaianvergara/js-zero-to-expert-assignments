"use strict";

const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);
console.log(bookMap);

bookMap.set("pages", 464);
console.log(bookMap);

console.log(`${bookMap.get("title")}, by ${bookMap.get("author")}`);

console.log(bookMap.size);

if (bookMap.has("author")) console.log("The author of the book is known");
