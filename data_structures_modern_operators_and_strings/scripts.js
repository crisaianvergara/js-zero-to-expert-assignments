"use script";

const country = "Philippines";
const continent = "Asia";
let population = 130;

const isIsland = true;
let language;

language = "Filipino";

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// population /= 2;
// population ++;
// const finland = 6;
// console.log(population > finland);
// const averagePopulation = 33;
// console.log(population < averagePopulation);

// const description =
//   country +
//   " is in " +
//   continent +
//   " and its " +
//   population +
//   " million people speak " +
//   language +
//   ".";
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}
