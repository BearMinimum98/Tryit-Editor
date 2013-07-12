var y;
var x;
var xy;
var xy3;
var isLocked = false;
var codeMirror;
var codeMirrorValue;

function statusline(msg, color) {
	document.getElementById("statusline").innerHTML = "<span style='color:" + (color||"#000000") + ";'>" + msg + "</span>";
	window.status = msg;
	document.title = "Tryit Editor v1.5 - " + msg;
	if (console) {
		console.log(msg);
	}
}

function toggleCodeMirror() {
	if (document.getElementById("syntaxHilite").checked) {
		document.body.getElementsByClassName("CodeMirror")[0].style.display = "none";
		document.getElementById("code1").style.display = "block";
		document.getElementById("code1").value = codeMirror.getValue();
	}
	else {
		document.body.getElementsByClassName("CodeMirror")[0].style.display = "block";
		document.getElementById("code1").style.display = "none";
		codeMirror.setValue(document.getElementById("code1").value);
	}
}

function startit() {
	if (document.getElementById("syntaxHilite").checked) {
		view.document.open();
		view.document.write(document.getElementById("code1").value);
		view.document.close();
	}
	else {
		view.document.open();
		view.document.write(codeMirror.getValue());
		view.document.close();
	}
}

function disenable() {
	var x = document.getElementById("disunable").checked;
	var y = document.getElementById("titletext");
	if (x) {
		document.getElementById("titletext").style.visibility = "hidden";
	} else {
		document.getElementById("titletext").style.visibility = "visible";
	}
}

function reset() {
	document.getElementById("code1").value = "<html>\n<head>\n<title>Hello World</title>\n<script type=\"text/javascript\">\n</scr" + "ipt>\n<style>\nh1 {text-align:center;}\n</style>\n</head>\n<body>\n<h1>Hello World!</h1>\n<p>This is a test page</p>\n</b" + "ody>\n</" + "html>";
	codeMirror.setValue("<html>\n<head>\n<title>Hello World</title>\n<script type=\"text/javascript\">\n</scr" + "ipt>\n<style>\nh1 {text-align:center;}\n</style>\n</head>\n<body>\n<h1>Hello World!</h1>\n<p>This is a test page</p>\n</b" + "ody>\n</" + "html>");
	startit();
	statusline("code reset", "green");
}

function save() {
	if (document.getElementById("syntaxHilite").checked) {
		localStorage.x = document.getElementById("code1").value;
		statusline("code saved", "green");
	}
	else {
		localStorage.x = codeMirror.getValue();
		statusline("code saved", "green");
	}
}

function restore() {
	if (localStorage.x != null) {
		document.getElementById("code1").value = localStorage.x;
		codeMirror.setValue(localStorage.x);
		statusline("code restored", "green");
	} else {
		statusline("error: you never saved before", "red");
	}
}

function lock() {
	if (document.getElementById("code1").disabled == false) {
		y = prompt("Enter a password to protect your work", "");
		if (y !== null) {
			document.getElementById("code1").disabled = true;
			view.document.open();
			view.document.write("");
			view.document.close();
			document.getElementById("titletext").innerText = "Page Title:";
			xy = document.getElementById("code1").value;
			document.getElementById("code1").value = "";
			document.getElementById("disunable").disabled = true;
			document.getElementById("syntaxHilite").disabled = true;
			document.getElementById("reset").disabled = true;
			document.getElementById("save").disabled = true;
			document.getElementById("restore").disabled = true;
			document.getElementById("submit").disabled = true;
			document.getElementById("unlock").value = "Unlock code panel";
			statusline("code panel locked", "green");
			codeMirrorValue = codeMirror.getValue();
			codeMirror.setValue("");
		} else {
			statusline("error: canceled locking", "red");
		}
	} else {
		var pass = prompt("Enter password to unlock", "");
		if (pass == y) {
			document.getElementById("code1").disabled = false;
			document.getElementById("code1").value = xy;
			document.getElementById("syntaxHilite").disabled = false;
			document.getElementById("disunable").disabled = false;
			document.getElementById("reset").disabled = false;
			document.getElementById("save").disabled = false;
			document.getElementById("restore").disabled = false;
			document.getElementById("submit").disabled = false;
			codeMirror.setValue(codeMirrorValue);
			startit();
			document.getElementById("unlock").value = "Lock code panel";
			statusline("code panel unlocked", "green");
		} else {
			statusline("error: incorrect password", "red");
		}
	}
}

function init() {
	document.getElementById("code1").value = "<html>\n<head>\n<title>Hello World</title>\n<script type=\"text/javascript\">\n</scr" + "ipt>\n<style>\nh1 {text-align:center;}\n</style>\n</head>\n<body>\n<h1>Hello World!</h1>\n<p>This is a test page</p>\n</b" + "ody>\n</" + "html>";
	if (location.search != null || location.search != "") {
		var xxx = location.search;
		if (xxx.indexOf("?") != -1) {
			var splitLocation = xxx.split("?");
			xxx = "";
			for (var i = 0; i < splitLocation.length; i++) {
				splitLocation[i] = unescape(splitLocation[i]);
			}
			for (var i = 1; i < splitLocation.length; i++) {
				xxx += splitLocation[i];
			}
			document.getElementById("code1").value = xxx;
		}
	}
	statusline("ready");
	if (top.location != location) {
		top.location.href = document.location.href;
	}
	setInterval("document.getElementById(\"titletext\").innerHTML=\"Page Title:&nbsp;\"+view.document.title;", 500);
	codeMirror = CodeMirror.fromTextArea(document.getElementById("code1"), {lineNumbers: true, lineWrapping: true, mode: "text/html", tabMode: "indent", onCursorActivity: function() {codeMirror.setLineClass(hlLine, null);hlLine = codeMirror.setLineClass(codeMirror.getCursor().line, "activeline");}});
	var hlLine = codeMirror.setLineClass(0, "activeline");
	codeMirror.setOption("theme", "eclipse");
	startit();
	var paragraph = document.createElement("p");
	paragraph.innerHTML = "Tryit Editor v1.5.5 &copy; 2010-2011 by Kevin Zucchini. If you would like to use my API for customizing the textarea text, click <a href='api.html' title='API'>here</a>";
	document.body.appendChild(paragraph);
}
window.onload = init;