//? logs timestamp of refresh so I don't have to think about what should be showing since I can't figure out how to turn off the hot reload for repl.it
//*--------------------------------------------------------
const compiled = new Date();
console.log('compiled: ', compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------

//! this is as far as I got before I got stuck
// const checkboxes = document.querySelectorAll('input');

// function checkboxVal(event) {
// 	let isChecked = event.target.checked;
// 	console.log('isChecked val after click: ', isChecked);
// }

// function shiftCheck(event) {
// 	console.dir(event);
// 	let shift = event.shiftKey;
// 	let type = event.type;
// 	if(shift && type === 'keydown') {
// 		console.log('code that highlights all check boxes between two selected checkboxes')

// 	}
// }

// checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkboxVal));
// document.addEventListener('keydown', shiftCheck);
// document.addEventListener('keyup', shiftCheck);

//? Wes's Walkthrough
//*--------------------------------------------------------

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
	let inBetween = false;
	if(e.shiftKey && this.checked) { //! check if they had the shift key down AND check that they are checking it
		checkboxes.forEach(checkbox => { //! loop over every single checkbox
			if(checkbox === this || checkbox === lastChecked) { 
				inBetween = !inBetween;
			}
			if(inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
