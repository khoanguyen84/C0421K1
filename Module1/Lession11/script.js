let array = [];
const size = 20;
const min = 1;
const max = 100;


for(let i=0; i< size; i++){
    array[i] = Math.floor(Math.random()*(max-min+1) + min);
}

let result ="";
for(let i=0; i<size; i++){
    result += `${array[i]}${ i + 1 == size ? '' : '; ' }`;
}  

document.write(result);

let x = 17;
let index = -1;
for(let i=0; i< size; i++){
    if(array[i] == x){
        index = i;
        break;
    }
}

document.write(`<br>position of ${x} is ${index} in array`);

let total = 0;
for(let i=0; i< size; i++){
    total += array[i];
}
document.write(`<br>total values of array is: ${total}`);

let v = 101;
for(let i= size; i>0; i--){
    array[i] = array[i-1];
}
array[0] = v;


let position = 19;
for(let i=position; i< size - 1; i++){
    array[i] = array[i+1];
}
array.length -= 1;

let map =[];
for(let i=0;i<size;i++){
    map[i] = array[i]*2;
}