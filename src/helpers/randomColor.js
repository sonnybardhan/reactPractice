export function randomColor() {
	return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

function randomRGB() {
	return (Math.random() * 256) | 0;
}
