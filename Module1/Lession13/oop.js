// object
let khoa = {};
khoa.fullName = "Khoa Nguyen";
khoa["age"] = 18;
khoa.phonenumber = "0935216417";

khoa.speak = function(){
    return `Fullname: ${this.fullName}, Age: ${this.age}`;
}


let phuoc = {
    fullName: "Phước Nguyễn",
    age: 18,
    phonenumber: "0935737475",
    speak: function(){
        return `Fullname: ${this.fullName}, Age: ${this.age}`;
    }
}

function Human(){
    this.fullName;
    this.age;
    this.phonenumber;
    this.speak = function(){
        return `Fullname: ${this.fullName}, Age: ${this.age}, Phone number: ${this.phonenumber.substring(0, this.phonenumber.length-3)}XXX`;
    }
}

let chuong = new Human();
chuong.fullName = "Chương";
chuong.age = 18;
chuong.phonenumber = "123456789";

let binh = new Human();
binh.fullName = "Bình";
binh.age = 19;
binh.phonenumber = "0909090909";


function Person(fullname, age, phonenumber){
    this.fullName = fullname;
    this.age = age;
    this.phonenumber = phonenumber;
    this.speak = function(){
        return `Fullname: ${this.fullName}, Age: ${this.age}, Phone number: ${this.phonenumber.substring(0, this.phonenumber.length-3)}XXX`;
    }
}

let dat = new Person("Đat", 18, "1234512345");

// Person.email = "a@b.com";
Person.prototype.email = "a@b.com";