var locationOfThis=window.location.toString();
var codeMirror;
var oldStuff;

function startit() {
	if (document.getElementById("syntaxHilite").checked) {
		if (oldStuff != codeMirror.getValue()) {
			view.document.open();
			view.document.write(codeMirror.getValue());
			view.document.close();
			oldStuff = codeMirror.getValue();
		}
	}
	else {
		if (oldStuff != document.getElementById("code1").value) {
			view.document.open();
			view.document.write(document.getElementById("code1").value);
			view.document.close();
			document.getElementById("titletext").innerHTML="Page Title:&nbsp;"+view.document.title;
			oldStuff = document.getElementById("code1").value;
		}
	}
}

function toggleCodeMirror() {
	if (document.getElementById("syntaxHilite").checked) {
		document.body.getElementsByClassName("CodeMirror")[0].style.display = "block";
		document.getElementById("code1").style.display = "none";
		codeMirror.setValue(document.getElementById("code1").value);
	} else {
		document.body.getElementsByClassName("CodeMirror")[0].style.display = "none";
		document.getElementById("code1").style.display = "block";
		document.getElementById("code1").value = codeMirror.getValue();
	}
}

function init() {
	if (location.search != null || location.search != "") {
		var xxx = location.search;
		xxx = xxx.split("=");
		if (xxx[0] == "?code") {
			document.getElementById("code1").value = unescape(xxx[1]);
		}
	}
	if (top.location != location) {
		top.location.href = document.location.href;
	}
	codeMirror = CodeMirror.fromTextArea(document.getElementById("code1"), {lineNumbers: true, mode: "text/html", tabMode: "indent", onCursorActivity: function() {codeMirror.setLineClass(hlLine, null);hlLine =codeMirror.setLineClass(codeMirror.getCursor().line, "activeline");}, onChange: function() {startit();}});
	var hlLine = codeMirror.setLineClass(0, "activeline");
	codeMirror.setOption("theme", "eclipse");
	startit();
	document.getElementById("code1").onkeyup = startit;
	document.getElementById("code1").onkeydown = startit;
	setInterval("document.getElementById(\"titletext\").innerHTML=\"Page Title:&nbsp;\"+view.document.title;", 500);
	if(locationOfThis.indexOf("http")!=-1){alert("Tryit Editor Instant is not meant to be uploaded on to the web. Please notify the owner to take off Tryit Editor Instant");}
}
window.onload=init;