const main = document.getElementById("main")
const form = document.getElementById("form")
const img = document.getElementById("img")
const email = document.getElementById("email")
const container = document.getElementById("container")
const card = document.querySelector(".success")
const submitBtn = document.getElementById("submitBtn")
const dissmisBtn = document.getElementById("dissmisBtn")

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
})


dissmisBtn.addEventListener("click", () => {
    main.style.display = "flex" 
        card.style.display = "none" 
        email.classList.toggle("error")
        container.classList.toggle("container")
})
