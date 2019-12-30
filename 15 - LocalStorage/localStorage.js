//? logs timestamp of refresh
//*--------------------------------------------------------
const compiled = new Date();
console.info("compiled: ", compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------

//? global variables
//*-------------------------------------------------------- //*--------------------------------------------------------
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; //! checks for data in local storage and converts it into an object or returns empty array if no local data.


//? functions
//*-------------------------------------------------------- //*--------------------------------------------------------

//? function that adds items. triggered by submit event on additems
//*--------------------------------------------------------
function addItem(e) {
	e.preventDefault(); //! prevents page from reloading on submit
	const text = (this.querySelector('[name=item]')).value; //! `this` addItems input. looks for an <input /> with a `name` attribute that has `item` as its value.
	//! the actual item object. `text` is the data submitted and `done` tracks whether or not the checkbox value is true.
	const item = {
		text,
		done: false
	}
	items.push(item); //! pushes submitted item to the items array.
	populateList(items, itemsList); //! runs populateList() with the items and itemsList variables as its arguments.
	localStorage.setItem('items', JSON.stringify(items)); //! sets the items array to local storage and converts the array to a string so that localStorage can read it.
	this.reset(); //! clears the input on submit.
}

//? function that renders the list of items
//*--------------------------------------------------------
//! plates is set to empty array so that if you forget to pass in the first argument it won't break the code. it will just loop over an empty array.
//! platesList is where we will put the HTML.
//! not reaching outside of the function to make populateList() more flexible in case you want to expand its use.
function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => { //! takes in plate and index for map().
	//! ${plate.done ? 'checked' : ''} checks to see if the checked value is true or not when rendering
		return `
			<li>
				<input
					type="checkbox"
					data-index=${i}
					id="item${i}"
					${plate.done ? 'checked' : ''}
				/>
				<label for="item${i}">${plate.text}</label>
			</li>
		`;
	}).join(''); //! map returns an array so .join('') turns it into one big string.
}

//? function that determines if the checkbox value for the items is true or not
//*--------------------------------------------------------
function toggleDone(e) {
	if (!e.target.matches('input')) return; //! skip this unless it's an input.
	const el = e.target;
	const index = el.dataset.index; //! sets the index value of the target element to the `index` variable.
	items[index].done = !items[index].done; //! if the done key on the item object is true, it sets the value to false and vice versa.
	localStorage.setItem('items', JSON.stringify(items)); //! sets the items array to local storage and converts the array to a string so that localStorage can read it.
	populateList(items, itemsList); //! runs populateList() with the items and itemsList variables as its arguments.
}


//? event listeners
//*-------------------------------------------------------- //*--------------------------------------------------------
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);


//? function calls
//*-------------------------------------------------------- //*--------------------------------------------------------
populateList(items, itemsList); //! runs populateList() with the items and itemsList variables as its arguments to check for local data on page load
