window.onload = function() {
	var topMargin = Math.round((document.getElementById("getHeightDiv").clientHeight - document.getElementById("outermostContainer").clientHeight) / 2);
	if (topMargin > 0) {
		outermostContainer.style.marginTop = topMargin + 'px';
	}

	setTimeout(function() {
		document.body.style.transition = "all linear 0.7s";
		document.body.style.backgroundColor = "#eeeeee";
	} , 500);
}

var aboutMeContent = [
						'<h1>About Me</h1>'
					,	'<p>Warm greetings from <strong>Amit</strong> and thanks a lot for stopping by this site. This website is an expression of my digital side and an open ground for showcasing my acumen in various web technologies.</p>'
					,	'<p>I am a JavaScript zealot and a JSON enthusiast. I cannot express enough how much I enjoy learning web technologies and languages like JavaScript, Python, Sass, React, MySql, MongoDB, Git and others.</p>'
					,	'<p>Solving coding challenges is a nice way for passing the time. And when I am not busy coding, I am playing this <a href="http://gameaboutsquares.com/" target="_blank" accesskey="g">Game about Squares</a>.</p>'
					,	'<p>Do check out my various interests and skills that I keep polishing.</p>'
					,	'<p>In case you feel like talking to me or if you have something to enquire about, please feel free to use the contact form.</p>'
];

var myContent = document.getElementById("myContent");
setTimeout(function() {
	myContent.innerHTML = getContent(aboutMeContent);
} , 4200);

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

function getContent(arr) {
	var temp = '';
	for (var i=0; i < arr.length; i++) {
		temp += arr[i];
	}
	return temp;
}