function generateMatrix(row, col, min = 10, max = 80){
    let matrix = [];
    for(let i=0;i<row; i++){
        let arr = [];
        for(let j=0;j<col;j++){
            arr[j] = Math.floor(Math.random()*(max-min+1) +min);
        }
        matrix[i] = arr;
    }
    return matrix;
}

function printMatrix(matrix){
    let result = '<table border="1">';
    for(let i=0; i<matrix.length; i++){
        result += `<tr>`;
        for(let j=0; j< matrix[i].length; j++){
            result += `<td>${matrix[i][j]}</td>`
        }
        result += `</tr>`;
    }
    return result;
}

let m1 = generateMatrix(10,10);
let m2 = generateMatrix(5,5, 10,30)

let arr = [1,2,3,4,5];
function myJoin(separator = ','){
    let result = '';
    for(let i=0;i<arr.length;i++){
        result += `${arr[i]}${separator}`;
    }
    return result.substring(0, result.length - 1);
}

function showMatrix(){
    let row = parseInt(document.getElementById('row').value);
    let col = parseInt(document.getElementById('col').value);
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    if(isNaN(row) || isNaN(col) || isNaN(min) || isNaN(max)){
        document.getElementById('result').innerHTML = 'invalid data'    
    }
    else{
        document.getElementById('result').innerHTML = 
        printMatrix(generateMatrix(row, col, min, max));
    }
    // let matrix = generateMatrix(row, col, min, max);
    // document.getElementById('result').innerHTML = printMatrix(matrix);
    
}


let n1 = 5, n2 = 7;
// function sum2(){
//     n1 += 2;
//     n2 += 3;
//     console.log(`${n1} - ${n2}`);
//     return n1 + n2;    
// }
// let total = sum2();
// let tota2 = sum2();
// console.log(`${n1} + ${n2} = ${total}`);


function sum(n1, n2){
    n1 += 2;
    n2 += 3;
    console.log(`${n1} - ${n2}`);
    return n1 + n2;    
}
let total = sum(n1,n2);
let total2 = sum(n1,n2);
// let total2 = sum(100,200);
console.log(`${n1} + ${n2} = ${total}`);
