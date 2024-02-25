"use strict";

import books from "./books.js";

function normalizeAuthorName (author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));
  const lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' ') + 1);
  const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1)
  const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1) 
  return capitalizedFirstName + " " + capitalizedLastName;
}
console.log(normalizeAuthorName(" JuliE sussMan (Contributor)"));

const newBookTitle = books[1].title.replace("Programs", "Software");
console.log(newBookTitle);

function logBookTheme (title) {
  title = title.toLowerCase();

  if (title.startsWith("computer")) {
    console.log("This book is about computers.");
  } else if (title.includes("algorithms") && title.includes("structures")) {
    console.log("This book is about algorithms and data structures.");
  } else if ((title.endsWith("system") || title.endsWith("systems")) && !title.includes("operating")) {
    console.log("This book is about systems, but definitely not about operating systems");
  }
}

