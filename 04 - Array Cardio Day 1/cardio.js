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

//TODO Array.prototype.filter()
//TODO 1. Filter the list of inventors for those who were born in the 1500's

//* My Solution
//* ------------------------------

//* Attempt 1
//! first attempt was ugly but worked.
//* ------------------------------
// const filter = inventors.filter(inventor => {
//   if (inventor.year >= 1500 && inventor.year <= 1599) {
//     return true;
//   }
// })
// console.log(filter);

//* Attempt 2
//! second attempt was cleaner and worked. destructuring the only difference between my solution and wes's
//* ------------------------------
const one = inventors.filter(({ year }) => year >= 1500 && year <= 1599);
// console.log(one);

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
//! second attempt worked well. my method did not include the ternary, but still got the same result. 
//! don't know if the two versions are comprable or if there is an potential issue with mine outside of the current context
//* ------------------------------
const three = inventors.sort((a, b) => a.year - b.year);
// console.log(three);

//? Wes's Solution
//? ------------------------------
// const ordered = inventors.sort(function(a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
// console.table(ordered);


//TODO Array.prototype.reduce()
//TODO 4. How many years did all the inventors live?

//* My Solution
//* ------------------------------

//* Attempt 1
//! did not work. got error: "cardio.js:122 Uncaught TypeError: inventor.reduce is not a function" 
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
//! did not work. got error: "cardio.js:132 Uncaught TypeError: Cannot read property 'year' of undefined"
//! after listening to Wes's explanation and doing some research, I know why this didn't work. the {} after the arrow function were why it didn't run. 
//! I need to either add return in the {} or remove them entirely. even if I fixed that, it would have returned the wrong values though. 
//* ------------------------------
// const four = inventors.reduce((a, b) => { a.year + b.year }, 0);
// console.log(four);

//* Attempt 3
//! redoing after watching Wes do it, I now understand how reduce works. What I don't understand is why my function returns 861 and Wes's returns 523. 
//! even when I run his solution, I get the same results: 861 for this file, but 523 in the video.
//* ------------------------------
const four = inventors.reduce((acc, cv) => acc + (cv.passed - cv.year), 0);
// console.log(four);

//? Wes's Solution
//? ------------------------------
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
// console.log(totalYears);


//TODO 5. Sort the inventors by years lived

//* My Solution
//* ------------------------------

//* Attempt 1
//! I'm honestly not sure how to execute on this. You would need to find the number of years each inventor lived (using reduce I assume) and then sort them by it. 
//! This code definitely does not work and I'm sure you can do it with one const, but not sure how. 
//* ------------------------------
// const fiveReduce = inventors.forEach(inventor => inventor.reduce((acc, cv) => acc + (cv.passed - cv.year), 0));
// console.log(fiveReduce);
// const five = fiveReduce.sort((a, b) => a.year - b.year);
// console.log(five);

//* Attempt 2
//! Wayyyy over complicated it. Also, I think the list of inventors in the video is shorter than what's actually in the repo currently which would be why my work return different answers.
//! Using sort(), you write a function that takes the a and b arugments that you are comparing, extract the length of time the inventor assigned to those agruments lived, 
//! assign those to two variables that will represent the a and b arugments, then compare the two variables to return either -1 or 1 depending on if the statement is true. 
//* ------------------------------
const five = inventors.sort((a, b) => {
    const argA = a.passed - a.year;
    const argB = b.passed - b.year;
    return argA > argB ? -1 : 1;
});
// console.log(five);

//? Wes's Solution
//? ------------------------------
const oldest = inventors.sort(function (a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
}); // the editor for repl.it shows an error on the } saying "[typescript] Expression expected." but the code still runs fine. 
// console.table(oldest);

//TODO 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//TODO https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//* My Solution
//* ------------------------------

//* Attempt 1
//! I did not attempt this one because I wasn't sure how I was supposed to go about doing it. I always forget that you 
//! can write javascript directly on a page through the console.
//! The good news is that this forced me to look up the difference between Array.from() and spread syntax. It was a neat read. 
//! spread works only with objects that are iterable
//! Array.from() will do that <em>and</em> work on array-like objects that are not iterable.
//! Array.from() is more versatile and according to Google, spread is particularly useful when you need to concat multiple arrays.
//! Also, the code below works.
//* ------------------------------
// const arr = Array.from(document.querySelectorAll(".mw-category a"));
// const six = arr.map(index => index.textContent).filter(item => item.includes("de"));

//? Wes's Solution
//? ------------------------------
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));
// const de = links
//               .map(link => link.textContent)
//               .filter(streetName => streetName.includes("de"));


//TODO 7. sort Exercise
//TODO Sort the people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//* My Solution
//* ------------------------------

//* Attempt 1
//! This is crap. I tried this before I went through the video of the prior sort methods and also, I 
//! did it on the wrong array because I wasn't paying attention.
//* ------------------------------
// const seven = inventors.sort((a, b) => a.year - b.year);
// console.log("seven: ", seven);

//* Attempt 2
//! This was basically the same as three except you don't have to grab the year off the the person.
//* ------------------------------
const seven = people.sort((a, b) => a < b ? -1 : 1);
// console.log(seven);

//? Wes's Solution
//! The instructions just say sort by last name alphabetically and given that the strings in the array 
//! already show the last name first, I don't understand the need for array destructuring.
//! If Wes was going to list them as `${firstName} ${lastName}` or something I would get it, but his code 
//! returns the same exact thing mine does in more lines. 
//? ------------------------------
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(", ");
    const [bLast, bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
});
// console.log(alpha);

//TODO 8. Reduce Exercise
//TODO Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

//* My Solution
//* ------------------------------

//* Attempt 1
//! Had to go through MDN docs for this one as it involved strings
//! Accumulator(acc) is the object that the currentValue(cv) being pushed to as the function runs
//! if the cv is already in the acc object then it adds one the the cv's value else it adds the cv 
//! to the acc object and sets it's value to 1
//! Then we return the acc object
//! the {} is there so there is an empty object to start with.
//* ------------------------------
// const eight = data.reduce((acc, cv) => {
//   if (cv in acc) {
//     acc[cv]++
//   } else {
//     acc[cv] = 1
//   }
//   return acc
// }, {});
// console.log(eight);

//* Attempt 2
//! Solution above works, just wanted to review and refactor after Wes's demo.
//* ------------------------------
const eight = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++
    return obj;
}, {});
// console.log(eight);

//? Wes's Solution
//? ------------------------------
const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++
    return obj;
}, {});
  // console.log(transportation);
