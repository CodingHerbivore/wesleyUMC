var touch = document.getElementById("touchToNav");
/*window.onload = function(){
alert("Today's service is cancelled due to inclement weather.");
}*/	

function display() {
var leftColumn = document.getElementById("leftColumn");
var touchText = document.getElementById("touchText");
	if (touchText.innerHTML == 'Touch Here to Open The Menu') {
		leftColumn.style.display='block';
		touchText.innerHTML= 'Touch Here to Close The Menu';
	} else {
		leftColumn.style.display='none';
		touchText.innerHTML= 'Touch Here to Open The Menu';
	};
};
touch.addEventListener("click", display, false);
