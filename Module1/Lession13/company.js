class Company
{
    constructor(name, address, email, logo){
        this.name = name,
        this.address = address,
        this.email = email,
        this.logo = logo
    }
    info(){
        return `<tr>
                    <td>${this.name}</td>
                    <td>${this.address}</td>
                    <td>${this.email}</td>
                    <td><img width='200px' height="100px" src='${this.logo}'></td>
                </tr>`
    }
}

let bap = new Company("BAP", "10 Lý Thường Kiệt", "bap@bap.com", "images/BAP.jpg");
let hs = new Company("HueSoft", "20 Lê Lợi", "heesoft@hs.com", "images/HueSoft.png");
let lotus = new Company("Lotus", "10 Lê Quý Đôn", "lotus@lotus.com", "images/lotus.jpg");

let companies = [bap, hs, lotus];

let result = "<table border='1'><tr><th>Name</th><th>Address</th><th>Email</th><th>Logo</th></tr>";
companies.forEach(function(company, index){
    result += company.info();
})
result += "</table>";

document.write(result);