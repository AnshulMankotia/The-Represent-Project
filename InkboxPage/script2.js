// for mobile navigation
const menuBar = document.querySelector("#menuBar");
const openNav = document.querySelector('.mobile-nav')
menuBar.addEventListener('click',()=>{
openNav.classList.toggle('active')
});




const click = document.querySelector('.arrow')
const openSlider = document.querySelector('.slider')
click.addEventListener('click',()=>{
    openSlider.classList.toggle('active')
})


// for open nav items
const openNavItems = document.querySelector('.new')
const openSlab = document.querySelector('.newSection')
openNavItems.addEventListener('click', ()=>{
openSlab.classList.toggle('active')
});


const navBack = document.querySelector('.sub-heading')
navBack.addEventListener('click',()=>{
    openSlider = document.querySelector('.slider')
});




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