// Object 
let student = {
    name: "Luan",
    age: 33,
    phone: "0123456789",
    email: "luan@gmail.com"
}

// CRUD
// R- Truy van mot thuoc tinh (Read one)
console.log(student.phone);
// Truy van toan bo (Real All)
// for (const key in student) {
//     console.log(student[key]);
// }

// C- Create
student.address = "Bac Cuc"
console.log(student);

// D- Delete 
delete student.phone
console.log(student);

// U-Update
student.age = 40
console.log(student);


