var myImage = document.getElementById("myImage");

var popSound = new Audio('assets/sounds/popSound.wav');

setTimeout(function() {
	myImage.style.transition = "all linear 0.1s";
	myImage.style.opacity = '0.0';
	myImage.style.display = 'block';
} , 500);
setTimeout(function() {
	myImage.style.opacity = '0.3';
	myImage.style.width = '300px';
	popSound.play();
} , 1000);
setTimeout(function() {
	myImage.style.transition = 'all linear 0.5s';
	myImage.style.opacity = '1.0';
	myImage.style.width = '115px';
} , 1200);
setTimeout(function() {
	myImage.style.transition = 'all cubic-bezier(0.6, -1.1, 0.74, 0.05) 0.5s';
	myImage.style.opacity = '0.3';
	myImage.style.width = '41px';
	myImage.style.top = '4%';
	myImage.style.left = '9%';
} , 2000);