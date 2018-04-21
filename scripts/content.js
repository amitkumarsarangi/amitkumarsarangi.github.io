var contentContainer = document.getElementsByClassName("content-container")[0];

var aboutMeContent = [
	'<p>Hello and warm greetings from Amit and thanks a lot for stopping by his lovingly handcrafted site. This website is an expression of his digital side and an open ground for showcasing his acumen in various web technologies.</p>'
,	'<p>He is a JavaScript zealot and a JSON enthusiast. He cannot express enough how much he enjoys learning web technologies and languages like python, JavaScript, Sass, React, MySql, MongoDB, Git and others.</p>'
,	'<p>Solving coding challenges is his nice way of spending time. And when he is not busy coding, he is playing this <span class="linker" id="http://gameaboutsquares.com/" onclick="openLinks(this.id)">Game about Squares</span>.</p>'
,	'<p>Do check out his various <span class="linker" onclick="getContent(skillsContent)">interests and skills</span> that he keeps polishing.</p>'
,	'<p>In case you feel like talking to him or if you have something to enquire about, please feel free to use the <span class="linker" onclick="getContent(contactContent)">contact form</span>.</p>'
,	'<h1><i class="icon ion-social-html5-outline"></i> <i class="icon ion-heart"></i> <i class="icon ion-social-css3-outline"></i></h1>'
];

var skillsContent = [
	'<h1>Skills and Interests</h1>'
,	'<p>In addition to having a good understanding of web-related technologies, he is a quick learner with excellent analytical, written and verbal communication skills.</p>'
,	'<p>He is constantly learning new and newer technologies.</p>'
,	'<p>Have a look at his technology stack below. Want to build something useful? <span class="linker" onclick="getContent(contactContent)">Get in touch</span> with him.</p>'
,	'<p></p>'
,	'<p>'
,	'<img src="assets/logos/python.svg" title="Python">'
,	'<img src="assets/logos/JS_Unofficial.svg" title="JavaScript">'
,	'<img src="assets/logos/angular.svg" title="Angular">'
,	'<img src="assets/logos/react.svg" title="React">'
,	'<img src="assets/logos/D3.svg" title="D3">'
,	'<img src="assets/logos/bootstrap.svg" title="Bootstrap">'
,	'<img src="assets/logos/foundation.svg" title="Foundation">'
,	'<img src="assets/logos/sass.svg" title="Sass">'
,	'<img src="assets/logos/MySQL.svg" title="MySQL">'
,	'<img src="assets/logos/MongoDB.svg" title="MongoDB">'
,	'</p>'
];

var scribblesContent = [
	'<h1>Scrawls n Scribbles</h1>'
,	'<p>It is often wise to keep scribbling. It keeps him updated and wanting to learn more. Below are some small projects that he created to keep himself busy.</p>'
,	'<h2>Some featured JavaScript ones</h2>'
,	'<h2>Some featured CSS ones</h2>'
,	'<h2>The freeCodeCamp ones</h2>'
,	'<p id="https://amitkumarsarangi.github.io/Build-a-Wikipedia-Viewer/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build a Wikipedia Viewer</p>'
,	'<p id="https://amitkumarsarangi.github.io/Build-a-Random-Quote-Machine/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build a Random Quote Machine</p>'
,	'<p id="https://amitkumarsarangi.github.io/Build-a-Personal-Portfolio-Webpage/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build a Personal Portfolio Webpage</p>'
,	'<p id="https://amitkumarsarangi.github.io/Build-a-Tribute-Page/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build a Tribute Page</p>'
,	'<h2>And the rest of all</h2>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/Two-Player-Tic-Tac-Toe/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Two Player Tic Tac Toe<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Three-Concentric-Arches/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Three Concentric Arches<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/A-Rotating-Pyramid/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Rotating Pyramid<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/A-Countdown-Timer/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Countdown Timer<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/A-Rotating-Prism/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Rotating Prism<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/A-Rotating-Cube/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Rotating Cube<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/A-Stopwatch-Timer/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Stopwatch Timer<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Youtube-Play-Pause-Button/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Youtube Play-Pause Button<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/A-JS-Analog-Clock/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A JS Analog Clock<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Double-Helix/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Double Helix<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/A-JS-Digital-Clock/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A JS Digital Clock<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Night-Vision-Slider/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Night Vision Slider<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/A-Surfer-Preloader/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Surfer Preloader<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Night-Vision/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Night Vision<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/A-Bouncing-Dot-Preloader/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Bouncing Dot Preloader<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/A-Preloader-Animation/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Preloader Animation<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/A-Location-Preloader/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Location Preloader<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/Simple-Smooth-Scroller/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Simple Smooth Scroller<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/A-Preloader-Animation/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Bubble Preloader<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/Simple-To-Do-List/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Simple To-Do List<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Image-Border-For-Image/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Image Border for Image<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/A-Venice-Postcard/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Venice Postcard<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/Simple-Image-Slider/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Simple Image Slider<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Three-Rotating-Squares/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Three Rotating Squares<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-JS/Custom-Alert-Dialog-Box/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Custom Alert Dialog Box<sup>(JS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Show-Your-Stack/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Show Your Stack<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Simple-Landing-Page/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Simple Landing Page<sup>(CSS)</sup></p>'
,	'<p id="https://amitkumarsarangi.github.io/Scrawls-n-Scribbles-CSS/Learn-HTML5-Website/main.html" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Learn HTML5 Website<sup>(CSS)</sup></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Night-Vision/" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Night Vision <sub>(CSS3)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Basic-Multiplication-Game/" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Basic Multiplication Game <sub>(JavaScript | CSS3)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Digital-Clock/" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Digital Clock <sub>(CSS3)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Build-A-Simon-Game/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build A Simon Game <sub>(JavaScript | CSS3) (freeCodeCamp)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Build-A-Tic-Tac-Toe-Game/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build A Tic Tac Toe Game <sub>(JavaScript | CSS3) (freeCodeCamp)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Build-A-Pomodoro-Clock/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build A Pomodoro Clock <sub>(JavaScript | CSS3) (freeCodeCamp)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Build-A-JavaScript-Calculator/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build A JavaScript Calculator <sub>(JavaScript | CSS3) (freeCodeCamp)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Basic-Video-Player/" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Basic Video Player <sub>(JavaScript | CSS3)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/A-Surfer-Preloader/" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; A Surfer Preloader <sub>(JavaScript | CSS3)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Show-Code-School-Badges/" style="color:#4cadc1;cursor:pointer" onclick="displayProject(this.id)">&#10085; Show Code School Badges <sub>(jQuery | CSS3 | Bootstrap) (Code School)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Quick-Reaction-Required/" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Quick Reaction Required <sub>(JavaScript | CSS3)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Custom-Alert-Dialog-Box/" style="cursor:pointer" onclick="displayProject(this.id)">&#10085; Custom Alert Dialog Box <sub>(JavaScript | CSS3)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Build-A-Technical-Documentation-Page/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build A Technical Documentation Page <sub>(CSS3 | HTML5) (freeCodeCamp)</sub></p>'
// ,	'<p id="https://amitkumarsarangi.github.io/Build-A-Survey-Form/" style="color:#006400;cursor:pointer" onclick="displayProject(this.id)">&#10085; Build A Survey Form <sub>(CSS3 | HTML5) (freeCodeCamp)</sub></p>'
];

