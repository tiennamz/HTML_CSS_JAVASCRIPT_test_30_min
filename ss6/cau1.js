let studentName="Quý, Nam, Lan, Hùng, Nam";
let studentArray=studentName.split(", ");
console.log(studentArray);

let studentReverse=studentArray.reverse();
console.log(studentReverse);
// có thay đổi mảng gốc


if(studentArray.indexOf("Lan")===-1){
    console.log("Tên Lan không tồn tại trong mảng");
    
}else{
    console.log("Tên Lan tồn tại trong mảng");
    
}
let indexSearch=studentArray.indexOf("Nam");
console.log(`vị trí (index) đầu tiên của tên "Nam" trong mảng sau khi đảo ngược: ${indexSearch}`);
