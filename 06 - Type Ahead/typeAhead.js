//? logs timestamp of reload
//*--------------------------------------------------------
const compiled = new Date();
console.info('compiled: ', compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------

//? global variables
//*--------------------------------------------------------
//! endpoint the data is being pulled from
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//! empty cities array to push that data to
const cities = [];

//? data fetch
//*--------------------------------------------------------
fetch(endpoint) //! uses fetch api to grab the data from the endpoint
  .then(blob => blob.json()) //! gets all of the data and formats it as json
  .then(data => cities.push(...data)); //! takes the formatted data and spreads it in the cities array

//? function to find matches in the cities data for the input word
//*--------------------------------------------------------
//! takes in two arguments:
//! 1. the word being typed that needs to be matched against the data. 
//! 2. the cities array
function findMatches(wordToMatch, cities) {
  return cities.filter(place => { //! filters the place object from the cities array
    const regex = new RegExp(wordToMatch, 'gi'); //! sets regex for wordsToMatch argument 
    return place.city.match(regex) || place.state.match(regex) //! returns matches for place based on city or state name
  });
}

//? function that formats pop info with commas
//*--------------------------------------------------------
//! takes in one argument: arg is number being formatted
function numberWithCommas(x) {
  //! returns arg converts arg to a string then runs replace method that adds in commas where apprpropriate
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //! wes did not go over how this works but I used regexr.com to get a breakdown of what is happening
  //! `\B Not word boundary` - Matches any position that is not a word boundary.
  //! `(?=...) Positive lookahead` - Matches a group after the main expression without including it in the result.
  //! `(...) Capturing group #1` - Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
  //! --- `\d Digit - Matches any digit character (0-9).
  //! --- `{3}` Quantifier - Match 3 of the preceding token.
  //! --- + Quantifier - Match 1 or more of the preceding token.
  //! `(?!...) Negative lookahead` - Specifies a group that can not match after the main expression (if it matches, the result is discarded).
  //! --- `\d Digit - Matches any digit character (0-9).
}

//? function that displays the matches found by findMatches() on the document
//*--------------------------------------------------------
function displayMatches() {
  //! calls findMatches function and assigns the results to the matchArray variables
  //! arg 1 `wordToMatch` is set as this.value with `this` === input value provided via the event listeners on '.search' and '.sugguestions' when this function is called in the code below
  //! arg 2 `cities` is still the cities array with the data
  const matchArray = findMatches(this.value, cities);
  //! maps over matchArray to pull the city, state, and population info from the cities data, formats them in the HTML snippet, and assigns the returned data to the `html` variable
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi'); //! sets regex for this.value data where this.value === input
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); //! replaces data matching regex val with <span class="hl" /> to highlight
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); //! replaces data matching regex val with <span class="hl" /> to highlight
    //! numberWithCommas function is called on place.population to format the number with commas as apprpropriate
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}<span>
      </li>
    `;
  }).join(''); //! joins returned data so that it doesn't come back in array format
  sugguestions.innerHTML = html; //! pushes `html` to the `suggestions` variable defined below
}

//? assigns HTML elements to variables
//*--------------------------------------------------------
const searchInput = document.querySelector('.search');
const sugguestions = document.querySelector('.suggestions');

//? adds event listeners to the HTML elements defined above
//*--------------------------------------------------------
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
