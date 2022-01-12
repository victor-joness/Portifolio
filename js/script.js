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