var y, x, xy, xy3, codeMirror, codeMirrorValue;
var isLocked = false;
//+ countSpaces :: String, Number -> Number
function countSpaces(str, mode) {
	if (str.substring(0, 2) == "  " && mode == 1) {
		return 1 + countSpaces(str.substring(2, str.length), 1);
	}
	else if (str.substring(0, 1) == "	" && mode == 2) {
		return 1 + countSpaces(str.substring(1, str.length), 2);
	}
	else {
		return 0;
	}
}

function statusline(a, b) {
	document.getElementById("statusline").innerHTML = "<span style='color:" + (b || "#000000") + ";'>" + a + "</span>", window.status = a, document.title = "Tryit Editor v1.6.1 - " + a;
}

function toggleCodeMirror() {
	if (document.getElementById("syntaxHilite").checked) {
		(document.body.getElementsByClassName("CodeMirror")[0].style.display = "none", document.getElementById("code1").style.display = "block");
		var splittedText = codeMirror.getValue().split("\n");
		var numOfTabsPerLine = new Array();
		for (var i = 0; i < splittedText.length; i++) {
			numOfTabsPerLine[i] = countSpaces(splittedText[i], 1);
		}
		for (var i = 0; i < splittedText.length; i++) {
			splittedText[i] = splittedText[i].substring((2 * numOfTabsPerLine[i]), splittedText[i].length);
			for (var k = 0; k < numOfTabsPerLine[i]; k++) {
				splittedText[i] = "\t" + splittedText[i];
			}
		}
		document.getElementById("code1").value = splittedText.join("\n");
		document.getElementById("editorLabel").innerHTML = "Enable syntax highlighting";
	}
	else {
		(document.body.getElementsByClassName("CodeMirror")[0].style.display = "block", document.getElementById("code1").style.display = "none");
		var splittedText = document.getElementById("code1").value.split("\n");
		var numOfTabsPerLine = new Array();
		for (var i = 0; i < splittedText.length; i++) {
			numOfTabsPerLine[i] = countSpaces(splittedText[i], 2);
		}
		for (var i = 0; i < splittedText.length; i++) {
			for (var k = 0; k < numOfTabsPerLine[i]; k++) {
				splittedText[i] = splittedText[i].substring(1, splittedText[i].length);
				splittedText[i] = "  " + splittedText[i];
			}
		}
		codeMirror.setValue(splittedText.join("\n"));
		document.getElementById("editorLabel").innerHTML = "Disable syntax highlighting";
	}
}

function startit() {
	document.getElementById("syntaxHilite").checked ? (view.document.open(), view.document.write(document.getElementById("code1").value), view.document.close(), document.getElementById("titletext").innerHTML = "Page Title:&nbsp;" + view.document.title) : (view.document.open(), view.document.write(codeMirror.getValue()), view.document.close(), document.getElementById("titletext").innerHTML = "Page Title:&nbsp;" + view.document.title);
}

function disenable() {
	var a = document.getElementById("disunable").checked,
		b = document.getElementById("titletext");
	a ? (document.getElementById("titletext").style.visibility = "hidden") : (document.getElementById("titletext").style.visibility = "visible");
	a ? (document.getElementById("titleLabel").innerHTML = "Enable title") : (document.getElementById("titleLabel").innerHTML = "Disable title");
	
}

function reset() {
	(document.getElementById("code1").value = '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>\n\t\t\tHello World\n\t\t</title>\n\t\t<script type="text/javascript">\n\t\t\t\n\t\t</script>\n\t\t<style>\n\t\t\th1 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<h1>\n\t\t\tHello World!\n\t\t</h1>\n\t\t<p>\n\t\t\tThis is a test page\n\t\t</p>\n\t</body>\n</html>', codeMirror.setValue('<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>\n\t\t\tHello World\n\t\t</title>\n\t\t<script type="text/javascript">\n\t\t\t\n\t\t</script>\n\t\t<style>\n\t\t\th1 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<h1>\n\t\t\tHello World!\n\t\t</h1>\n\t\t<p>\n\t\t\tThis is a test page\n\t\t</p>\n\t</body>\n</html>'), statusline("code reset", "green"));
}

function save(code) {
	var b = new Blob([code]);
	saveAs(b, "untitled.html");
}

