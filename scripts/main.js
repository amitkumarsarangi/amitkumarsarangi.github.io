var dropSound = new Audio('assets/sounds/dropSound.wav');
var popSound = new Audio('assets/sounds/popSound.wav');

function openLink(link) {
	dropSound.play();
	location.href = link;
	document.getElementsByClassName("content-container")[0].scrollBy(0, -90);
}

function openLinkNewTab(link) {
	popSound.play();
	window.open(link, '_blank');
}