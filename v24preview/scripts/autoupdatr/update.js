if (localStorage.resources == null || localStorage.resources == "") {
	localStorage.resources = "";
}
if (localStorage.version == null) {
	localStorage.version = 0;
}

if (manifest.version > localStorage.version) {
	localStorage.resources = "";
	for (var i = 0; i < manifest.files.length; i++) {
		var ele = document.createElement("script");
		ele.src = manifest.updatePath + manifest.files[i].path;
		ele.type = "text/javascript";
		document.head.appendChild(ele);
	}
	localStorage.version = manifest.version;
	window.onload = function() {
		for (var i = 0; i < manifest.files.length; i++) {
			localStorage[manifest.files[i].name] = window[manifest.files[i].name];
			localStorage.resources += manifest.files[i].name + ";";
		}
		alert("Updated");
		window.close();
	}
}
else {
	alert("Tryit Editor is up to date.");
	window.close();
}