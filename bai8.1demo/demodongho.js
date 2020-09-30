

var timeInterval;
var soGiay = 0;
var soPhut = 0;
var soMiligiay = 0;
var dangChay = false;

function batDau() {
	if(!dangChay) {
		dangChay = true;

		timeInterval = setInterval(function() {
			if(soMiligiay >= 99) {
				soMiligiay = 0;
				soGiay++;

				veLaiGiay();

				if(soGiay >= 59) {
					soGiay = 0;
					soPhut++;
					veLaiPhut();
				}
			} else {
				soMiligiay++;
			}

			veLaiMiligiay();
		}, 10)
	}
}

function ketThuc() {
	dangChay = false;
	clearInterval(timeInterval);
}

function xoaHet() {
	soGiay = 0;
	soPhut = 0;
	soMiligiay = 0;

	veLaiPhut();
	veLaiGiay();
	veLaiMiligiay();

}

function veLaiGiay() {
	if(soGiay < 10) {
		document.getElementById("sogiay").innerHTML = "0" + soGiay;
	} else {
		document.getElementById("sogiay").innerHTML = soGiay;
	}
}

function veLaiPhut() {
	if(soGiay < 10) {
		document.getElementById("sophut").innerHTML = "0" + soPhut;
	} else {
		document.getElementById("sophut").innerHTML = soPhut;
	}
}

function veLaiMiligiay() {
	if(soMiligiay < 10) {
		document.getElementById("somiligiay").innerHTML = "0" + soMiligiay;
	} else {
		document.getElementById("somiligiay").innerHTML = soMiligiay;
	}
}


