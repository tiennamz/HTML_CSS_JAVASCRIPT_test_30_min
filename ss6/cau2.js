let number=[100, 200, 300, 400];
let sum=0;
// for truyền thống
for(let i=0;i<number.length;i=i+2){
    sum+=number[i];
    
}
console.log(sum);
// for of
console.log(`Sử dụng vòng lặp for...of để duyệt qua mảng và in ra trực tiếp giá trị của từng phần tử.`);

for(const i of number){
    console.log(i);
    
}

// for in
console.log(`Sử dụng vòng lặp for...in để duyệt qua mảng và in ra vị trí (index) của từng phần tử.`);

for(let i in number){
    console.log(i)
}