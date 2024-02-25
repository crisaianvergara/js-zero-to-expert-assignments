"use strict";

import books from "./books.js";

const logBookCategories = function (categories) {
  categories = categories.split(";");
  for (const category of categories) console.log(category);
}

const getKeywordsAsString = function (books) {
  const keywords = [];

  for (const book of books) keywords.push(...book.keywords);

  const uniqueKeywords = [...new Set(keywords)];

  return uniqueKeywords.join(";");
}

const logBookChapters = function (chapters) {
  for (const [chapter, pages] of chapters) {
    console.log(chapter.padEnd(20, "_") + pages);
  }
}

const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

logBookCategories(bookCategories);

console.log(getKeywordsAsString(books));


const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];

logBookChapters(bookChapters);