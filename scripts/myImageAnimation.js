var myImage = document.getElementById("myImage");

var popSound = new Audio('assets/sounds/popSound.wav');
var morse = new Audio('assets/sounds/morse.wav');

var delay;

setTimeout(function() {
	myImage.style.transition = "all linear 0.2s";
	myImage.style.opacity = '0.0';
	myImage.style.display = 'block';
} , 100);
setTimeout(function() {
	myImage.style.opacity = '0.3';
	myImage.style.width = '300px';
	popSound.play();
} , 1500);
setTimeout(function() {
	myImage.style.transition = 'all linear 0.5s';
	myImage.style.opacity = '1.0';
	myImage.style.width = '115px';
} , 1800);
setTimeout(function() {
	myImage.style.transition = 'all cubic-bezier(0.6, -1.1, 0.74, 0.05) 0.5s';
	myImage.style.opacity = '0.3';
	myImage.style.width = '41px';
	myImage.style.top = '4%';
	myImage.style.left = '9%';
} , 2500);

myImage.onclick = function() {
	if (delay) {
		clearTimeout(delay);
	}
	delay = setTimeout(function() {
		popSound.play();
		if (myImage.style.width == "41px") {
			myImage.style.transition = "all linear 0.1s";
			myImage.style.width = "115px";
			myImage.style.top = '50%';
			myImage.style.left = '50%';
			myImage.style.opacity = '1';
		}else {
			myImage.style.transition = 'all cubic-bezier(0.6, -1.1, 0.74, 0.05) 0.3s';
			myImage.style.width = "41px";
			myImage.style.top = '4%';
			myImage.style.left = '9%';
			myImage.style.opacity = '0.3';
		}
	} , 200);
}
myImage.ondblclick = function() {
	clearTimeout(delay);
	morse.play();
}