function lock() {
	if (document.getElementById("code1").disabled == 0) y = prompt("Enter a password to protect your work", ""), y !== null ? (document.getElementById("code1").disabled = !0, view.document.open(), view.document.write(""), view.document.close(), document.getElementById("titletext").innerText = "Page Title:", xy = document.getElementById("code1").value, document.getElementById("code1").value = "", document.getElementById("disunable").disabled = !0, document.getElementById("syntaxHilite").disabled = !0, document.getElementById("reset").disabled = !0, document.getElementById("save").disabled = !0, document.getElementById("restore").disabled = !0, document.getElementById("submit").disabled = !0, document.getElementById("unlock").innerHTML = "Unlock code panel", statusline("code panel locked", "green"), codeMirrorValue = codeMirror.getValue(), codeMirror.setValue(""), codeMirror.setOption("readOnly", !0)) : statusline("error: canceled locking", "red");
	else {
		var a = prompt("Enter password to unlock", "");
		a == y ? (document.getElementById("code1").disabled = !1, document.getElementById("code1").value = xy, document.getElementById("syntaxHilite").disabled = !1, document.getElementById("disunable").disabled = !1, document.getElementById("reset").disabled = !1, document.getElementById("save").disabled = !1, document.getElementById("restore").disabled = !1, document.getElementById("submit").disabled = !1, codeMirror.setValue(codeMirrorValue), codeMirror.setOption("readOnly", !1), startit(), document.getElementById("unlock").innerHTML = "Lock code panel", statusline("code panel unlocked", "green")) : statusline("error: incorrect password", "red");
	}
}


function init() {
document.getElementById("code1").value = '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>\n\t\t\tHello World\n\t\t</title>\n\t\t<script type="text/javascript">\n\t\t\t\n\t\t</script>\n\t\t<style>\n\t\t\th1 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<h1>\n\t\t\tHello World!\n\t\t</h1>\n\t\t<p>\n\t\t\tThis is a test page\n\t\t</p>\n\t</body>\n</html>';
	if (location.search != null || location.search != "") {
		var a = location.search;
		a = a.split("%0A"), a = a.join("\n");
		if (a.indexOf("?") != -1) {
			var b = a.split("?");
			a = "";
			for (var c = 0; c < b.length; c++) b[c] = unescape(b[c]);
			for (var c = 1; c < b.length; c++) a += b[c];
			document.getElementById("code1").value = a.substring(1, a.length);
		}
	}
	statusline("ready"), setInterval('document.getElementById("titletext").innerHTML="Page Title:&nbsp;"+view.document.title;', 500), codeMirror = CodeMirror.fromTextArea(document.getElementById("code1"), {
		lineNumbers: !0,
		matchBrackets: !0,
		lineWrapping: !0,
		mode: "text/html",
		tabSize: 2,
		wordWrap: true,
		autoCloseTags: true
	});
	var d = codeMirror.addLineClass(0, "background", "activeline");
	codeMirror.on("cursorActivity", function() {
		var cur = codeMirror.getLineHandle(codeMirror.getCursor().line);
		if (d != cur) {
			codeMirror.removeLineClass(d, "background", "activeline"), d = codeMirror.addLineClass(cur, "background", "activeline");
		}
		codeMirror.matchHighlight("CodeMirror-matchhighlight");
	});
	codeMirror.setOption("theme", "eclipse"), startit();
	document.getElementById("code1").addEventListener("keydown", function (e) {
		if (e.keyCode == 9) {
			e.preventDefault();
			var t = e.target;
			var ss = t.selectionStart;
			var se = t.selectionEnd;
			t.value = t.value.slice(0, ss).concat("\t").concat(t.value.slice(ss, t.value.length));
			if (ss == se) {
				t.selectionStart = t.selectionEnd = ss + 1;
			} else {
				t.selectionStart = ss + 1;
				t.selectionEnd = se + 1;
			};
		};
	}, false);
	var paragraph = document.createElement("p");
	paragraph.innerHTML = "Tryit Editor v1.6.1 &copy; 2010-2013 by Kevin Zhou.";
	document.body.appendChild(paragraph);
}
window.onload = init;
window.addEventListener("keydown", function (e) {
	if (e.which == 112) {
		e.preventDefault();
		alert("Tryit Editor v1.6\nCopyright 2010-2013, Kevin Zhou\nReleased under Creative Commons Attribution-NoDerivs 3.0 Unported (CC BY-ND 3.0).");
	}
}, false);