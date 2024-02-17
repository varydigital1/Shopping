const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink  = document.querySelector('.register-link');
const btnPopup = document.querySelector('.button-poup');
const btnLogin = document.querySelector('.btn');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {

    wrapper.classList.add('active');
});
loginLink.addEventListener('click' ,()=> {
     
    wrapper.classList.remove('active');

});
btnPopup.addEventListener('click', ()=> {

    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {

    wrapper.classList.remove('active-popup');
});
btnLogin.addEventListener('clcik',()=>{

    wrapper.classList.add('active');

})

     function img2(){
        // alert("1")
        document.getElementById("va").setAttribute("src","img1/2.jpg");
    }
    function img1(){
        // alert("1")
        document.getElementById("va").setAttribute("src","img1/slider1.png");
    }
