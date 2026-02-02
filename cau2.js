for(let i=1;i<=50;i++){
    if(i%5===0 && i%3===0){
        console.log("FizzBuzz");
        
    }else if(i%5===0){
        console.log("Buzz");
        
    }else if(i%3===0){
        console.log("Fizz");
        
    }else{
        console.log(i);
        
    }
}
let count=0;
for(let j=1;j<=50;j++){
    if(j%3===0 && j%5!==0){
        count++;
    }
}

console.log(`Tổng của tất cả các số đã in ra chữ "Fizz": ${count }`);
