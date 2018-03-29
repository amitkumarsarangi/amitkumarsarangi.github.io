window.onload = function() {
	var topMargin = Math.round((document.getElementById("getHeightDiv").clientHeight - document.getElementById("outermostContainer").clientHeight) / 2);
	if (topMargin > 0) {
		outermostContainer.style.marginTop = topMargin + 'px';
	}

	setTimeout(function() {
		document.body.style.transition = "all linear 1.1s";
		document.body.style.backgroundColor = "#ffffff";
	} , 250);
}

// script related to the footer section below this line...
var myLinkedin = document.getElementById("myLinkedin");
myLinkedin.onclick = function() {
	location.href = "";
}
var myGithub = document.getElementById("myGithub");
myGithub.onclick = function() {
	location.href = "https://github.com/amitkumarsarangi";
}
// script related to the footer section abve this line...