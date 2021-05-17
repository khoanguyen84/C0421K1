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