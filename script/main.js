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
var floatingContainer = document.getElementsByClassName("floating-container")[0];
var floatingContainerSection = floatingContainer.getElementsByTagName("section")[0];
var floatingContainerDiv = floatingContainer.getElementsByTagName("div")[0];
var contactArray = [
					''
					,'<form class="section-form" method="POST" action="https://formspree.io/amitsarangi44@gmail.com">'
					,'<input type="text" name="full_name" placeholder="What is your name?" size="40" required>'
					,'<input type="email" name="email_id" placeholder="What is your email id?" size="40" required>'
					,'<textarea name="find_me" placeholder="How did you find me?" rows="2" cols="35"></textarea>'
					,'<input type="url" name="website" placeholder="Where can I visit your webpage?" size="40">'
					,'<textarea name="message_subject" placeholder="Subject." rows="1" cols="35"></textarea>'
					,'<textarea name="message_body" placeholder="Your message." rows="3" cols="35"></textarea>'
					,'<button type="submit">Submit</button>'
					,'</form>'
				];
var freeCodeCampBasicAlgorithmScriptingSolutionsArray = [
					''
					,'<p class="section-para" id="https://medium.com/@sarangiamitkumar/freecodecamp-basic-algorithm-scripting-solutions-confirm-the-ending-ac78f7cd4748" onclick="openLinkNewTab(this.id)"><i class="icon ion-code-working"></i> freeCodeCamp Basic Algorithm Scripting Solutions: <span class="linker">Confirm the Ending</span></p>'
					,'<p class="section-para" id="https://medium.com/@sarangiamitkumar/freecodecamp-basic-algorithm-scripting-solutions-return-largest-numbers-in-arrays-39cf40e69858" onclick="openLinkNewTab(this.id)"><i class="icon ion-code-working"></i> freeCodeCamp Basic Algorithm Scripting Solutions: <span class="linker">Return Largest Numbers in Arrays</span></p>'
					,'<p class="section-para" id="https://medium.com/@sarangiamitkumar/freecodecamp-basic-algorithm-scripting-solutions-title-case-a-sentence-d5f6877ce78c" onclick="openLinkNewTab(this.id)"><i class="icon ion-code-working"></i> freeCodeCamp Basic Algorithm Scripting Solutions: <span class="linker">Title Case a Sentence</p>'
					,'<p class="section-para" id="https://medium.com/@sarangiamitkumar/freecodecamp-basic-algorithm-scripting-solutions-find-the-longest-word-in-a-string-b431580464e6" onclick="openLinkNewTab(this.id)"><i class="icon ion-code-working"></i> freeCodeCamp Basic Algorithm Scripting Solutions: <span class="linker">Find the Longest Word in a String</span></p>'
					,'<p class="section-para" id="https://medium.com/@sarangiamitkumar/freecodecamp-basic-algorithm-scripting-solutions-check-for-palindromes-c9032355d2c9" onclick="openLinkNewTab(this.id)"><i class="icon ion-code-working"></i> freeCodeCamp Basic Algorithm Scripting Solutions: <span class="linker">Check for Palindromes</span></p>'
					,'<p class="section-para" id="https://medium.com/@sarangiamitkumar/freecodecamp-basic-algorithm-scripting-solutions-factorialize-a-number-50d1d66ab519" onclick="openLinkNewTab(this.id)"><i class="icon ion-code-working"></i> freeCodeCamp Basic Algorithm Scripting Solutions: <span class="linker">Factorialize a Number</span></p>'
					,'<p class="section-para" id="https://medium.com/@sarangiamitkumar/freecodecamp-basic-algorithm-scripting-solutions-reverse-a-string-dafd3f21c172" onclick="openLinkNewTab(this.id)"><i class="icon ion-code-working"></i> freeCodeCamp Basic Algorithm Scripting Solutions: <span class="linker">Reverse a String</span></span></p>'
				];
function getContent(arr) {
	var temp = "";
	for(var i = 0; i < arr.length; i++) {
		temp += arr[i];
	}
	floatingContainerSection.innerHTML = temp;
	floatingContainer.style.display = "block";
	setTimeout(function() {
		floatingContainer.style.opacity = 1;
	}, 500);
	dropSound.play();
}
floatingContainerDiv.onclick = function() {
	floatingContainer.style.opacity = 0;
	setTimeout(function() {
		floatingContainer.style.display = "none";
	}, 500);
	dropSound.play();
}
// Above this line - getContent functionality -

// Below this line - navigation functionality -
var navigationToggler = document.getElementsByClassName("navigation-toggler")[0];
var navigationSection = document.getElementsByClassName("navigation-section")[0];
navigationToggler.onclick = function() {
	if(navigationSection.style.bottom === "0%") {
		navigationSection.style.bottom = "-100%";
	} else {
		navigationSection.style.bottom = "0%";
	}
}
// Above this line - navigation functionality -