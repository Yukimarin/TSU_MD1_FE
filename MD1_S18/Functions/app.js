//  Function (Ham) 
// 1. Built-in Function 
// prompt(), alert(), console.log(), typeof
// push(), pop()
// 2. Defined Function 
// 2.1 Declaration Function (Hoisting)
// // Khoi tao ham 
// function sayHello() {
//     console.log("Xin chao lop TSU-250428");
// }
// // Thuc thi ham
// sayHello()

// // 2.2 Expression Function
// let sayHi = function () {
//     console.log("Xin chao Viet Nam");
// }
// sayHi()

// //2.3 Arrow Function (ES6)
// // let sum = function (a, b) {
// //     return a + b
// // }

// let sum = (a, b) => a + b
// console.log(sum(3, 5));

// Tham so va doi so 
// // Tham so la bien tham gia vao qua trinh khoi tao ham 
// let sum = function (a, b) {
//     return a + b
// }
// // Doi so la gia tri truyen vao khi thuc thi ham 
// console.log(sum(3, 5)); //8
// console.log(sum('3', 5)); // 35
// console.log(sum(8, 5, 3)); // 13
// console.log(sum(1)); // 1+ undefined = NaN 

// HOF (Higher order Function) - Ham co the nhan ham khac lam doi so (callback)

// Mot so ham lam viec voi mang 
// let arr = [1, 2, 3, 4]
// 1.1 map() va forEach()- phong van
// Giong nhau: deu duyet qua tung phan tu cua mang 
// Map(): tra ve mang moi 
// let resultMap = arr.map(function (element) {
//     return element * 2
// })
// console.log(resultMap);

// let resultArrow = arr.map((element) => element * 2)
// console.log(resultArrow);
// // forEach()
// let resultForEach = arr.forEach(function (e) {
//     return e * 2;

// })
// console.log(resultForEach);

// let arr = [1, 2, 3, 4]
// 1.2 Filter, findIndex, find
// let resultFilter = arr.filter((e) => e > 2)
// console.log("resultFilter", resultFilter);

// let resultFindIndex = arr.findIndex((e) => e > 5)
// console.log("resultFindIndex", resultFindIndex);

// let resultFind = arr.find((e) => e > 2)
// console.log("resultFind", resultFind);

let arr = [1, 2, 3, 4]
// C1: 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum);

// C2: reduce(total, current, initialValue)
let resultReduce = arr.reduce((total, current) => { return total = total + current }, 10)
//Lan lap 1: total = 10; current = 1 => total = 11
//Lan lap 2: total = 11; current = 2 => total = 13
// Lan lap 3: total = 13; current = 3 => total = 16
// Lan lap 4: total = 16; current = 4 => total = 20 
console.log(resultReduce);






