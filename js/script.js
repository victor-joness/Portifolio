let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function toggle(){
    let toggle = document.querySelector('.popup-container')
    toggle.classList.toggle('toggle')
}

function toggle_boostrap(){
    let toggle = document.querySelector('.popup-container-boostrap')
    toggle.classList.toggle('toggle')
}

function toggle_javascript(){
    let toggle = document.querySelector('.popup-container-javascript')
    toggle.classList.toggle('toggle')
}

function toggle_css(){
    let toggle = document.querySelector('.popup-container-css')
    toggle.classList.toggle('toggle')
}

function toggle_html(){
    let toggle = document.querySelector('.popup-container-html')
    toggle.classList.toggle('toggle')
}

function toggle_react(){
    let toggle = document.querySelector('.popup-container-react')
    toggle.classList.toggle('toggle')
}