		// JavaScript Document
		
		var t;
		var currentIndex=1;
		
		function next() {
			clearInterval(t);
			if(currentIndex<4) {
				currentIndex++;
				document.getElementById("slideimages").src = "image/banner/banner" + currentIndex + ".jpg";
			} else {
				currentIndex=1;
				document.getElementById("slideimages").src = "image/banner/banner" + currentIndex + ".jpg";
			}
			t=setInterval("next()", 3000);
		}
		
		function back() {
			clearInterval(t);
			if(currentIndex>1) {
				currentIndex--;
				document.getElementById("slideimages").src = "image/banner/banner" + currentIndex + ".jpg";
			} else {
				currentIndex=4;
				document.getElementById("slideimages").src = "image/banner/banner" + currentIndex + ".jpg";
			}
			t=setInterval("next()", 3000);
		}
		
		t=setInterval("next()", 1000);