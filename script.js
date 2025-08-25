//fade and scale in when page loads

gsap.from("#card",{
    opacity:0,
    y:50,
    scale:0.8,
    duration:1,
    ease:"power3.out"
});

//hover animation
const card = document.getElementById("card");
card.addEventListener("mouseenter",()=>{
    gsap.to(card,{ scale: 1.05,duration: 0.3, ease: "power2.out"});
});
card.addEventListener("mouseleave",() =>{
    gsap.to(card,{ scale: 1,duration:0.3, ease: "power2.out"});
});
// click animation (bounce effect)

card.addEventListener("click",() => {
gsap.to(card,{scale: 0.95, duration: 0.1, yoyo: true, repeat: 1});
});
