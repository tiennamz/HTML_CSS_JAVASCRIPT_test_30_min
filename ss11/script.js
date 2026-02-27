let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Màn hinh Dell UltraSharp", price: 450, category: "Màn hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];


const findItemById=(id,itemArray)=>{
    let resultFind=itemArray.find((el)=>{
        return el.id==id
    })
    if(!resultFind){
        alert("Không tìm thấy")
    }else{
        return resultFind
    }
}

console.log(findItemById("P03",products));

// 
let checkPrice=(itemArray)=>{
    let resultCheck=itemArray.every((el)=>{
        return el.price>0
    })
    if(resultCheck==true){
        console.log("Dữ liệu bảng giá hợp lệ")
    }else{
        console.log("Phát hiện sản phẩm chưa cập nhật giá")
    }
}
checkPrice(products)

// 
const displayProduct=(itemArray)=>{
    let catalogDisplay=itemArray.map((el)=>{
        if(el.inStock==true){
            el.inStock="Còn hàng"
        }else{
            el.inStock="Hết hàng"
        }
        return `${el.name} - Giá: $${el.price} - Trạng thái: ${el.inStock}`
    }) 
    return catalogDisplay
}
console.log(displayProduct(products));

