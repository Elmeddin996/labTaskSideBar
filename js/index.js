const nickName = document.querySelectorAll(".signIn input")
const button = document.querySelector("button")

const sideBar = document.querySelector(".sideBar")


button.addEventListener("click", () => {
sideBar.classList.toggle("open")

})








// button.addEventListener("click", () => {
//     if (sideBar.style.left === "-500px") {
//         sideBar.style.left = "0"
//     }
//     else {
//         sideBar.style.left = "-500px"
//     }

// })