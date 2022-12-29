import { createApp } from 'vue'
import App from './App.vue'

import  "@/assets/style.scss";
import  "@/assets/fonts.css";


createApp(App).mount('#app')


let agilLink = document.querySelectorAll(".agil__link")
let agilLi = document.querySelectorAll(".agil__li")


agilLink.forEach(agilLinks => {
    agilLinks.addEventListener("click", () => {
        agilLinks.classList.toggle('active')           
        agilLi.classList.toggle('activ')           
    })
});

let navMenu = document.querySelector(".nav__menu")
let navList = document.querySelector(".nav__list1")

navMenu.addEventListener("click", () => {
    navList.classList.toggle("active")
})