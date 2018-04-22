var projectDisplay = document.getElementById("projectDisplay");
	var projectDisplayScreen = document.getElementById("projectDisplayScreen");
	var projectDisplayCloseButton = document.getElementById("projectDisplayCloseButton");
	var projectDisplayBackButton = document.getElementById("projectDisplayBackButton");
	var projectDisplayForwardButton = document.getElementById("projectDisplayForwardButton");
	var projectOpenNewTab = document.getElementById("projectOpenNewTab");

var tabLink = '';

projectDisplayCloseButton.onclick = function() {
	removeProject();
}

projectDisplayBackButton.onclick = function() {
	projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.back();
}

projectDisplayForwardButton.onclick = function() {
	projectDisplayScreen.getElementsByTagName("iframe")[0].contentWindow.history.forward();
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
	dropSound.play();
}

function removeProject() {
	projectDisplayScreen.innerHTML = "";
	projectDisplay.style.display = 'none';
	dropSound.play();
}