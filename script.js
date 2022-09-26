function fun1(x){
	var inputed = document.getElementById('searching').checked;
	if(inputed == true){
		document.getElementById("searched").style.transform="scale(1)";
		document.getElementById("shopping1").style.right="-100%";
		document.getElementById("menu1").style.right="-100%";
		
	}
	else if(inputed == false){
		document.getElementById("searched").style.transform="scale(0)";
		inputed= true;


	}
}
function fun2(x){
	var inputed = document.getElementById('shoped').checked;
	if(inputed == true){
		document.getElementById("shopping1").style.right="0%";
		document.getElementById("menu1").style.right="-100%";
		document.getElementById("searched").style.transform="scale(0)";
	}
	else if(inputed == false){
		document.getElementById("shopping1").style.right="-100%";

	}
}
function fun3(x){
	var inputed = document.getElementById('bar').checked;
	if(inputed == true){
		document.getElementById("menu1").style.right="0%";
		document.getElementById("shopping1").style.right="-100%";
		document.getElementById("searched").style.transform="scale(0)";
	}
	else if(inputed == false){
		document.getElementById("menu1").style.right="-100%";
		
	}
}