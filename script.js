
const navIcon=document.querySelector('.navIcon');
const navLinks=document.querySelector('.mobile-navs')
navIcon.addEventListener('click',() => {
    navIcon.classList.toggle('active')
    navLinks.classList.toggle('active')
})


// for back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" , ()=>{
    if(window.pageYOffset >500){
        toTop.classList.add("active")
    }else{
     toTop.classList.remove("active")   
    }
})