// JavaScript Document

	var t;
	var stt = 1;

	function next() {
		clearInterval(t);
		if(stt < 3) {
		stt++;
		document.getElementById("slide").src = "image/banner" + stt + ".jpg";
		}
		else {
 		stt = 1;
		document.getElementById("slide").src = "image/banner" + stt + ".jpg";
		}
	
		t = setInterval("next()", 3000);
		
	}
		
	function back() {
		clearInterval(t);
		if(stt > 1) {
		stt--;
		document.getElementById("slide").src = "image/banner" + stt + ".jpg";
		}
		else {
 		stt = 3;
		document.getElementById("slide").src = "image/banner" + stt + ".jpg";
		}
	
	t = setInterval("next()", 3000);
	}

t = setInterval("next()",2000);
