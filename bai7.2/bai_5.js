/*

function tong (){

var input = +document.getElementById('table1').value
var slep = +document.getElementById('table2').value
var total = input + slep
document.getElementById("ketqua").innerHTML = total
console.log("")
}


 function hang(){

var input = document.getElementById('table1').value
var slep = document.getElementById('table2').value
var total = input - slep
document.getElementById("ketqua").innerHTML = total
console.log("")
}
 function tich(){
 
var input = document.getElementById('table1').value
var slep = document.getElementById('table2').value
var total = input * slep
document.getElementById("ketqua").innerHTML = total
console.log("")
}

function thuong (){
var input = document.getElementById('table1').value
var slep = document.getElementById('table2').value
var total = input / slep
document.getElementById("ketqua").innerHTML = total
console.log("")
} */

function calculator(toantu){
	var input1 = document.getElementById('table1').value
	var input2 = document.getElementById('table2').value
	var pheptinh = input1 + toantu + input2;

	 var toTal = eval(pheptinh)
	 document.getElementById("ketqua").innerHTML = toTal

	 console.log("")





}
