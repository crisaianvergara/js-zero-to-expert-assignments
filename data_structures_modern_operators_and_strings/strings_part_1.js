"use strict";

import books from "./books.js";

const firstBook = books[0];
const firstBookISBN = firstBook.ISBN;
console.log(  
  firstBookISBN[6],
  firstBookISBN[4],
  firstBookISBN[9],
  firstBookISBN[8],
);

const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf("chess"));
console.log(quote.slice(quote.lastIndexOf(" ") + 1));

function isContributor (author) {
  // console.log(author.lastIndexOf("Contributor)"));
  return author.lastIndexOf("Contributor)") !== -1;
}

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));