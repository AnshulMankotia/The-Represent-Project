// for mobile navigation
const menuBar = document.querySelector("#menuBar");
const openNav = document.querySelector('.mobile-nav')
menuBar.addEventListener('click',()=>{
openNav.classList.toggle('active')
});



// FOR OPENING NAV ITEMS
const openNavItems = document.querySelector('.new')
const openSlab = document.querySelector('.newSection')
openNavItems.addEventListener('click', ()=>{
openSlab.classList.toggle('active')
});



// FOR OPENING SUB-NAV ITEMS
const click = document.querySelector('.arrow');
const sliderBack = document.querySelector('.sub-heading');

const openSlider = document.querySelector('.slider')
click.addEventListener('click',()=>{
    openSlider.classList.toggle('active')
})


const Blurs = document.querySelectorAll('.hovering');
const body = document.querySelector('main');

Blurs.forEach((Blur)=>{

Blur.addEventListener('mouseover',() =>{
    body.classList.add('overlay')
});
Blur.addEventListener('mouseout',() =>{
    body.classList.remove('overlay')
});
})