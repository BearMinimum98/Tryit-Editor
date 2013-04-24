if (localStorage.resources) {
	var resources = localStorage.resources.split(";");
	for (var i = 0; i < resources.length - 1; i++) {
		eval(localStorage[resources[i]]);
	}
}
else {
	alert("Please open update.html to download files first");
	window.close();
}