function generateMatrix(row, col, min, max){
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

function printMatrix(matrix, value){
    let result = '<table border="1">';
    for(let i=0; i<matrix.length; i++){
        result += `<tr>`;
        for(let j=0; j< matrix[i].length; j++){
            result += `<td>${matrix[i][j] == value ? matrix[i][j] : '-'}</td>`
        }
        result += `</tr>`;
    }
    return result;
}


function printMatrixDivide5(matrix, value = 5){
    let result = '<table border="1">';
    let isDivide5 = false;
    for(let i=0; i<matrix.length; i++){
        result += `<tr>`;
        for(let j=0; j< matrix[i].length; j++){
            isDivide5 = matrix[i][j] % value == 0;
            result += `<td style='${ isDivide5 ? 'background-color:green' : ''}'>${ isDivide5 ? matrix[i][j] : '-'}</td>`
        }
        result += `</tr>`;
    }
    return result;
}

function generateArray(size, min, max){
    let arr = [];
    let value = 0;
    for(let i=0; i< size; i++){
        do{
            value = Math.floor(Math.random()*(max - min +1) + min);
        }
        while(arr.indexOf(value) != -1)
        arr[i] = value;
    }
    return arr;
}

let array = [1,2,3,4,4,5,6,4,7,8,4,9]
let v = 4;

let first =0;
let last = array.length -1;
while(first <= last){
    if(array[first] == v){
        for(let i = first; i < last; i++){
            array[i] = array[i+1];
        }
        array[last] =0;
        last--;
    }
    else{
        first++; 
    }
}