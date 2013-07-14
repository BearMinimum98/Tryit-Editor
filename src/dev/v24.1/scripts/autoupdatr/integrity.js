var integrity = true;
if (navigator.onLine || md5) {
	if (localStorage.resources) {
		var resources = localStorage.resources.split(";");
		for (var i = 0; i < resources.length - 1; i++) {
			if (hex_md5(localStorage[resources[i]]) != manifest.md5[resources[i]]) {
				integrity = false;
			}
		}
	}
}

if (!integrity) {
	alert("Files were modified (and/or minor update released). File cache has been cleared. Page will now reload to download files.");
	localStorage.clear();
	location.reload();
}