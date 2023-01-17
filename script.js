
const navIcon=document.querySelector('.navIcon');
const navIcon2=document.querySelector('.xmark');
const navLinks=document.querySelector('.mobile-navs')
navIcon.addEventListener('click',() => {
    navIcon.classList.toggle('active')
    navIcon2.classList.toggle('active')
    navLinks.classList.toggle('active')
});


// for back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" , ()=>{
    if(window.pageYOffset >500){
        toTop.classList.add("active")
    }else{
     toTop.classList.remove("active")   
    }
});


// for main logo image
const changeImg = document.querySelector("#mainlogo");
const changeImg1 = document.querySelector("#mainlogo1");

window.addEventListener("scroll" , ()=>{
    if(window.pageYOffset >250){
        changeImg.classList.add("active")
        changeImg1.classList.add("active")
    }else{
     changeImg.classList.remove("active")   
     changeImg1.classList.remove("active")   
    }
});

const hideNav = document.querySelector(".navMenu");
window.addEventListener("scroll" , ()=>{
    if(window.pageYOffset >500){
        hideNav.classList.remove("active")
    }else{
     hideNav.classList.add("active")     
    }
});
