//? logs timestamp of reload
//*--------------------------------------------------------
const compiled = new Date();
console.info('compiled: ', compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------

//? arrays of data for exercises 
//*--------------------------------------------------------
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


//? Some and Every Checks
//*--------------------------------------------------------
//*--------------------------------------------------------

//? Array.prototype.some() // is at least one person 19 or older?
//*--------------------------------------------------------

//* Attempt 1
//* ------------------------------
// const over = people.some(person => {
//   const now = new Date().getFullYear();
//   if ((now - person.year) >= 19) {
//     return true;
//   }
// });

// console.log(over)

//* Attempt 2
//* ------------------------------
// const over = people.some(({year}) => (new Date().getFullYear()) - year >= 19);
// console.log({over})

//* Wes's Solution(s)
//* ------------------------------
//! some() takes a function that checks every instance of the array some() is called on and uses the instance as the param for the function
// const isAdult = people.some(function(person) { 
//   const currentYear = (new Date()).getFullYear(); //! gives current year
//   if (currentYear - person.year >= 19) { //! takes current year, subtracts year the person was born, and checks if the result is >= 19
//     return true;
//   }
// });
// console.log({isAdult}); //! apparently setting the variable in {} when using console.log will return the variable name and the value as an object. Ex: `{isAdult: true}`

//* rewrite
// const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
// console.log({isAdult});


//? Array.prototype.every() // is everyone 19 or older?
//*--------------------------------------------------------
//! literally the same code as above. Just replaced some() with every()

//* Attempt 1
//* ------------------------------
// const over = people.every(({year}) => (new Date().getFullYear()) - year >= 19);
// console.log({over})

//* Wes's Solution(s)
//* ------------------------------
// const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
// console.log({allAdults})

//? Array.prototype.find()
//? Find is like filter, but instead returns just the one you are looking for
//? find the comment with the ID of 823423
//*--------------------------------------------------------

//* Attempt 1
//* ------------------------------
// const found = comments.find(comment => comment.id === 823423);
// console.log({found});

//* Attempt 2
//* ------------------------------
// const found = comments.find(({id}) => id === 823423);
// console.log({found});


//* Wes's Solution(s)
//* ------------------------------
//! find() takes a function that checks every instance of the array find() is called on and uses the instance as the param for the function 
// const comment = comments.find(function(comment) {
//   if (comment.id === 823423) { //! comapares id for each comment to the provided id
//     return true; //! returns true if they match
//   }
// })
// console.log({comment})

//* rewrite
// const comment = comments.find(comment => comment.id === 823423);
// console.log({comment})


//? Array.prototype.findIndex()
//? Find the comment with the ID of 823423
//*--------------------------------------------------------
//! The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
//! Otherwise, it returns -1, indicating that no element passed the test.

//* Attempt 1
//* ------------------------------
// const locate = comments.findIndex(comment => comment.id === 823423);
// console.log({locate})

//* Attempt 2
//* ------------------------------
// const locate = comments.findIndex(({id}) => id === 823423);
// console.log({locate});

//* Wes's Solution(s)
//* ------------------------------
const index = comments.findIndex(comment => comment.id === 823423);
console.log({ index });


//? Delete the comment with the ID of 823423
//*--------------------------------------------------------

//* Wes's Solution(s)
//* ------------------------------

// comments.splice(index, 1);
// console.table(comments);

//* method for deleting from an array that is popular with redux
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
