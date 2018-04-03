var projectDisplay = document.getElementById("projectDisplay");
	var projectDisplayScreen = document.getElementById("projectDisplayScreen");
	var projectDisplayCloseButton = document.getElementById("projectDisplayCloseButton");
	var projectOpenNewTab = document.getElementById("projectOpenNewTab");

projectDisplayCloseButton.onclick = function() {
	removeProject();
}

projectOpenNewTab.onclick = function() {
	removeProject();
}

function displayProject(link) {
	projectDisplayScreen.innerHTML = "<iframe src='" + link + "'></iframe>";
	projectOpenNewTab.innerHTML = '<a href="' + link + '" target="_blank"><i class="fas fa-external-link-alt"></i></a>';
	projectDisplay.style.display = 'block';
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