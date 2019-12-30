//? logs timestamp of refresh
//*--------------------------------------------------------
const compiled = new Date();
console.info("compiled: ", compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------

function debounce(func, wait = 20, immediate = true) {
	let timeout;
	return function () {
		const context = this,
			args = arguments;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
	sliderImages.forEach(sliderImage => {
		//! halfway through the image
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
		// console.log('slideInAt', slideInAt);
		//! bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		// console.log('imageBottom', imageBottom);
		//! checks if the image is showing half of it's height
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		// console.log('isHalfShown', isHalfShown);
		//! checks if the image has been scolled past
		const isNotScrolledPast = window.scrollY < imageBottom;
		// console.log('isNotScrolledPast', isNotScrolledPast);
		//! if half the image is showing and the image has not been scrolled past:
		//! `true` - adds '.active'
		//! `false` - removes '.active'
		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
	});
}

window.addEventListener("scroll", debounce(checkSlide));
