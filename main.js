const main = document.getElementById("main")
const img = document.getElementById("img")
const title = document.querySelector(".header")
const list = document.querySelector("ul")
const email = document.getElementById("email")
const container = document.getElementById("container")
const submitBtn = document.getElementById("submitBtn")
const card = document.querySelector(".success")
const cardTextContainer = document.querySelector(".success-icon-and-text")
const dissmisBtn = document.getElementById("dismissbtn")

import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"


// ANIMATIONS
function start() {
    let delayLi = 1.1
    animate(main, {y: [-30, 0] ,opacity: [0,1], scale: [.5,1]}, {ease: "easeOut", duration: 0.5})
    animate(img, {scale: [.4,1], opacity: [0,1]}, {ease:"easeOut", duration: .5, delay: 0.5})
    animate(title, {x: [30, 0], opacity:[0,1]}, {ease: "easeOut", duration: .3, delay: .8})
    Array.from(list.children).forEach(li => {
        animate(li, {y: [-60, 0], opacity: [0,1]}, {ease: "easeOut", duration: .2, delay: delayLi})
        delayLi += .2
    })
    animate(container, {x: [30, 0], opacity: [0,1]}, {ease: "easeOut", duration: .3, delay: 1.7})
    animate(submitBtn, {opacity: [0,1], scale: [.5,1]}, {ease: "easeOut", duration: .3, delay: 2})
}

function changeCard() {
    animate(card, {y: [-30, 0] ,opacity: [0,1], scale: [.5,1]}, {ease: "easeOut", duration: 0.5})
    animate(cardTextContainer, {y: [-30, 0] ,opacity: [0,1]}, {ease: "easeOut", duration: 0.5, delay: .5})
    animate(dissmisBtn, {y: [30, 0] ,opacity: [0,1], scale: [.6,1]}, {ease: "easeOut", duration: 0.5, delay: 1})
}

start()

// FUNCIONAMIENTO
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
    changeCard()
})


dissmisBtn.addEventListener("click", () => {
    main.style.display = "flex" 
    card.style.display = "none" 
    if (email.classList.contains("error")) { 
        email.classList.toggle("error")
        container.classList.toggle("container")
    }
    email.value = ""
    start()
})
