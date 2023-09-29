const hambuger = document.querySelector(".hamburger");

document.addEventListener("DOMContentLoaded", () => {
	hambuger.addEventListener("click", () => {
		hambuger.classList.toggle("is-active");
	});
});