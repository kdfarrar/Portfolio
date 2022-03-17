function newWindowAlert() {
	alert("This link will open a new tab. Click OK to continue.");
}

function openMailerAlert() {
	alert("Submitting this form will open your default E-mail application.");
}

button.addEventListener("click", toggleDarkMode);
function toggleDarkMode(darkModeToggle, darkModeToggleWidth) {
  	var body = document.body;

	body.classList.toggle("dark-mode");

	if (darkModeToggle.innerHTML === "Dark Mode") {
		darkModeToggle.innerHTML = "Light Mode";
		darkModeToggle.style.width = "110px";
	}
	else if (darkModeToggle.innerHTML === "Light Mode") {
		darkModeToggle.innerHTML = "Dark Mode";
		darkModeToggle.style.width = "110px";
	}
}

button.addEventListener("click", sendEmail);
function sendEmail() {
	const messageSubject = document.getElementById('subject').value;
	const messageContent = document.getElementById('message').value;

	openMailerAlert();
	window.open('mailto:kdefarrar@gmail.com?subject=' + messageSubject + '&body=' + messageContent);
}
