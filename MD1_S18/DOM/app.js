// 1. Cac cach truy van the HTML sang JS
// id,class,tagname,querySelector,querySelector
let divElement = document.getElementById("container")
// let liElement = document.getElementsByClassName("item")
// console.log(divElement);
// console.log(liElement.push(4)); // Error

// 2. Content
// console.log("Su dung innerHTML", divElement.innerHTML);
// console.log("Su dung innerText", divElement.innerText);
// console.log("Su dung textContent", divElement.textContent);

// 3 Attribute
// style (element.style.property(camelCase))
// divElement.style.color = "red"
// divElement.style.backgroundColor = "blue"

// 4. DOM Traversal 
// // Truy van tu trong ra ngoai 
// console.log(divElement.parentElement);
// // Truy van tu ngoai vao trong 
// console.log(divElement.children[0].children[2].textContent);

// // 5. Create Element va appendChild()
// let li = document.createElement('li')
// li.textContent = "Item 5"
// li.setAttribute("class", "item")
// divElement.appendChild(li)

// Event 
let addBtn = document.getElementById("add-btn")
// C1: 
// addBtn.onclick = function () {
//     console.log("I love u chiu chiu");
// }

// C2: addEventListener
// addBtn.addEventListener("click", function () {
//     console.log("Chia tay di");
// })

// C3: 
const handleClick = function () {
    console.log("Inline");
}
