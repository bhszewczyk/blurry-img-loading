const background = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;
let opacity = 1;

let interval = setInterval(blurring, 30);
let blurStyle = window.getComputedStyle(background).filter;
console.log(blurStyle);
const blurValueArr = [...blurStyle].map((char) => parseInt(char));
let blurValue = +blurValueArr
	.filter((value) => isNaN(value) === false)
	.join('');
const changeBlurBy = blurValue / 100;

function blurring() {
	load++;
	opacity -= 0.01;

	blurValue -= changeBlurBy;
	if (blurValue < 0) {
		background.style.filter = `blur(0px)`;
		return;
	}
	blurStyle = `blur(${blurValue.toFixed(1)}px)`;
	background.style.filter = blurStyle;
	console.log(background.style.filter);

	loadingText.innerText = load + '%';
	loadingText.style.opacity = opacity;

	if (load === 100) {
		clearInterval(interval);
	}
}
