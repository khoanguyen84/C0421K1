// document.write(`${1} <br>`);
// document.write(`${2} <br>`);
// document.write(`${3} <br>`);
// document.write(`${4} <br>`);
// document.write(`${5} <br>`);
// document.write(`${6} <br>`);

//i ~ index
//scope

// let i;
// for(i=0; i<10; i++ ){
//     document.write(`${i} <br>`);
// }
// document.write(`value of i after exist for statement: ${i} <br>`);

// for(let i=9; i>=0; i-- ){
//     document.write(`${9-i} <br>`);
// }

// let i=0;
// for(; i<10; ){
//     document.write(`${i} <br>`);
//     i++;
// }

// Lặp mấy lần? 10 lần
// for(let i=0; i<10; i++ ){
//     if(i%2==0){
//         document.write(`${i} <br>`);
//     }
// }

//Lặp 5 lần
// for(let i=0; i<10; i+=2 ){
//     document.write(`${i} <br>`);
// }

// for(let i=0; i<=100; i+=5 ){
//     document.write(`${i} <br>`);
// }

// for(let i=0; i<=100; i++ ){
//     if(i%5 != 0){
//         // break;
//         continue;
//         // document.write(`hello <br>`);
//     }
//     document.write(`${i} <br>`);
// }

// for(let i=0, count=0; i<=100; i++ ){
//     if(i%5 == 0){
//         count ++;
//         document.write(`${i} <br>`);
//     }
//     if(count == 5){
//         break;
//     }
// }

// for(let i=0, count=0; i<=100 && count < 5; i++ ){
//     if(i%5 == 0){
//         count ++;
//         document.write(`${i} <br>`);
//     }
// }

// for(let i=0, count=0; i<=100 && count < 5; i+=5 ){
//     count ++;
//     document.write(`${i} <br>`);
// }

//while ; do.. while

// let i=0;
// while (i<10){
//     document.write(`${i} <br>`);
//     i++;
// }

// let i=0;
// do{
//     document.write(`${i} <br>`);
//     i++;
// }
// while(i<10);

// tính tổng các giá trị từ 0 đến 100 nhưng khi nào tổng = 45 thì dùng
// let i=0;
// let total = 0;
// while(i<=100){
//     total += i;
//     document.write(`${i} <br>`);
//     i++;
//     if(total ==45){
//         break;
//     }
// }
// document.write(`${total} <br>`);
// let i=0;
// let total = 0;
// while(i<=100 && total != 45){
//     total += i;
//     document.write(`${i} <br>`);
//     i++;
// }
// document.write(`${total} <br>`);

// let i=0;
// let total = 0;
// do{
//     total += i;
//     document.write(`${i} <br>`);
//     i++;
// }
// while(i<=100 && total != 45)
// document.write(`${total} <br>`);

// let total = 0;
// for(let i=0; i<=100 && total != 45; i++){
//     total += i;
//     document.write(`${i} <br>`);
// }
// document.write(`${total} <br>`);

//yêu cầu: người dùng dùng nhập vào 1 số nguyên dương thì mới dùng
// isNaN ~ is not a number

// let toan;
// do{
//     // toan = +prompt("Nhập điểm toán:");
//     // toan = parseInt(prompt("Nhập điểm toán:"));
//     toan = new Number(prompt("Nhập điểm toán:"));
// }
// while(isNaN(toan) || toan < 0 || toan > 10)
// document.write(`${toan} <br>`);

// let toan = new Number(prompt("Nhập điểm toán:"));

// while(isNaN(toan) || toan < 0 || toan > 10){
//     toan = new Number(prompt("Nhập điểm toán:"));
// }
// document.write(`${toan} <br>`);

// let toan = new Number(prompt("Nhập điểm toán:"));

// for(;isNaN(toan) || toan < 0 || toan > 10;){
//     toan = new Number(prompt("Nhập điểm toán:"));
// }
// document.write(`${toan} <br>`);

let i=10;
while(++i < 11){
    document.write(`${i} <br>`);
}
document.write(`${i} <br>`);