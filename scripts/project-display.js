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
}

projectDisplayBackButton.onclick = function() {
	if ((histLen < projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length) && (backCounter < (histLen - projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length))) {
		projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.back();
		backCounter += 1;
		forwardCounter -= 1;
	}
}

projectDisplayForwardButton.onclick = function() {
	if ((histLen < projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length) && (forwardCounter < (histLen - projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.length))) {
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
	dropSound.play();
}

function removeProject() {
	projectDisplayScreen.innerHTML = "";
	projectDisplay.style.display = 'none';
	dropSound.play();
}