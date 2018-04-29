var navToggler = document.getElementsByClassName("navigation-toggler")[0];

navToggler.onclick = function() {
	if (document.getElementsByClassName("header-container")[0].style.height == "100%") {
		closeNavigationPanel();
	} else {
		openNavigationPanel();
	}
}

function closeNavigationPanel() {
	document.getElementsByClassName("header-container")[0].style.height = "90px";
}

function openNavigationPanel() {
	document.getElementsByClassName("header-container")[0].style.height = "100%";
}