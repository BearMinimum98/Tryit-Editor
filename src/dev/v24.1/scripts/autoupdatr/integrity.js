var integrity = true;
if (navigator.onLine || md5) {
	try {
		if (localStorage.resources) {
			var resources = localStorage.resources.split(";");
			for (var i = 0; i < resources.length - 1; i++) {
				if (hex_md5(localStorage[resources[i]]) != manifest.md5[resources[i]]) {
					integrity = false;
				}
			}
		} else {
			if (localStorage.length > (localStorage.resources.split(";").length + 1)) {
				integrity = false;
			}
		}
	} catch (e) {
		integrity = false;
	}
}

if (!integrity) {
	localStorage.clear();
	console.error("Integrity check failed");
	alert("Files were modified (and/or minor update released). File cache has been cleared. Page will now reload to download files.");
	location.reload();
} else {
	console.log("Integrity check complete, file cache OK");
}