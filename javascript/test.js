function counter(init){
	var counter = init
	return function(){
		return counter++;
	}
}

function btn_onclick(){

	var count1 = counter(1);
	var result = document.getElementById('result');

	result.innerHTML = "halloworld!!" ;
	
}

//document.onmousedown = btn_onclick;
//document.onmouseup = btn_onclick;
var timer;

window.onload = function() {
	timer = window.setInterval(
		function() {
			var dat = new Date() ;
			document.getElementById('result').innerHTML = dat.toLocaleTimeString();
		},
		1000
	)
}
window.onmouseup = function(){
	var result = document.getElementById('result');
	result.innerHTML = "HalloWorld";
	
}
