window.addEventListener('click', function (e) {
	if (document.getElementById('clickbox').contains(e.target)) {
		alert("Clicked in Box");
	} else {
		alert("Clicked outside Box");
	}
})