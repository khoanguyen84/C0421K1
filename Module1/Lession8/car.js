const step = 10;
const leftArr = 37;
const upArr = 38;
const rightArr = 39;
const downArr = 40;
let direction = "right";

function init() {
    let car = document.getElementById('car');
    car.src = 'images/right.png';
    car.style.position = "absolute";
    car.style.top = 0;
    car.style.left = 0;
    car.style.transition = '.5s';

    window.addEventListener('keydown', controllCar);
}

function controllCar(evt) {
    switch (evt.keyCode) {
        case leftArr: {
            moveToLeft();
            break;
        }
        case rightArr: {
            moveToRight();
            break;
        }
        case upArr: {
            moveToUp();
            break;
        }
        case downArr: {
            moveToDown();
            break;
        }
        default:{
            alert('please using one in four key arrows (top, right, down, left)');
        }
    }
}

function moveToRight() {
    let car = document.getElementById('car');
    car.src = 'images/right.png';
    direction = "right";
    if (parseInt(car.style.left) + car.width + step < window.innerWidth) {
        car.style.left = parseInt(car.style.left) + step + "px";
    }
}

function moveToLeft() {
    let car = document.getElementById('car');
    // car.src = 'images/left.png';
    car.style.transform = "rotate(180deg)";
    if (parseInt(car.style.left) > 0) {
        car.style.left = parseInt(car.style.left) - step + "px";
    }
}

function moveToDown() {
    let car = document.getElementById('car');
    // car.src = 'images/down.png';
    if(direction == "right"){
        car.style.transform = "rotate(90deg)"
    }
    direction == "down";
    if (parseInt(car.style.top) + car.height + step < window.innerHeight) {
        car.style.top = parseInt(car.style.top) + step + "px";
    }
}

function moveToUp() {
    let car = document.getElementById('car');
    car.src = 'images/up.png';
    if (parseInt(car.style.top) > 0) {
        car.style.top = parseInt(car.style.top) - step + "px";
    }
}