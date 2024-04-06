javascript: (() => {
	function getSuggestion() {
		const selector = document.querySelector("html > grammarly-popups").shadowRoot.querySelectorAll("div[data-role=column-layout]");
		var newWindow = window.open();
		escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
			createHTML: (to_escape) => to_escape
		});
		newWindow.document.write(escapeHTMLPolicy.createHTML('<!DOCTYPE html> <html> <head> <title>Display</title> <script src="https://kit.fontawesome.com/9ebd980204.js" crossorigin="anonymous"></script> <style> body { background-color: #9fdb71; } .f22q1s9 { display: none; } .strikeoutHorizontal_f1hzeoet { text-decoration: line-through; } .f1t69bad { color: rgb(182, 48, 48) } .f18ev72d { font-family: Arial, Helvetica, sans-serif; } .medium_fwla7bl { font-size: 1.2em; } .fp3q8eq { color: rgb(69, 69, 255); } .boxDisplay { justify-content: center; background-color: rgb(248, 248, 248); border-radius: 5px; padding: 10px; box-shadow: 10px 10px 25px #aaaaaa; margin: auto; width: auto; margin-top: auto; padding-bottom: 1.5em; } button { background: transparent; border: none !important; float: right; } #copySymbol { cursor: pointer; } </style> </head> <body> <div class="boxDisplay">' + selector[4].innerHTML + '<button onclick="myFunction()"><i class="fa-regular fa-clipboard" id="copySymbol"></i></button> </div> <script> var copySymbol = document.getElementById("copySymbol"); function myFunction() { var copyValue = ""; var classes = document.querySelectorAll(".f18ev72d:not(.f1t69bad)"); for (var i = 0; i < classes.length; i++) { copyValue = copyValue.concat(classes[i].innerHTML); }; navigator.clipboard.writeText(copyValue); copySymbol.className = "fa-solid fa-check"; copySymbol.id = \'\'; interval = setTimeout("copySymbol.className = \'fa-regular fa-clipboard\'; copySymbol.id=\'copySymbol\'", 3000); }; </script> </body> </html>'));
	}

	setTimeout(getSuggestion, 1500)


})();
