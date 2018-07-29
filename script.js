// Below this line - openLink and openLinkNewTab functionality -
var dropSound = new Audio('assets/sounds/dropSound.wav');
var popSound = new Audio('assets/sounds/popSound.wav');

function openLink(link) {
	dropSound.play();
	location.href = link;
}

function openLinkNewTab(link) {
	popSound.play();
	window.open(link, '_blank');
}
// Above this line - openLink and openLinkNewTab functionality -

// Below this line - displayProject functionality -
var lnk = "";
function displayProject(link) {
	document.getElementsByClassName("project-container")[0].getElementsByTagName("iframe")[0].setAttribute("src", link);
	document.getElementsByClassName("project-container")[0].style.display = "block";
	setTimeout(function() {
		document.getElementsByClassName("project-container")[0].style.opacity = "1";
		lnk = link;
	} , 1000);
	console.log(window.history);
}

document.getElementsByClassName("project-container-controls")[0].getElementsByTagName("div")[0].onclick = function() {
	document.getElementsByClassName("project-container")[0].style.opacity = "0";
	setTimeout(function() {
		document.getElementsByClassName("project-container")[0].style.display = "none";
		document.getElementsByClassName("project-container")[0].getElementsByTagName("iframe")[0].setAttribute("src", "");
	} , 1000);
	window.history = null;
}

document.getElementsByClassName("project-container-controls")[0].getElementsByTagName("div")[1].onclick = function() {
	document.getElementsByClassName("project-container")[0].style.opacity = "0";
	document.getElementsByClassName("project-container")[0].style.display = "none";
	document.getElementsByClassName("project-container")[0].getElementsByTagName("iframe")[0].setAttribute("src", "");
	window.open(lnk, '_blank');
}
// Above this line - displayProject functionality -

// Below this line - freeCodeCampBasicAlgorithmScriptingSolutions functionality -
var freeCodeCampBasicAlgorithmScriptingSolutions = document.getElementById("freeCodeCampBasicAlgorithmScriptingSolutions");
var freeCodeCampBasicAlgorithmScriptingSolutionsArray = document.getElementById("freeCodeCampBasicAlgorithmScriptingSolutionsArray");
freeCodeCampBasicAlgorithmScriptingSolutions.onclick = function() {
	if(freeCodeCampBasicAlgorithmScriptingSolutionsArray.style.display === "block") {
		freeCodeCampBasicAlgorithmScriptingSolutionsArray.style.visibility = "hidden";
		freeCodeCampBasicAlgorithmScriptingSolutionsArray.style.opacity = 0;
		setTimeout(function() {
			freeCodeCampBasicAlgorithmScriptingSolutionsArray.style.display = "none";
		}, 500);
	} else {
		freeCodeCampBasicAlgorithmScriptingSolutionsArray.style.display = "block";
		setTimeout(function() {
			freeCodeCampBasicAlgorithmScriptingSolutionsArray.style.visibility = "visible";
			freeCodeCampBasicAlgorithmScriptingSolutionsArray.style.opacity = 1;
		}, 500);
	}
}
// Above this line - freeCodeCampBasicAlgorithmScriptingSolutions functionality -

// Below this line - navigation functionality -
var navigationToggler = document.getElementsByClassName("navigation-toggler")[0];
var navigationSection = document.getElementsByClassName("navigation-section")[0];
navigationToggler.onclick = function() {
	if(navigationSection.style.bottom === "0%") {
		navigationSection.style.bottom = "-100%";
		navigationToggler.style.transform = "rotateZ(0deg)";
	} else {
		navigationSection.style.bottom = "0%";
		navigationToggler.style.transform = "rotateZ(540deg)";
	}
}
// Above this line - navigation functionality -