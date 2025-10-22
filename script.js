// On page load, open all tiles whose dates are before today

// On click of a tile flip it if the date is today or earlier

const flipTest = document.querySelectorAll('.door');

flipTest.forEach(day => {
	day.addEventListener('click', () => {
		day.classList.add('opened');
	});
});