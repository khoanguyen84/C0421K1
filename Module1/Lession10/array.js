// function isPrime(){
//     let number = parseInt(document.getElementById('number').value);
//     let isprime = true;
//     for(let i=2; i<= Math.sqrt(number);i++){
//         if(number % i == 0){
//             isprime = false;
//             break;
//         }
//     }
//     isprime = isprime && number >=2;
//     document.getElementById('result').innerHTML = 
//         `${number} is ${isprime ? ' prime' : ' not prime'}`;
// }

// let result = document.getElementsByTagName('label')[1];

// let button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', isPrime);

// function isPrime() {
//     let number = parseInt(document.getElementsByTagName('input')[0].value);
//     let isprime = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i == 0) {
//             isprime = false;
//             break;
//         }
//     }
//     isprime = isprime && number >=2;
//     result.innerHTML = `${number} is ${ isprime ? ' prime' : ' not prime'}`;
// }


// let min =10;
// let max = 1000;
// let isprime;
// let result = "";
// let count = 0;
// for(let n = min; n<= max; n++){
//     isprime = true;
//     for(let i = 2; i<= Math.sqrt(n); i++){
//         if(n%i==0){
//             isprime = false;
//             break
//         }
//     }
//     if(isprime) {
//         count ++;
//         result += `${n}, ${ count % 20 == 0 ? '<br>': ''} `;
//     }
// }
// document.write(result);

let arr = [];
let size = 5;
let value = 0;
let i =0;
// for(let i=0; i<size;i++){
//     do{
//         value = Number(prompt(`enter A[${i+1}]:`));
//     }
//     while(isNaN(value) || !Number.isInteger(value))
//     arr[i] = value;
// }

do{

    do{
        value = Number(prompt(`enter A[${i+1}]:`));
    }
    while(isNaN(value) || !Number.isInteger(value))
    arr[i] = value;
    i++;
}
while(value != 0)











