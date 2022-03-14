function newWindowAlert() {
	alert("This link will open a new tab. Click OK to continue.")
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
