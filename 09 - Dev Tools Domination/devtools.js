//? logs timestamp of reload
//*--------------------------------------------------------
const compiled = new Date();
console.info('compiled: ', compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];
const p = document.querySelector('p');
function makeGreen() {
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}


//? console methods
//*--------------------------------------------------------
//*--------------------------------------------------------

//? Regular
//*--------------------------------------------------------
console.log('hello');

//? Interpolated
//*--------------------------------------------------------
console.log('Hello I am a %s string!', 'basic');

//? Styled
//*--------------------------------------------------------
console.log('%c I am some great text', 'font-size: 50px;')

//? Warning!
//*--------------------------------------------------------
console.warn('OH NOOO');

//? Error :|
//*--------------------------------------------------------
console.error('Oh snap!');

//? Info
//*--------------------------------------------------------
console.info('Crocodiles eat 3-4 people per year.');

//? Testing
//*--------------------------------------------------------
console.assert(p.classList.contains('ouch') === 1, 'That is wrong'); //! only fires if something is wrong

//? Clearing
//*--------------------------------------------------------
console.clear(); //! literally clears the console

//? Viewing DOM Elements
//*--------------------------------------------------------
console.log(p); //! logs the element 
console.dir(p); //! logs info about DOM element
console.clear();

//? Grouping together
//*--------------------------------------------------------
dogs.forEach(dog => {
	console.group(`${dog.name}`); //! can also use console.groupCollapsed to have info show collapsed by default
	console.log(`This is ${dog.name}.`);
	console.log(`${dog.name} is ${dog.age} years old.`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
	console.groupEnd(`${dog.name}`);
});

//? Counting
//*--------------------------------------------------------
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.clear();

//? Timing
//*--------------------------------------------------------
// console.time('fetching data');
// fetch('https://api.github.com/users/dthutton')
// 	.then(data => data.json())
// 	.then(data => {
// 		console.timeEnd('fetching data');
// 		console.log(data);
// });
// console.clear();

//? Table
//*--------------------------------------------------------
fetch('https://api.github.com/users/dthutton')
	.then(data => data.json())
	.then(data => {
		console.table(data);
	});


//? Event listener
p.addEventListener('click', makeGreen);
