//TODO Get your shorts on - this is an array workout!
//TODO ## Array Cardio Day 1

//TODO Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//TODO Array.prototype.filter()
//TODO 1. Filter the list of inventors for those who were born in the 1500's

//* My Solution
//* ------------------------------

//* Attempt 1
//* ------------------------------
// const filter = inventors.filter(inventor => {
//   if (inventor.year >= 1500 && inventor.year <= 1599) {
//     return true;
//   }
// })
// console.log(filter);

//* Attempt 2
//* ------------------------------
const one = inventors.filter(({ year }) => year >= 1500 && year <= 1599);
// console.table(one);

//? Wes's Solution
//? ------------------------------
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
// console.table(fifteen);

//TODO Array.prototype.map()
//TODO 2. Give us an array of the inventors' first and last names

//* My Solution
//* ------------------------------

//* Attempt 1
//! first attempt was ugly but worked.
//* ------------------------------
// function map() {
//   inventors.map(inventor => {
//     const arr = [inventor.first, inventor.last];
//     console.log(arr)
//   })
// }
// map();

//* Attempt 2
//! second attempt was cleaner and worked. destructuring the only difference between my solution and wes's
//* ------------------------------
const two = inventors.map(({ first, last }) => `${first} ${last}`);
// console.log(two);

//? Wes's Solution
//? ------------------------------
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullNames);


//TODO Array.prototype.sort()
//TODO 3. Sort the inventors by birthdate, oldest to youngest
//* My Solution
//* ------------------------------

//* Attempt 1
//* ------------------------------
// function sort() {
//   const bday = inventors.sort((a, b) => b - a);
//   console.log(bday);
// }
// sort();

//* Attempt 2
//* ------------------------------
const three = inventors.sort((a, b) => a.year - b.year);
console.log(three);

//? Wes's Solution
//? ------------------------------
const ordered = inventors.sort(function (firstPerson, secondPerson) {

});

//TODO Array.prototype.reduce()
//TODO 4. How many years did all the inventors live?

//* My Solution
//* ------------------------------

//* Attempt 1
//* ------------------------------
// function reduce() {
//   const total = inventors.forEach(inventor => {
//     inventor.reduce(function (a, b) {
//       a.year + b.year
//     }, 0)

//   })
//   console.log(total);
// }
// reduce();

//* Attempt 2
//* ------------------------------
// const four = inventors.reduce((a, b) => { a.year + b.year }, 0);
// console.log(four);

//? Wes's Solution
//? ------------------------------


//TODO 5. Sort the inventors by years lived

//* My Solution
//* ------------------------------

//* Attempt 1
//* ------------------------------


//? Wes's Solution
//? ------------------------------


//TODO 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//TODO https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//* My Solution
//* ------------------------------

//* Attempt 1
//* ------------------------------


//? Wes's Solution
//? ------------------------------


//TODO 7. sort Exercise
//TODO Sort the people alphabetically by last name

//* My Solution
//* ------------------------------

//* Attempt 1
//* ------------------------------
// const seven = inventors.sort((a, b) => a.year - b.year);
// console.log("seven: ", seven);


//? Wes's Solution
//? ------------------------------


//TODO 8. Reduce Exercise
//TODO Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

//* My Solution
//* ------------------------------

//* Attempt 1
//* ------------------------------


//? Wes's Solution
//? ------------------------------
