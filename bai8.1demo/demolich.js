function doiLich(){
		var input = document.getElementById("dulieu").value

		var nam;

		if ( (input % 100 == 0) && (input % 400 == 0) ) {
			nam = " không nhuận"
		}

		else if (input % 4 == 0 ) {
			nam = "Nhuận"
		}
		else
		{ nam = "không nhuận"}

			document.getElementById("ketqua").innerHTML = nam
		

		/*if ( input % 400 == 0) {
			nam = "Nhuận"
		}
		 else if( input % 100 == 0){
				nam = " Không Nhuận"
		}		
		 else if( input % 4 == 0){
				nam = "Nhuận"
		}		

			else  {
				nam = "không nhuận"
			}
			
 		document.getElementById("ketqua").innerHTML = nam*/
}