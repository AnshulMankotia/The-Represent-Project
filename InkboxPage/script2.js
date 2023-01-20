// background hover //

// for mobile navigation
const menuBar = document.querySelector("#menuBar");
const openNav = document.querySelector('.mobile-nav')
menuBar.addEventListener('click',()=>{
openNav.classList.toggle('active')
});

// FOR BLURRING BG WHILE HOVERING ON NAV-LINKS

const Blurs = document.querySelectorAll('.hovering');
const body = document.querySelector('main');

Blurs.forEach((Blur)=>{

Blur.addEventListener('mouseover',() =>{
    body.classList.add('overlay');
});
Blur.addEventListener('mouseout',() =>{
    body.classList.remove('overlay');
});
});
 
// for open nav items
const openNavItems = document.querySelector('.new')
const openSlab = document.querySelector('.newSection')
openNavItems.addEventListener('click',()=>{
openSlab.classList.toggle('active')
});


const navBack = document.querySelector('.sub-heading')
navBack.addEventListener('click',()=>{
    openSlider.classList.toggle('active')
});

// FOR OPENING SUB-NAV ITEMS
const click = document.querySelector('.arrow');
const sliderBack = document.querySelector('.sub-heading');

const openSlider = document.querySelector('.slider')
click.addEventListener('click',()=>{
    openSlider.classList.toggle('active')
})


// --------product-image -slider-----------//
const  toshowimg = document.getElementById("main-image");
const images = document.querySelectorAll(".productimg");
images.forEach((image) =>{
    image.addEventListener("click", (event) =>{
        toshowimg.src = event.target.src;
     document.querySelector(".productimg--active")
    .classList.remove("productimg--active");
    event.target.classList.add("productimg--active")
    })
});


// -------------------PRODUCT SECTION  --PRODUCT IMAGE SLIDER---------//
    const accordion = document.getElementsByClassName('contentBox');
    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active')
        })
    }