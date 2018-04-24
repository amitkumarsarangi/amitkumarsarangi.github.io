var projectDisplay = document.getElementById("projectDisplay");
	var projectDisplayScreen = document.getElementById("projectDisplayScreen");
	var projectDisplayCloseButton = document.getElementById("projectDisplayCloseButton");
	var projectDisplayBackButton = document.getElementById("projectDisplayBackButton");
	var projectDisplayForwardButton = document.getElementById("projectDisplayForwardButton");
	var projectOpenNewTab = document.getElementById("projectOpenNewTab");

var tabLink = '';

var histLen = 0;
var backCounter = 0;
var forwardCounter = 0;

projectDisplayCloseButton.onclick = function() {
	removeProject();
	doExitFullscreen();
}

projectDisplayBackButton.onclick = function() {
	if ((histLen < projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length) && (backCounter < (projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length - histLen))) {
		projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.back();
		backCounter += 1;
		forwardCounter -= 1;
	}
}

projectDisplayForwardButton.onclick = function() {
	if ((histLen < projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length) && (forwardCounter < (projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length - histLen))) {
		projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.forward();
		forwardCounter += 1;
		backCounter -= 1;
	}
}

projectOpenNewTab.onclick = function() {
	removeProject();
	window.open(tabLink, '_blank');
	tabLink = '';
}

function displayProject(link) {
	projectDisplayScreen.innerHTML = "<iframe src='" + link + "'></iframe>";
	projectDisplay.style.display = 'block';
	tabLink = link;
	histLen = projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length;
	backCounter = 0;
	forwardCounter = 0;
	doEnterFullscreen(document.body);
	dropSound.play();
}

function doEnterFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

function doExitFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

function removeProject() {
	projectDisplayScreen.innerHTML = "";
	projectDisplay.style.display = 'none';
	dropSound.play();
}