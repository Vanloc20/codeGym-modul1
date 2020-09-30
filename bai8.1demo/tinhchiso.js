function chiSoCothe(){
	var weight = document.getElementById('table1').value
	var height = document.getElementById('table2').value / 100
	var bmi = weight /(height * height)
	

	var BMI 
	if (bmi < 18.5) {
		BMI = "Còi Xương"
	}
	 else if (bmi < 25.0) {
	 	BMI = "Đẹp Rồi ok Đó"
	 }
	 else if (bmi < 30.0){
	 	BMI = "Thừa Cân Rồi đó"
	 }
	else {
		BMI = "Thôi Xong Béo phì cmnr"
	}

		const tag = document.getElementById("ketqua");
        tag.innerHTML  = BMI
        tag.style.color = 'blue'
    }

    function reSet(){
     	document.getElementById('table1').innerHTML = ""
     	document.getElementById('table2').innerHTML = ""

    }