var algorithmsContent = [
	'<h1>Algorithms</h1>'
];

var postsContent = [
	'<h1>Recent Posts</h1>'
,	'<p id="https://medium.com/@sarangiamitkumar/a-review-of-a-course-by-the-stanford-life-design-lab-1cb610a5de49" style="cursor:pointer" onclick="openLinks(this.id)">&raquo; A Review of a course by the Stanford Life Design Lab</p>'
,	'<p id="https://medium.com/@sarangiamitkumar/tried-and-tested-searching-strategies-for-google-search-engine-f87e2e357c45" style="cursor:pointer" onclick="openLinks(this.id)">&raquo; Tried and Tested Searching Strategies for Google Search Engine</p>'
,	'<p id="https://medium.com/@sarangiamitkumar/y-learn-to-code-ce0f222ee3c4" style="cursor:pointer" onclick="openLinks(this.id)">&raquo; Y Learn to CODE</p>'
];

var contactContent = [
	'<h1>Get In Touch</h1>'
,	'<p>Please use this contact form to send him a message. If not heavily engaged, he usually gets in touch very quickly.</p>'
,	'<form method="POST" action="https://formspree.io/amitsarangi44@gmail.com">'
,	'<p><textarea name="find_me" placeholder="How did you find me?" rows="1" cols="35"></textarea></p>'
,	'<p><input type="text" name="full_name" placeholder="What is your name?" size="40" required></p>'
,	'<p><input type="email" name="email_id" placeholder="What is your email id?" size="40" required></p>'
,	'<p><input type="url" name="website" placeholder="Where can I visit your webpage?" size="40"></p>'
,	'<p><textarea name="message_subject" placeholder="Subject." rows="1" cols="35"></textarea></p>'
,	'<p><textarea name="message_body" placeholder="Your message." rows="4" cols="35"></textarea></p>'
,	'<p></p>'
,	'<p><button type="submit">Submit</button></p>'
,	'</form>'
];

getContent(aboutMeContent);

aboutNav.onclick = function() {
	getContent(aboutMeContent);
}

skillsNav.onclick = function() {
	getContent(skillsContent);
}

scribblesNav.onclick = function() {
	getContent(scribblesContent);
}

algorithmsNav.onclick = function() {
	getContent(algorithmsContent);
}

postsNav.onclick = function() {
	getContent(postsContent);
}

contactNav.onclick = function() {
	getContent(contactContent);
}

function getContent(arr) {
	var temp = '';
	for (var i=0; i < arr.length; i++) {
		temp += arr[i];
	}
	contentContainer.innerHTML = temp;
}