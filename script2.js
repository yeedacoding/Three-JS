var divs = document.querySelectorAll(".about");
divs.forEach(function (elm) {
	elm.addEventListener("mouseenter", function () {
		var panel = document.querySelector(".highlight");
		panel.classList.toggle("highlight");
		elm.classList.toggle("highlight");
	});
});

window.addEventListener("keyup", function (e) {
	var panel = document.querySelector(".highlight");
	if (
		(e.keyCode == 37 || e.keyCode == 38) &&
		panel != document.querySelectorAll(".about")[0]
	) {
		panel.previousElementSibling.classList.toggle("highlight");
		panel.classList.toggle("highlight");
	}
	if (
		(e.keyCode == 39 || e.keyCode == 40) &&
		panel != document.querySelectorAll(".about")[5]
	) {
		panel.nextElementSibling.classList.toggle("highlight");
		panel.classList.toggle("highlight");
	}
});

window.focus();

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})