// let season = "Mua xuan"
// let season1 = "Mua ha"
// let season2 = "Mua thu"
// console.log(season, season1, season2);

let seasons = ["Mua xuan", "Mua Ha", "Mua thu", "Mua dong"]
// Phan tu (element)
// Do dai mang (length): tong so luong phan tu co trong mang
// Chi so index: bat dau tu 0 va ket thuc la length-1



// CRUD
// 1. Create - Them moi
// seasons.push(0)
// console.log("Su dung phuong thuc push them cuoi", seasons);


// seasons.unshift(1)
// console.log("Su dung phuong thuc unshift them dau", seasons);
// seasons[6] = "Mua mua"
// console.log(seasons);

// 2. Read - Doc - truy van
// Truy van mot phan tu (Doc gia tri cua phan tu do trong mang) - nameArray[index]
// console.log(seasons[0]);
// console.log(seasons[2]);
// console.log(seasons[-1]); //undefined
// console.log(seasons[4]); // undefined

// Truy van tat ca cac phan tu
// for (let i = 0; i < seasons.length; i++) {
//     console.log(seasons[i]);
// }
// console.log(seasons[0]);
// console.log(seasons[1]);
// console.log(seasons[2]);
// console.log(seasons[3]);

// 3. Update - Sua hoac thay doi gia tri cac phan tu
// seasons[4] = 10
// console.log("Update lai gia tri", seasons);

// // 4. Delete - Xoa cac phan tu
// seasons.pop()
// console.log("Xoa phan tu cuoi voi pop", seasons);
// seasons.shift()
// console.log("Xoa phan tu dau voi shift", seasons);
// // seasons.splice(index,deleteCount,itemAdd,itemAdd1,...,itemAddn)
// seasons.splice(2, 1)
// console.log("Xoa phan tu voi splice", seasons);
// seasons.splice(1, 0, "Mua xuan")
// console.log('Them phan tu voi splice', seasons);


// Bonus: ... Spread Operator - ES6
// VD1:
// let a = [1, 2, 3]
// let b = [...a] // sao chep mang a
// let c = a // gan bang thang a
// // Tham chieu va tham tri
// console.log(b);
// console.log(c);
// a.push(4)
// console.log(b);//1,2,3
// console.log(c);//1,2,3,4

// VD2:
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let result = [...a, ...b] // [1,2,3,4,5,6]
// console.log(result);
// // for (let i = 0; i < a.length; i++) {
// //    result.push(a[i])
// // }











