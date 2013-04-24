var integrity = true;
if (localStorage.resources) {
	var resources = localStorage.resources.split(";");
	for (var i = 0; i < resources.length - 1; i++) {
		if (hex_md5(localStorage[resources[i]]) != md5[resources[i]]) {
			integrity = false;
		}
	}
}
else {
	alert("Please open update.html to download files first");
	window.close();
}