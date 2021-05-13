let array = [];
const size = 20;
const min = 1;
const max = 100;


for (let i = 0; i < size; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1) + min);
}

// ------------- FOR --------------
let result = "";
for (let i = 0; i < size; i++) {
    result += `${array[i]}${i + 1 == size ? '' : '; '}`;
}

document.write(result + '<br>');

// ------------- FOR IN --------------
result ="";
for(let index in array){
    result += `${array[index]} - ${index}, `;
}
document.write(result + '<br>');

// ------------- FOR OF --------------
result ="";
let pos = 0;
for(let item of array){
    result += `${item} - ${array.indexOf(item)}, `;
    // pos = array.indexOf(item, pos);
}
document.write(result + '<br>');
// ------------- FOR EACH --------------
result = "";
// let total = 0;
array.forEach(function(value, index){
    result += `${value} - ${index}, `;
    // total += value;
    // total += array[index];
});
document.write(result + '<br>');

// let x = 17;
// let index = -1;
// for (let i = 0; i < size; i++) {
//     if (array[i] == x) {
//         index = i;
//         break;
//     }
// }

// document.write(`<br>position of ${x} is ${index} in array`);

// let total = 0;
// for (let i = 0; i < size; i++) {
//     total += array[i];
// }
// document.write(`<br>total values of array is: ${total}`);

// let v = 101;
// for (let i = size; i > 0; i--) {
//     array[i] = array[i - 1];
// }
// array[0] = v;


// let position = 19;
// for (let i = position; i < size - 1; i++) {
//     array[i] = array[i + 1];
// }
// array.length -= 1;

// let map = [];
// for (let i = 0; i < size; i++) {
//     map[i] = array[i] * 2;
// }

let map = array.map(function(value, index){
    // return value*2;
    return array[index]*2;
})

let greaterThen30 = array.filter(function(value, index){
    return value >=30;
});

let total = array.reduce(function(total, value, index){
    return total+= value;
}, 0)

let greaterThen10 = array.every(function(value, index){
    return value > 10;
})

let greaterThen20 = array.some(function(value, index){
    return value > 20;
})

let findFirst58 = array.find(function(value, index){
    return value > 58;
})



for(k=0;k<10;k++){
    document.write(`${k+1},`);
}