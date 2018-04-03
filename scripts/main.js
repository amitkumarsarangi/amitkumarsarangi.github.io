window.onload = function() {
	var topMargin = Math.round((document.getElementById("getHeightDiv").clientHeight - document.getElementById("outermostContainer").clientHeight) / 2);
	if (topMargin > 0) {
		outermostContainer.style.marginTop = topMargin + 'px';
	}

	setTimeout(function() {
		document.body.style.transition = "all linear 0.7s";
		document.body.style.backgroundColor = "#f0f0f0";
	} , 500);
}

var aboutMeContent = [
						'<h1>About Me</h1>'
					,	'<p>Warm greetings from Amit and thanks a lot for stopping by this site. This website is an expression of my digital side and an open ground for showcasing my acumen in various web technologies.</p>'
					,	'<p>I am a JavaScript zealot and a JSON enthusiast. I cannot express enough how much I enjoy learning web technologies and languages like JavaScript, Python, Sass, React, MySql, MongoDB, Git and others.</p>'
					,	'<p>Solving coding challenges is a nice way for passing the time. And when I am not busy coding, I am playing this <a href="http://gameaboutsquares.com/" target="_blank" accesskey="g">Game about Squares</a>.</p>'
					,	'<p>Do check out my various interests and skills that I keep polishing.</p>'
					,	'<p>In case you feel like talking to me or if you have something to enquire about, please feel free to use the contact form.</p>'
];

var skillsContent = [
						'<h1>Skills and Interests</h1>'
					,	'<p>In addition to having a good understanding of web-related technologies, I am a quick learner with excellent analytical, written and verbal communication skills.</p>'
					,	'<p>I am constantly learning new and newer technologies.</p>'
					,	'<p>Have a look at my technology stack below. Want to build something useful? Let us get in touch.</p>'
					,	'<p></p>'
					,	'<p>'
					,	'<img src="assets/logos/python.svg" title="Python" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/JS_Unofficial.svg" title="JavaScript" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/angular.svg" title="Angular" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/react.svg" title="React" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/D3.svg" title="D3" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/bootstrap.svg" title="Bootstrap" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/foundation.svg" title="Foundation" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/sass.svg" title="Sass" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/MySQL.svg" title="MySQL" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'<img src="assets/logos/MongoDB.svg" title="MongoDB" style=" margin: 0 25px 25px 0; height: 30px;">'
					,	'</p>'
];

var scribblesContent = [
						'<h1>Scrawls n Scribbles</h1>'
					,	'<p>It is often wise to keep scribbling. It keeps me updated and wanting to learn more. Below are all the small projects that I have created to keep myself busy.</p>'
					,	'<h2>Some featured ones</h2>'
					,	'<p>&#10085;</p>'
					,	'<p>&#10085;</p>'
					,	'<p>&#10085;</p>'
					,	'<h2>And the rest of all</h2>'
					,	'<p>&#10085;</p>'
					,	'<p>&#10085;</p>'
					,	'<p>&#10085;</p>'
					,	'<p id="https://amitkumarsarangi.github.io/Build-A-Tribute-Page/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build A Tribute Page <sub>(HTML5 | CSS3) (freeCodeCamp)</sub></p>'
];

var algorithmsContent = [
						'<h1>Algorithms</h1>'
];

var postsContent = [
						'<h1>Recent Posts</h1>'
];

var contactContent = [
						'<h1>Get In Touch</h1>'
					,	'<p>Please use this contact form to send me a message. If not heavily engaged, I usually get in touch very quickly.</p>'
					,	'<form method="POST" action="https://formspree.io/amitsarangi44@gmail.com">'
					,	'<p><textarea name="find_me" placeholder="How did you find me?" rows="1" cols="35"></textarea></p>'
					,	'<p><input type="text" name="full_name" placeholder="What is your name?" size="40" required></p>'
					,	'<p><input type="email" name="email_id" placeholder="What is your email id?" size="40" required></p>'
					,	'<p><input type="url" name="website" placeholder="Where can I visit your webpage?" size="40"></p>'
					,	'<p><textarea name="message_subject" placeholder="Subject." rows="1" cols="35"></textarea></p>'
					,	'<p><textarea name="message_body" placeholder="Your message." rows="4" cols="35"></textarea></p>'
					,	'<p><button type="submit">Submit</button></p>'
					,	'</form>'
];

var myContent = document.getElementById("myContent");
	var aboutNav = document.getElementById("aboutNav");
	var skillsNav = document.getElementById("skillsNav");
	var scribblesNav = document.getElementById("scribblesNav");
	var algorithmsNav = document.getElementById("algorithmsNav");
	var postsNav = document.getElementById("postsNav");
	var contactNav = document.getElementById("contactNav");

setTimeout(function() {
	myContent.innerHTML = getContent(aboutMeContent);
} , 4200);

aboutNav.onclick = function() {
	myContent.innerHTML = getContent(aboutMeContent);
}

skillsNav.onclick = function() {
	myContent.innerHTML = getContent(skillsContent);
}

scribblesNav.onclick = function() {
	myContent.innerHTML = getContent(scribblesContent);
}
algorithmsNav.onclick = function() {
	myContent.innerHTML = getContent(algorithmsContent);
}
postsNav.onclick = function() {
	myContent.innerHTML = getContent(postsContent);
}
contactNav.onclick = function() {
	myContent.innerHTML = getContent(contactContent);
}

// script related to the footer section below this line...
var myLinkedin = document.getElementById("myLinkedin");
myLinkedin.onclick = function() {
	dropSound.play();
	location.href = "";
}
var myGithub = document.getElementById("myGithub");
myGithub.onclick = function() {
	dropSound.play();
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