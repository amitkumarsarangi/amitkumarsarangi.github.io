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

// Below this line - getContent functionality -
var contactArray = [
					'<form class="section-form" method="POST" action="https://formspree.io/amitsarangi44@gmail.com">'
					,'<input type="text" name="full_name" placeholder="What is your name?" size="40" required>'
					,'<input type="email" name="email_id" placeholder="What is your email id?" size="40" required>'
					,'<textarea name="find_me" placeholder="How did you find me?" rows="2" cols="35"></textarea>'
					,'<input type="url" name="website" placeholder="Where can I visit your webpage?" size="40">'
					,'<textarea name="message_subject" placeholder="Subject." rows="1" cols="35"></textarea>'
					,'<textarea name="message_body" placeholder="Your message." rows="3" cols="35"></textarea>'
					,'<button type="submit">Submit</button>'
					,'</form>'
				];
function getContent(arr) {
	dropSound.play();
}
// Above this line - getContent functionality -