const main = document.getElementById("main")
const form = document.getElementById("form")
const img = document.getElementById("img")
const email = document.getElementById("email")
const container = document.getElementById("container")
const card = document.querySelector(".success")
const submitBtn = document.getElementById("submitBtn")

if(window.innerWidth <= 800) {
    main.insertBefore(img, form)
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const verificarEmail = () => {
    if(emailRegex.test(email.value)) {
        main.style.display = "none" 
        card.style.display = "block" 
    } else {
        email.classList.add("error")
        container.classList.add("container")
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    verificarEmail()
    console.log("funciona")
})

