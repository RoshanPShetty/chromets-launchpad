document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("myButton");
	if (button) {
		button.addEventListener("click", () => {
			console.log("Button clicked");
		});
	}
});
