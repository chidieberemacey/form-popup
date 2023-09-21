const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const regLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const main = document.querySelector('.main');
// let yout = document.querySelector('.yout');

// regLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//     wrapper.classList.remove('active');
// });

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
    main.classList.add('yout');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    main.classList.remove('yout');
});

///////////// Second  ////////////////

let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
    wrapper.classList.remove('active-popup');
}







