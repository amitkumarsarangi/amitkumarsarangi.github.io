var myNavigation = document.getElementById("myNavigation");
var myFooter = document.getElementById("myFooter");

var dropSound = new Audio('assets/sounds/dropSound.wav');

var navPanelClickable = false;

setTimeout(function() {
	appearNavigationPanel();
} , 2500);
setTimeout(function() {
	showNavigationPanel();
} , 2810);
setTimeout(function() {
	closeNavigationPanel();
} , 3320);

setTimeout(function() {
	navPanelClickable = true;
} , 4000);

myNavigation.onclick = function() {
	if (navPanelClickable) {
		if (myNavigation.style.width == "100%") {
			closeNavigationPanel();
		} else {
			showNavigationPanel();
		}
	}
}

function appearNavigationPanel() {
	setTimeout(function() {
		myNavigation.style.height = "1%";
	} , 10);
	setTimeout(function() {
		myNavigation.style.width = "2%";
	} , 30);
	setTimeout(function() {
		myNavigation.style.height = "2%";
	} , 50);
	setTimeout(function() {
		myNavigation.style.width = "4%";
	} , 70);
	setTimeout(function() {
		myNavigation.style.height = "3%";
	} , 90);
	setTimeout(function() {
		myNavigation.style.width = "6%";
	} , 110);
	setTimeout(function() {
		myNavigation.style.height = "4%";
	} , 130);
	setTimeout(function() {
		myNavigation.style.width = "8%";
	} , 150);
	setTimeout(function() {
		myNavigation.style.height = "5%";
	} , 170);
	setTimeout(function() {
		myNavigation.style.width = "10%";
	} , 190);
	setTimeout(function() {
		myNavigation.style.height = "6%";
	} , 210);
	setTimeout(function() {
		myNavigation.style.width = "13%";
	} , 230);
	setTimeout(function() {
		myNavigation.style.height = "7%";
	} , 250);
	setTimeout(function() {
		myNavigation.style.width = "16%";
	} , 270);
	setTimeout(function() {
		myNavigation.style.height = "8%";
	} , 290);
	setTimeout(function() {
		myNavigation.style.width = "19%";
	} , 310);
}
function showNavigationPanel() {
	dropSound.play();
	setTimeout(function() {
		myFooter.style.opacity = "0";
		myNavigation.style.height = "20%";
	} , 30);
	setTimeout(function() {
		myNavigation.style.width = "20%";
	} , 60);
	setTimeout(function() {
		myNavigation.style.height = "30%";
	} , 90);
	setTimeout(function() {
		myNavigation.style.width = "30%";
	} , 120);
	setTimeout(function() {
		myNavigation.style.height = "40%";
	} , 150);
	setTimeout(function() {
		myNavigation.style.width = "40%";
	} , 180);
	setTimeout(function() {
		myNavigation.style.height = "50%";
	} , 210);
	setTimeout(function() {
		myNavigation.style.width = "50%";
	} , 240);
	setTimeout(function() {
		myNavigation.style.height = "60%";
	} , 270);
	setTimeout(function() {
		myNavigation.style.width = "60%";
	} , 300);
	setTimeout(function() {
		myNavigation.style.height = "70%";
	} , 330);
	setTimeout(function() {
		myNavigation.style.width = "70%";
	} , 360);
	setTimeout(function() {
		myNavigation.style.height = "80%";
	} , 390);
	setTimeout(function() {
		myNavigation.style.width = "80%";
	} , 420);
	setTimeout(function() {
		myNavigation.style.height = "90%";
	} , 450);
	setTimeout(function() {
		myNavigation.style.width = "90%";
	} , 480);
	setTimeout(function() {
		myNavigation.style.height = "100%";
		myNavigation.style.width = "100%";
	} , 510);
}
function closeNavigationPanel() {
	dropSound.play();
	setTimeout(function() {
		myFooter.style.transition = "all linear 1.5s";
		myFooter.style.opacity = "1";
		myNavigation.style.height = "90%";
	} , 30);
	setTimeout(function() {
		myNavigation.style.width = "90%";
	} , 60);
	setTimeout(function() {
		myNavigation.style.height = "80%";
	} , 90);
	setTimeout(function() {
		myNavigation.style.width = "80%";
	} , 120);
	setTimeout(function() {
		myNavigation.style.height = "70%";
	} , 150);
	setTimeout(function() {
		myNavigation.style.width = "70%";
	} , 180);
	setTimeout(function() {
		myNavigation.style.height = "60%";
	} , 210);
	setTimeout(function() {
		myNavigation.style.width = "60%";
	} , 240);
	setTimeout(function() {
		myNavigation.style.height = "50%";
	} , 270);
	setTimeout(function() {
		myNavigation.style.width = "50%";
	} , 300);
	setTimeout(function() {
		myNavigation.style.height = "40%";
	} , 330);
	setTimeout(function() {
		myNavigation.style.width = "40%";
	} , 360);
	setTimeout(function() {
		myNavigation.style.height = "30%";
	} , 390);
	setTimeout(function() {
		myNavigation.style.width = "30%";
	} , 420);
	setTimeout(function() {
		myNavigation.style.height = "20%";
	} , 450);
	setTimeout(function() {
		myNavigation.style.width = "20%";
	} , 480);
	setTimeout(function() {
		myNavigation.style.height = "8%";
		myNavigation.style.width = "19%";
	} , 510);
}