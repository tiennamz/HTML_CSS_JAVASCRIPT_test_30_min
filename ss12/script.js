let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không day Logitech", price: 45, category: "Phu kien", inStock: true },
{ id: "P03", name: "Ban phm cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phu kiện", inStock: true }

];
const filterProduct=(arrayPorduct)=>{
    let arrayFilter=arrayPorduct.filter((el)=>{
        return el.inStock==true
    })
    let resultSort=arrayFilter.toSorted((el1,el2)=>{
        return el2-el1
    })
    let displayArray=resultSort.map((el)=>{
        return `${el.id} - ${el.name} - ${el.price}$ - category:${el.category} - instock: ${el.inStock}`
    })
    console.log(displayArray);
    
}
console.log("Yeu cau 1:");

filterProduct(products)

// 
const findCategory=(arrayPorduct)=>{
    let categorySearch=prompt("Nhap phu kien muon tim:")
    let resultSearch=arrayPorduct.filter((el)=>{
        return el.category.toLowerCase().includes(categorySearch.toLowerCase().trim())
    })
    let nameOfProduct=resultSearch.map((el)=>{
        return `${el.name}`
    })
    if(resultSearch.length==0){
        alert("Khong tim thay")
    }else{
        console.log(nameOfProduct);
    }
}
console.log("Yeu cau 2:");

findCategory(products)
// 
const totalPrice=(arrayPorduct)=>{
    let filterArray=arrayPorduct.filter((el)=>{
        return el.inStock==true
    })
    let total=filterArray.reduce((acc,cur)=>{
        return acc+cur.price
    },0)
    console.log(`Tổng giá trị bằng tiền của các mặt hàng còn trong kho: ${total}`);
    
}
console.log("Yeu cau 3:");
totalPrice(products)