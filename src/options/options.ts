document.addEventListener("DOMContentLoaded", () => {
	const saveButton = document.getElementById("saveButton");
	if (saveButton) {
		saveButton.addEventListener("click", () => {
			const input = document.getElementById("optionInput") as HTMLInputElement;
			if (input) {
				chrome.storage.sync.set({ option: input.value }, () => {
					console.log("Option saved");
				});
			}
		});
	}
});
