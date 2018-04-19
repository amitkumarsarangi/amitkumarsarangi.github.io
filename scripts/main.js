var topMargin = Math.round((document.getElementsByClassName("height-container")[0].clientHeight - document.getElementsByClassName("main-container")[0].clientHeight) / 2);
if (topMargin > 0) {
	document.getElementsByClassName("main-container")[0].style.marginTop = topMargin + "px";
}

var dropSound = new Audio('assets/sounds/dropSound.wav');

function openLinks(link) {
	dropSound.play();
	window.open(link, '_blank');
}