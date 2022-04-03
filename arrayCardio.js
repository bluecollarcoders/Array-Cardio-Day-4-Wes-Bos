const inventors = [
  { first: "Johannes", last: "Kapler", year: 1571, passed: 1683 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Albert", last: "Einstein", year: 1878, passed: 1955 },
  { first: "Issac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
];

// 1  Array.prototype filter()
// Filter the list of inventors for those who are born in 1500's

const earlierInventors = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);

console.table(earlierInventors);

// Array.prototype.map
// 2 Give us an array of the inventory first and last names
const names = inventors.map((names) => `${names.first} ${names.last}`);

console.table(names);

// Array.prototype sort()
//3 Sort the inventors by birthdate, oldest to youngest
const birthDate = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(birthDate);

const ordered = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

console.log(ordered);

// Array.prototype.reduce()
//4 How many years did all the inventors live?
const totalYears = inventors.reduce((sum, number) => {
  return sum + (number.passed - number.year);
}, 0);

console.log(totalYears);

//5 Sort by invetors by years lived
const yearsLived = inventors.sort((a, b) => {
  const firstGuy = a.passed - a.year;
  const secondGuy = b.passed - b.year;
  return firstGuy > secondGuy ? -1 : 1;
});

console.table(yearsLived);

// 6 create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));

// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

// 7 sort Excercise
// Sort the people alphabetically by last name
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethove, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Beethoven, Ludwig",
  "Ben-Gunrion, David",
  "Benn, Tony",
  "Berio, Luciano",
];
const alpha = people.sort((lastOne, nextOne) => {
  const [alast, afirst] = lastOne.split(", ");
  const [blast, bfirst] = nextOne.split(", ");
  return alast > blast ? 1 : -1;
});

console.log(alpha);

// 8. Reduce Excercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);

/*
Musketeers
Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.
*/
const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

console.log(musketeers);

musketeers.forEach((musketeer) => {
  console.log(musketeer);
});

musketeers.pop("D'Artagnan");

console.log(musketeers);

for (let musketeer of musketeers) {
  console.log(musketeer);
}
