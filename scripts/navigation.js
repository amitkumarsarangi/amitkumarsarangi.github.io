var navigationContainer = document.getElementsByClassName("navigation-container")[0];
	var eachSection = document.getElementsByClassName("navigation-icon-container")[0].getElementsByTagName("section");

var navOpenFunctionality = false;
var navCloseFunctionality = false;

appearNavPanel();

navigationContainer.onclick = function() {
	if (navOpenFunctionality) {
		navOpenFunctionality = false;
		openNavPanel();
		setTimeout(function() {
			navCloseFunctionality = true;
		} , 2000)
	} else if (navCloseFunctionality) {
		navCloseFunctionality = false;
		closeNavPanel();
		setTimeout(function() {
			navOpenFunctionality = true;
		} , 1000)
	}
}

function appearNavPanel() {
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
	} , 3700);
	setTimeout(function() {
		closeNavPanel();
		document.getElementsByClassName("content-container")[0].style.opacity = "1";
		document.getElementsByClassName("footer-container")[0].style.opacity = "1";
	} , 6200);
	setTimeout(function() {
		navOpenFunctionality = true;
	} , 7000);
}

function openNavPanel() {
	navigationContainer.style.width = "100%";
	setTimeout(function() {
		navigationContainer.style.height = "100%";
	} , 300);
	setTimeout(function() {
		eachSection[5].style.display = "block";
	} , 600);
	setTimeout(function() {
		eachSection[5].style.opacity = "1";
		eachSection[5].style.bottom = "3%";
		eachSection[4].style.bottom = "3%";
	} , 700);
	setTimeout(function() {
		eachSection[4].style.display = "block";
	} , 800);
	setTimeout(function() {
		eachSection[4].style.opacity = "1";
		eachSection[4].style.bottom = "18%";
		eachSection[3].style.bottom = "18%";
	} , 900);
	setTimeout(function() {
		eachSection[3].style.display = "block";
	} , 1000);
	setTimeout(function() {
		eachSection[3].style.opacity = "1";
		eachSection[3].style.bottom = "33%";
		eachSection[2].style.bottom = "33%";
	} , 1100);
	setTimeout(function() {
		eachSection[2].style.display = "block";
	} , 1200);
	setTimeout(function() {
		eachSection[2].style.opacity = "1";
		eachSection[2].style.bottom = "48%";
		eachSection[1].style.bottom = "48%";
	} , 1300);
	setTimeout(function() {
		eachSection[1].style.display = "block";
	} , 1400);
	setTimeout(function() {
		eachSection[1].style.opacity = "1";
		eachSection[1].style.bottom = "63%";
		eachSection[0].style.bottom = "63%";
	} , 1500);
	setTimeout(function() {
		eachSection[0].style.display = "block";
	} , 1600);
	setTimeout(function() {
		eachSection[0].style.opacity = "1";
		eachSection[0].style.bottom = "78%";
	} , 1700);
}

function closeNavPanel() {
	setTimeout(function() {
		for(var i=0; i<eachSection.length; i++) {
			eachSection[i].style.opacity = "0";
		}
	} , 100);
	setTimeout(function() {
		for(var i=0; i<eachSection.length; i++) {
			eachSection[i].style.display = "none";
		}
		navigationContainer.style.height = "8%";
	} , 400);
	setTimeout(function() {
		navigationContainer.style.width = "19%";
		for(var i=0; i<eachSection.length; i++) {
			eachSection[i].style.bottom = "0";
		}
	} , 700);
}