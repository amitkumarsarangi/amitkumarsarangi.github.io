var navigationContainer = document.getElementsByClassName("navigation-container")[0];
	var navigationIconContainer = document.getElementsByClassName("navigation-icon-container")[0];

var beginNavFunctionality = false;
var navOpenFunctionality = true;
var navCloseFunctionality = false;

setTimeout(function() {
	navigationContainer.style.display = "block";
	navigationContainer.style.opacity = "0.1";
	navigationContainer.style.borderRadius = "50%";
} , 3000);

setTimeout(function() {
	navigationContainer.style.right = "0";
	navigationContainer.style.opacity = "0.9";
	navigationContainer.style.borderRadius = "0";
} , 3100);

setTimeout(function() {
	openNavPanel();
} , 3500);

setTimeout(function() {
	closeNavPanel();
	document.getElementsByClassName("content-container")[0].style.opacity = "1";
	document.getElementsByClassName("footer-container")[0].style.opacity = "1";
} , 4500);

setTimeout(function() {
	beginNavFunctionality = true;
} , 4600);

navigationContainer.onclick = function() {
	if (beginNavFunctionality) {
		if (navigationContainer.style.width == "100%") {
			closeNavPanel();
		} else {
			openNavPanel();
		}
	}
}

function openNavPanel() {
	if (navOpenFunctionality) {
		dropSound.play();
		navigationContainer.style.width = "100%";
		setTimeout(function() {
			navigationContainer.style.height = "100%";
			navigationIconContainer.style.display = "block";
		} , 300);
		setTimeout(function() {
			navOpenFunctionality = false;
			navCloseFunctionality = true;
		} , 700);
	}
}

function closeNavPanel() {
	if (navCloseFunctionality) {
		dropSound.play();
		navigationContainer.style.height = "8%";
		navigationIconContainer.style.display = "none";
		setTimeout(function() {
			navigationContainer.style.width = "19%";
		} , 300);
		setTimeout(function() {
			navCloseFunctionality = false;
			navOpenFunctionality = true;
		} , 700);
	}
}