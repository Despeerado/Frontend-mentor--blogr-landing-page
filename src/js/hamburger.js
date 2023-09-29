const hamburger = document.querySelector(".hamburger");

document.addEventListener("DOMContentLoaded", () => {
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("is-active");
	});
});