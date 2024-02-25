"use strict";

const [mainKeyword, ...rest] = books[0].keywords;
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors.`);
}

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
