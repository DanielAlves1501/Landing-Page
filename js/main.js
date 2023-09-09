import { FadeIn, SlideIn } from "./transitions/transitions";

// Hero Section Animations

const heroText = document.getElementById('heroText')
const heroImage = document.getElementById('heroImage')
const mainCard = document.getElementById('mainCard')
const GetStartedBtn = document.getElementById("getStarted")

window.addEventListener('load', ()=>{
    FadeIn(heroText)
    SlideIn(heroImage)
})


// Why Us Animations

// Selecciona todos los elementos que deseas animar

const whyUsCards = document.querySelectorAll('.why-us--card');

// Crea una instancia del Intersection Observer

const observer1 = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('card-slide-in');
        } 
    })
});

// Observa todos los elementos
whyUsCards.forEach(card =>{
    observer1.observe(card)
})


// Main Card animation

const observer2 = new IntersectionObserver((entries,object)=>{ 
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
        }
    })
})

observer2.observe(mainCard);

// Tracking Get Started Button with FB Pixel

GetStartedBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    fbq('track', 'Purchase', {currency: "USD", value: 30.00});
})



