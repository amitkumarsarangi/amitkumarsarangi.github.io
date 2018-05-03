var floatingContainerCloseButton = document.getElementsByClassName("floating-container")[0].getElementsByTagName("div")[0];
floatingContainerCloseButton.onclick = function() {
	document.getElementsByClassName("floating-container")[0].style.opacity = "0";
	setTimeout(function() {
		document.getElementsByClassName("floating-container")[0].style.display = "none";
		dropSound.play();
	} , 500);
}

var contactArray = [
'<form method="POST" action="https://formspree.io/amitsarangi44@gmail.com">'
,	'<input type="text" name="full_name" placeholder="What is your name?" size="40" required>'
,	'<input type="email" name="email_id" placeholder="What is your email id?" size="40" required>'
,	'<textarea name="find_me" placeholder="How did you find me?" rows="2" cols="35"></textarea>'
,	'<input type="url" name="website" placeholder="Where can I visit your webpage?" size="40">'
,	'<textarea name="message_subject" placeholder="Subject." rows="1" cols="35"></textarea>'
,	'<textarea name="message_body" placeholder="Your message." rows="4" cols="35"></textarea>'
,	'<button type="submit">Submit</button>'
,	'</form>'
];

function getContent(arr) {
	var content = "";
	for (var i=0; i<arr.length; i++) {
		content += arr[i];
	}
	document.getElementsByClassName("floating-container")[0].getElementsByTagName("main")[0].innerHTML = content;
	document.getElementsByClassName("floating-container")[0].style.display = "block";
	setTimeout(function() {
		document.getElementsByClassName("floating-container")[0].style.opacity = "1";
		dropSound.play();
	} , 500);
}