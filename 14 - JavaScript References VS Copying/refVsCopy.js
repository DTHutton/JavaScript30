//? logs timestamp of refresh
//*--------------------------------------------------------
const compiled = new Date();
console.info("compiled: ", compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------


//? start with strings, numbers and booleans
//*--------------------------------------------------------

// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = 'derek';
// let name2 = name;
// console.log(name, name2);
// name = 'not derek';
// console.log(name, name2);


//? Let's say we have an array
//*--------------------------------------------------------

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

//? and we want to make a copy of it.
const team = players;

//! these are the same when logged.
// console.log(`
// 	team: ${team}
// 	players: ${players}
// 	`);

//? You might think we can just do something like this:
// team[3] = 'Lux';

//? however what happens when we update that array?
//! changes both arrays to have the 3rd index show 'Lux'.
//? Why? It's because that is an array reference, not an array copy. They both point to the same array!


//? So, how do we fix this? We take a copy instead!
//*--------------------------------------------------------

//? one way is to use slice()
const team2 = players.slice();
//! slice is normally passed arguments `slice(2)` to grab a piece of the array 'Ryan'
//! if you pass nothing, it will make a copy of the array
// console.log(`team2 created using players.slice(): ${team2}`);

team2[3] = 'Lux';
// console.log(`
// 	team2[3] was assigned the value of 'Lux'
// 	players: ${players}
// 	team2: ${team2} 
// `);

//! the value of `players` did not change since the team2 value is a copy of the original array, not a reference

//? or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Lux';
// console.log(`
// 	team3 is created by using the concat method
// 	players: ${players}
// 	team2: ${team3} 
// `);

//? or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Lux';
// console.log(`
// 	team4 is created using spread syntax
// 	players: ${players}
// 	team2: ${team4} 
// `);

//? or Array.from()
const team5 = Array.from(players);
// console.log(`Array.from() also works: ${team5}`);

//? now when we update it, the original one isn't changed


//? The same thing goes for objects, let's say we have a person object
//*--------------------------------------------------------

//? with Objects
const person = {
	name: 'Wes Bos',
	age: 80
};

//? and think we make a copy:
const captain = person;
// captain.number = 99;
// console.log(person);

//? how do we take a copy instead? Object.assign()
//! start with a blank object: Object.assign({})
//! pass it the object you with to copy all of the properties from: Object.assign({}, person)
//! fold in the new properties you wish to overwrite: Object.assign({}, person, { number: 99 })
//! assign it to its own variable: const cap2 = Object.assign({}, person, { number: 99 })
const cap2 = Object.assign({}, person, { number: 99 });
// console.log(cap2); //! returns { name: 'Wes Bos', age: 80, number: 99 }
// console.log(person); //! returns { name: 'Wes Bos', age: 80 }

//? We will hopefully soon see the object ...spread 
//! this has been added since this course was recorded as it works for me, but not in the video
const cap3 = { ...person };
cap3.number = 99;
cap3.age = 104;
// console.log(cap3); //! returns { name: 'Wes Bos', age: 104, number: 99 }
// console.log(person); //! returns { name: 'Wes Bos', age: 80 }


//? Things to note - this is only 1 level deep - both for Arrays and Objects. 
//? lodash has a cloneDeep method, but you should think twice before using it.
//*--------------------------------------------------------

const wes = {
	name: 'Wes',
	age: 100,
	social: {
		twitter: '@wesbos',
		facebook: 'wesbos.developer'
	}
};
console.log('wes: ', wes);

// const dev = Object.assign({}, wes);
// console.log('dev: ', dev);
// dev.name = 'Wesley';

// console.log('wes post dev.name update: ', wes); //! this does not update
// console.log('dev post dev.name update: ', dev); //! this does update

// console.log('dev.social: ', dev.social);
// dev.social.twitter = '@coolman';
// console.log('dev.social post twitter update: ', dev.social); //! this updates
// console.log('wes.social post twitter update: ', wes.social); //! this also updates
//! Object.assign() only does one level deep

//? poor man's cloneDeep
//! NOT RECOMMENDED
const dev2 = JSON.parse(JSON.stringify(wes));
console.log('dev2: ', dev2);
dev2.social.twitter = '@coolman';
console.log('dev2.social post twitter update: ', dev2.social); //! this updates
console.log('wes.social post twitter update: ', wes.social); //! this does not update

//! JSON.stringify(wes) turns `wes` into a string
//! JSON.parse(JSON.stringify(wes)) immediately turns `wes` back into an object giving you a full copy
