function tinhThue(){
	var input = document.getElementById("taxNumber").value

		var Tong;
		

		if (input >= 15000000) {
			Tong = (input * 30)/100;
		}
		else if (input >= 10000000) {
			Tong = (input * 30)/100;
  		}
  		else if (input >= 7000000) {
			Tong = (input * 30)/100;

		}

		else {
			Tong = "Không Cần Nộp Thuế"
			

		}
		document.getElementById("ketQua").innerHTML = Tong +  "vnd";
		

}

