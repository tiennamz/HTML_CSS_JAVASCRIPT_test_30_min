let orders=["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues=[1500, 2800, 1200, -500, 3200]

// ●	Tổng hợp báo cáo dạng văn bản (String Formatting):
// ○	Mục tiêu: Ghép nối dữ liệu từ hai mảng rời rạc (Parallel Arrays) thành một định dạng văn bản dễ đọc để chuẩn bị xuất ra file báo cáo.
// ○	Yêu cầu: Từ 2 mảng orders và revenues ban đầu, hãy khởi tạo một danh sách mới có tên là orderReports. Biến đổi dữ liệu thành các chuỗi văn bản kết hợp tên đơn hàng và mức doanh thu tương ứng (dựa vào vị trí index trùng nhau), tuân thủ định dạng: "[Tên đơn hàng] mang về [Doanh thu] USD".
// ○	Output kỳ vọng: Một mảng mới chứa các chuỗi văn bản đã được ghép nối hoàn chỉnh:

const mixArray=(orders,revenues)=>{
    let orderReports=orders.map((el,index)=>{
        return el +" Mang về " + revenues[index]+ " USD"
    })
    console.log(orderReports);
    
}
mixArray(orders,revenues)



    let total= revenues.filter((el)=>{
        return el > 0
    })
   




let total1=0;
for(let i=0;i<total.length;i++){
    total1+=Number(total[i])
    
    
}
console.log(total1);


