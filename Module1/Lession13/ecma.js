class Animal
{
    constructor(name, legs){
        this.name = name,
        this.legs = legs
    }
    info(){
        return `name: ${this.name}, legs: ${this.legs}`;
    }
    sound(){
    }
    static slogen(){
        return "still breath still alive";
    }
}

class Dog extends Animal
{
    constructor(name, legs, color)
    {
        super(name, legs),
        this.color = color
    }
    info(){
        return `${super.info()}, color: ${this.color}`;
    }
    sound(){
        return "gogogo";
    }
}

class Cat extends Animal
{
    constructor(name, legs, gender)
    {
        super(name, legs),
        this.gender = gender
    }
    info(){
        return `${super.info()}, gender: ${this.gender}`;
    }
    sound(){
        return "meo meo";
    }
}

let bun = new Dog("Bun", 4, "Black");
let tom = new Cat("Tom", 4, "male");

// function Person(fullname, age, phonenumber){
//     this.fullName = fullname;
//     this.age = age;
//     this.phonenumber = phonenumber;
//     this.speak = function(){
//         return `Fullname: ${this.fullName}, Age: ${this.age}, Phone number: ${this.phonenumber.substring(0, this.phonenumber.length-3)}XXX`;
//     }
// }

class Person
{
    constructor(fullname, age, phonenumber)
    {
        this.fullname = fullname,
        this.age = age,
        this.phonenumber = phonenumber
    }
    speak(){
        return `Fullname: ${this.fullName}, Age: ${this.age}, Phone number: ${this.phonenumber.substring(0, this.phonenumber.length-3)}XXX`;
    }
} 

let khoa = new Person("Khoa", 18,"182");
khoa.speak();


let animal = [bun, tom];
animal.forEach(function(obj, index){
    document.write(`${obj.info()} <br>`);
});

for(let i =0 ;i<animal.length ;i++){
    document.write(`${animal[i].info()} <br>`);
}