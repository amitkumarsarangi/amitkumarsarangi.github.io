var projectDisplay = document.getElementById("projectDisplay");
	var projectDisplayScreen = document.getElementById("projectDisplayScreen");
	var projectDisplayCloseButton = document.getElementById("projectDisplayCloseButton");
	var projectOpenNewTab = document.getElementById("projectOpenNewTab");

var tabLink = '';

projectDisplayCloseButton.onclick = function() {
	removeProject();
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

// below function is for opening recent posts in a new tab...
function openPosts(link) {
	window.open(link, '_blank');
}