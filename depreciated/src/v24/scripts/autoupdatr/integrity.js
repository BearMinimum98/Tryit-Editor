var integrity = true;
if (localStorage.resources) {
	var resources = localStorage.resources.split(";");
	for (var i = 0; i < resources.length - 1; i++) {
		if (hex_md5(localStorage[resources[i]]) != md5[resources[i]]) {
			integrity = false;
		}
	}
}

if (!integrity) {
	alert("Files were modified. File cache has been cleared. Page will now reload to redownload files.");
	localStorage.clear();
	location.reload();
}