// Cho mảng chua cac cong viec nhu sau
// let todoList = [
//     {
//         id: 1,
//         nameTodo: "Quet nha",
//         complete: true
//     },
//     {
//         id: 2,
//         nameTodo: "Hoc bai",
//         complete: false
//     }
// ]

// Viet chuong trinh cho nguoi dung nhap vao C/R/U/D/E tuong ung
// C- Người dùng sẽ thêm duoc cong viec moi sau do in ket qua
// R- In toan bo cac cong viec dang co
// U- Cap nhat lai trang thai cong viec sau do in ket qua
// D- Xoa cong viec khoi danh sach sau do in ket qua
// Chuong trình tren se lap lai len lien tuc den khi nguoi dung nhap E



let todoList = [
    {
        id: 1,
        nameTodo: "Quet nha",
        complete: true
    },
    {
        id: 2,
        nameTodo: "Hoc bai",
        complete: false
    },
    {
        id: 3,
        nameTodo: "Di da bong",
        complete: false
    },
]

let state = true
while (state) {
    // B1: Cho nguoi dung nhap vao va kiem tra tinh hop le cua thong tin do (validate)
    let choice = prompt("Nhap vao C/R/U/D/E").toUpperCase()
    // B2: So sanh thong tin do voi CRUDE => Menh de dieu kien de phan nhanh cho chuong trinh 
    switch (choice) {
        case "C":
            // B4: Neu C thi se them object vao trong mang
            // B4.1 Cho nguoi dung nhap ten cong viec muon them
            let newNameTodo = prompt("Nhap cong viec ma ban muon them");
            // B4.2 Tao ra object cong viec moi 
            let newTodo = {
                id: Math.floor(Math.random() * 10000),//unique,
                // id: todoList.length+1,//unique
                // id: Date.now() //1/1/1970 => ms
                nameTodo: newNameTodo,
                complete: false,
            }
            // B4.3 Them vao danh sach trong mang ban dau
            todoList.push(newTodo)
            // B4.4 In ket qua
            console.log("---Danh sach cong viec sau khi them moi---");
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i + 1}. ${todoList[i].nameTodo} - Trang thai: ${todoList[i].complete}`);
            }
            break;
        case "R":
            // B3: Neu R thi in danh sach cong viec
            console.log("---Danh sach cong viec can lam---");
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i + 1}. ${todoList[i].nameTodo} - ID: ${todoList[i].id}`);
            }
            break;
        case "U":
            // B5: Neu U thi cap nhat lai thuoc tinh complete trong object ma nguoi dung chon 
            // B5.1 Cho nguoi dung nhap vao vi tri thay doi 
            let positionUpdate = Number(prompt("Moi ban nhap vao vi tri muon thay doi")) // 0,todoList.length
            // B5.2 Kiem tra tinh hop le ma nguoi dung nhap vao
            if (positionUpdate < 1 || positionUpdate > todoList.length) {
                console.log("Du lieu nhap vao khong hop le. Vui long nhap lai");
            } else {
                // B5.3 Doi nguoc lai complete hien tai
                todoList[positionUpdate - 1].complete = !todoList[positionUpdate - 1].complete
            }
            console.log("---Danh sach cong viec can lam sau khi update---");
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i + 1}. ${todoList[i].nameTodo} - Trang thai: ${todoList[i].complete}`);
            }
            break;
        case "D":
            // // B6: Neu D thi xoa object tuong ung
            // // B6.1 Cho nguoi dung nhap vao vi tri muon xoa
            // let positionDelete = Number(prompt("Moi ban nhap vao vi tri muon xoa"))
            // if (positionDelete < 1 || positionDelete > todoList.length) {
            //     console.log("Du lieu nhap vao khong hop le. Vui long nhap lai");
            // } else {
            //     // B6.2 Xoa cong viec ma nguoi dung muon xoa
            //     todoList.splice(positionDelete - 1, 1)
            // }
            // console.log("---Danh sach cong viec can lam sau khi xoa---");
            // for (let i = 0; i < todoList.length; i++) {
            //     console.log(`${i + 1}. ${todoList[i].nameTodo} - Trang thai: ${todoList[i].complete}`);
            // }

            // Doi de: Nguoi dung nhap vao id muon xoa => xoa phan tu do neu ton tai => in ra
            // Tu id nguoi dung nhap => vi tri index cua phan tu muon xoa
            let idDelete = Number(prompt("Nhap vao id ma ban muon xoa"))
            // Ky thuat cam co 
            let flag = -1 // dai dien cho viec phan tu khong ton tai mang 
            for (let i = 0; i < todoList.length; i++) {
                // if (todoList[i].id === idDelete) {
                //     todoList.splice(i, 1)
                //     console.log("---Danh sach cong viec can lam sau khi xoa---");
                //     for (let i = 0; i < todoList.length; i++) {
                //         console.log(`${i + 1}. ${todoList[i].nameTodo} - ID: ${todoList[i].id}`);
                //     }
                //     break;
                // } else {
                //     console.log("ID khong hop le");
                // }
                if (todoList[i].id === idDelete) {
                    flag = i;
                    break;
                }
            }
            if (flag == -1) {
                console.log("ID khong hop le");
            } else {
                todoList.splice(flag, 1)
                console.log("---Danh sach cong viec can lam sau khi xoa---");
                for (let i = 0; i < todoList.length; i++) {
                    console.log(`${i + 1}. ${todoList[i].nameTodo} - ID: ${todoList[i].id}`);
                }
            }
            break;
        case "E":
            // B7: Neu E thi out va in thong bao 
            console.log("Cam on ban da su dung chuong trinh");
            state = false;
            break;
        default:
            console.log("Lua chon khong hop le vui long thu lai");
            break;
    }

}



















