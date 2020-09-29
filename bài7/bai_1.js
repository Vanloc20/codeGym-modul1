
var diemSinh = 9;
var diemLy = 8;
var diemHoa = 7.5;
var diemTrungBinh = (diemSinh + diemLy + diemHoa)/3; 
var tongDiem3Mon = (diemSinh + diemLy + diemHoa);
 alert("điểm trung bình ba môn là : " + (diemTrungBinh));
 alert ("Tổng Điểm 3 môn là: " + tongDiem3Mon);

 document.getElementById('trungbinh').innerHTML = "Điểm trung bình 3 môn là: " + diemTrungBinh ;
 document.getElementById('tongbamon').innerHTML = "điểm tổng 3 môn là : " + tongDiem3Mon ;