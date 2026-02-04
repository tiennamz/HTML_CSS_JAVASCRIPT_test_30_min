let number;
number=+prompt("Nhap vao 1 so nguyen");
if(number%2===0){
    console.log(`So ${number} la so chan`);
    
}else{
    console.log(`So ${number} la so le`);
    
}

if(number<0){
    console.log(`So ${number} la so am`);
    
}else if(number===0){
    console.log(`So ${number} la so khong`);
    
}else{
    console.log(`So ${number} la so duong`);
    
}

if(number>0){
    for(let i=1;i<=number;i++){
        console.log(`${i} `);
        
    }
}else{
    console.log("Giá trị n không hợp lệ để tạo dãy số");
    
}