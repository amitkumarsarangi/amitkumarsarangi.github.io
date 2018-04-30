var navToggler = document.getElementsByClassName("navigation-toggler")[0];
var canToggle = true;

navToggler.onclick = function() {
	if (document.getElementsByClassName("header-container")[0].style.height == "100%" && canToggle) {
		closeNavigationPanel();
		canToggle = false;
	} else if (canToggle) {
		openNavigationPanel();
		canToggle = false;
	}
}

function openNavigationPanel() {
	document.getElementsByClassName("header-container")[0].style.height = "100%";
	setTimeout(function() {
		document.getElementsByClassName("navigation-panel")[0].classList.add("navigation-panel-t");
	} , 1100);
	setTimeout(function() {
		for (var i=0; i<document.getElementsByClassName("navigation-section").length; i++) {
			document.getElementsByClassName("navigation-section")[i].classList.add("navigation-section-t");
		}
	} , 1100);
	setTimeout(function() {
		for (var i=0; i<document.getElementsByClassName("navigation-label").length; i++) {
			document.getElementsByClassName("navigation-label")[i].classList.add("navigation-label-t");
		}
	} , 1100);
	setTimeout(function() {
		for (var i=0; i<document.getElementsByClassName("navigation-icon").length; i++) {
			document.getElementsByClassName("navigation-icon")[i].classList.add("navigation-icon-t");
		}
	} , 1100);
	setTimeout(function() {
		canToggle = true;
	} , 1300);
}

function closeNavigationPanel() {
	document.getElementsByClassName("header-container")[0].style.height = "90px";
	document.getElementsByClassName("navigation-panel")[0].classList.remove("navigation-panel-t");
	for (var i=0; i<document.getElementsByClassName("navigation-section").length; i++) {
		document.getElementsByClassName("navigation-section")[i].classList.remove("navigation-section-t");
	}
	for (var i=0; i<document.getElementsByClassName("navigation-label").length; i++) {
		document.getElementsByClassName("navigation-label")[i].classList.remove("navigation-label-t");
	}
	for (var i=0; i<document.getElementsByClassName("navigation-icon").length; i++) {
		document.getElementsByClassName("navigation-icon")[i].classList.remove("navigation-icon-t");
	}
	setTimeout(function() {
		canToggle = true;
	} , 1300);
}