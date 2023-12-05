

function prepareEventHandlers(){
	document.getElementById("emailForm").onsubmit = function(){
		if (document.getElementById("message").value == ""){
			document.getElementById("error").innerHTML = "Please Enter a Message";
			return false;
			} else{
			document.getElementById("error").innerHTML = "";
			return true;
			}
	};
}

window.onload = function(){
	prepareEventHandlers();
}	