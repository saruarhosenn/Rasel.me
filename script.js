/*----------- TYPING TEXT -----------*/
var typeText = document.querySelector(".typeText")
var textToBeTypedArr = ["I learn Web Development.", "Please everyone pray for me!."]
var index = 0,
	isAdding = true,
	textToBeTypedIndex = 0

function playAnim() {
	setTimeout(function () {
		// set the text of typeText to a substring of the text to be typed using index.
		typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
		if (isAdding) {
			// adding text
			if (index > textToBeTypedArr[textToBeTypedIndex].length) {
				// no more text to add
				isAdding = false
				//break: wait 2s before playing again
				setTimeout(function () {
					playAnim()
				}, 1000)
				return
			} else {
				// increment index by 1
				index++
			}
		} else {
			// removing text
			if (index === 0) {
				// no more text to remove
				isAdding = true
				//switch to next text in text array
				textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
			} else {
				// decrement index by 1
				index--
			}
		}
		// call itself
		playAnim()
	}, isAdding ? 120 : 60)
}
// start animation
playAnim()

var h = document.documentElement,
	b = document.body,
	st = 'scrollTop',
	sh = 'scrollHeight',
	progress = document.querySelector('.progress'),
	scroll;

document.addEventListener('scroll', function () {
	scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
	progress.style.setProperty('--scroll', scroll + '%');
});