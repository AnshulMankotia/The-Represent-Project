
// const navIcon=document.querySelector('.navIcon');
// const navIcon2=document.querySelector('.xmark');
// const navLinks=document.querySelector('.mobile-navs')
// navIcon.addEventListener('click',() => {
//     navIcon.classList.toggle('active')
//     navIcon2.classList.toggle('active')
//     navLinks.classList.toggle('active')
// });


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


// for mobile navigation
const menuBar = document.querySelector("#menuBar")
const openNav= document.querySelector('.navMenu')
// const blurBg= document.querySelector('body')

menuBar.addEventListener('click', ()=>{
openNav.classList.toggle('active')
// blurBg.classList.toggle('active')
});

const click = document.querySelector(".main-section")
const closeNav= document.querySelector('.navMenu')

click.addEventListener('click', ()=>{
closeNav.classList.toggle('active')
});



// open items in mobnav
const openItem = document.querySelector('.new')
const openSlab = document.querySelector('.newSection')

openItem.addEventListener('click',()=>{
openSlab.classList.toggle('active')
});