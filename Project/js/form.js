		function validFrom() {
			var x = document.forms["myForm"]["fname"].value;
			var y = document.forms["myForm"]["subject"].value;
			var z = document.forms["myForm"]["fmail"].value;
			if (x == "" || y == "" || z =="") {
				window.alert("You haven't entered anything!!");
				return false;
			} else {
				window.alert("We will contact with you soon !!");
				return true;
			}
		}// JavaScript Document