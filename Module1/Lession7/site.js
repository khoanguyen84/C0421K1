// var fullName = "Khoa Nguyen";
// document.write(fullName + "<br>");          //Khoa Nguyễn
// if(true){
//     var fullName = "Kiên Hồ";
//     document.write(fullName + "<br>");      // Kiên Hồ
// }
// document.write(fullName + "<br>");          //Kiên Hồ   -- Khoa Nguyễn

var  fullName = "Khoa Nguyen";
document.write(fullName + "<br>");          //Khoa Nguyễn
if(true){
    let fullName = "Kiên Hồ";
    document.write(fullName + "<br>");      // Kiên Hồ
}
document.write(fullName + "<br>");          //Kiên Hồ   -- Khoa Nguyễn



let fn = "Khoa";
let ln = "Nguyễn";
let age = 18;
document.write("Fullname: " + fn + " " + ln + ", Age: " + age + 2);
document.write('<br>')
document.write(`Fullname: ${fn} ${ln}, Age: ${age + 2}`);