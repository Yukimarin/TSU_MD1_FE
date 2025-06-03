// Bien (Variables)
// Cu phap (Syntax): Tu khoa khai bao bien + ten bien = gia tri cu the
// Phan biet var/let/const
// // 1. Khai bao lai (var)
// var a = 10
// var a = 5
// console.log(a);
// // 2. Gan lai gia tri (var, let)
// const b = 10
// b = 6
// console.log(b);
// 3. Hoisting (ES6) - dua moi khai bao len tren cung
// console.log("In ket qua truoc khi khai bao", a);
// var a = 10
// console.log("In ket qua sau khi khai bao", a);

// Quy tac ten bien: camelCase, khong bat dau tu ky tu so, phai co y nghia va nen bang tieng anh
// let fullName = "Cap Quang Huy"
// let firstNumber
// console.log(firstNumber);


// Cac kieu du lieu trong JS
// Primitive type (Kieu du lieu nguyen thuy-7)
// string, number, boolean(true, false), null, undefined, symbol, bigInt
// String

// let fullName = "Pham Nga"
// let age = 18
// console.log(typeof age); - Kiem tra kieu du lieu

// // Ho ten sinh vien la Pham Nga, 18 tuoi
// console.log('Ho va ten sinh vien la', fullName + ',', age + " tuoi");
// // Template literal (ES6)
// console.log(`Ho va ten sinh vien la ${fullName.trim()}, ${18} tuoi`);
// Reference type (Kieu du lieu phuc tap)


// Input - Output
// Ep kieu lieu string sang number (+,Number,parseInt)
// let firstNumber = Number(prompt("Moi ban nhap so thu nhat"))
// let secondNumber = parseInt(prompt("Moi ban nhap so thu hai"))

// alert(`Tong hai so la: ${firstNumber + secondNumber}`)

// Control Statement
// let a = 10
// let b = "10"
// console.log(a == b); // true
// console.log(a === b); // false

// console.log(15>13 && 2<3); //true
// console.log(15<13 || 2<3); //true

// If esle
// let number = 200
// if (number % 2 === 0) {
//     console.log("Day la so chan");
// }
// if (number % 2 !== 0) {
//     console.log("Day la so le");
// }

// if (number < 0) {
//     console.log("Day la so am");
// } else {
//     console.log("Day la so duong");
// }

// Bonus: Tenary Operator (Toan tu 3 ngoi)
// Syntax: condition ? logic 1 : logic 2
// number < 0 ? console.log("Day la so am") : console.log("Day la so duong");


// if else if else
// >75 => sinh vien loai gioi
// 50-75 => sinh vien kha
// 30-50 => sinh vien yeu
// < 30 => sinh vien kem
// if (75 < number && number < 100) {
//     console.log("Gioi");
// } else if (50 <= number && number <= 75) {
//     console.log("Kha");
// } else if (30 <= number && number < 50) {
//     console.log("Yeu");
// } else if (0 < number && number < 30) {
//     console.log("Kem");
// } else {
//     console.log("Du lieu khong hop le");
// }

// Kiem tra THANG NGUOI DUNG NHAP VAO LA MUA GI ?
// let month = 5
// if (0 < month && month <= 3) {
//     console.log("Day la mua xuan");
// } else if (4 <= month && month < 6) {
//     console.log("Day la mua ha");
// } else {
//     console.log("Day la mua thu");
// }
// switch case
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Day la mua xuan");
//         break;
//     // case 2:
//     //     console.log("Day la mua xuan");
//     //     break;
//     // case 3:
//     //     console.log("Day la mua xuan");
//     //     break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Day la mua ha");
//         break;
//     // case 5:
//     //     console.log("Day la mua ha");
//     //     break;
//     // case 6:
//     //     console.log("Day la mua ha");
//     //     break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Day la mua thu");
//         break;
//     // case 8:
//     //     console.log("Day la mua thu");
//     //     break;
//     // case 9:
//     //     console.log("Day la mua thu");
//     //     break;
//     default:
//         break;
// }

// Vong lap
// console.log("Demo Continue");
// for (let i = 0; i < 10; i = i + 1) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// console.log("Demo break");
// for (let i = 0; i < 10; i = i + 1) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// While
// Cho nguoi dung nhap vao so bat ky
// Neu so do lon hon so can doan thi in ra lon hon
// Neu so do nho hon so can doan thi in ra nho hon
// Neu so do trung voi so can doan thi in ra Bingo
// Lap lai chuong trinh den khi nguoi dung doan dung thi ket thuc
// Mo hinh IPO
// B1: Su dung vong lap while
// B2: Cho nguoi dung nhap vao
// B3: Su dung menh de dieu kien de kiem tra
// let number = 68
// let check = true
// while (check) {
//     let inputValue = Number(prompt("moi ban nhap vao so bat ky"))
//     if (inputValue === number) {
//         console.log("Bingo");
//         check = false
//     } else if (inputValue < number) {
//         console.log("Nho hon roi ban ei");
//     } else {
//         console.log("Lon hon roi ban ei");
//     }
// }

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// 0 1 1 2 3 5 8 13 21 34 55 89
// Can tao ra 1 bien de dem so fibonaci da in ra 
// Su dung vong lap de // so dau nhat = 0, so thu hai = 1,
// so tiep theo = so dau nhat + so thu 2 
let count = 20
let firstNumber = 0
let secondNumber = 1
let i = 0
while (i < count) {
    console.log(firstNumber);
    let nextNumber = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = nextNumber
    i = i + 1
}

// Lap lap 1: firstNumber = 0; secondNumber = 1 => nextNumber=1
// Lap lap 2: firstNumber = 1; secondNumber = 1 => nextNumber=2
// Lap lap 3: firstNumber = 1; secondNumber = 2 => nextNumber=3
// Lap lap 4: firstNumber = 2; secondNumber = 3 => nextNumber=5