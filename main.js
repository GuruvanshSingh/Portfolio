window.onclick = (e) => 
{
  scrollTo(e.target.href.split('#')[1]);
};

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const text = document.querySelector('.myName');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop:false
})
    .add({
    targets: '.myName span',
    translateY: [-300, 1],
    delay: anime.stagger(100),
    opacity: [0,1],
    easing: "easeOutExpo"
})



anime.timeline({
    loop:true
})
    .add({
    targets: '#title span',
    translateY: [-5, 1],
    delay: anime.stagger(100),
    duration:1000,
    easing: "easeOutExpo"
})


gsap.from(".aboutMe",{
    scrollTrigger: ".aboutMe",
    x: -400,
    duration: 1,
    opacity:0,
    ease: "power4.out"
})

gsap.from(".webDesign",{
    scrollTrigger: ".graphics",
    x: 400,
    duration: 1.2,
    opacity:0,
    ease: "power4.out"
})

gsap.from(".photography",{
    scrollTrigger: ".graphics",
    x: 500,
    duration: 1.4,
    opacity:0,
    ease: "power4.out"
})

gsap.from(".graphics",{
    scrollTrigger: ".graphics",
    x: 600,
    duration: 1.6,
    opacity:0,
    ease: "power4.out"
})

gsap.from(".webDevelopment",{
    scrollTrigger: ".graphics",
    x: 700,
    duration: 1.8,
    opacity:0,
    ease: "power4.out"
})

gsap.from(".skillHead",{
    scrollTrigger: ".progress-circle",
    y: -100,
    duration: 1,
    opacity:0,
    ease: "power4.out"
})

gsap.from(".skillp",{
    scrollTrigger: ".progress-circle",
    y: -50,
    duration: 1,
    opacity:0,
    ease: "power4.out"
})

gsap.from(".progress-circle",{
    scrollTrigger: ".progress-circle",
    scale: 0,
    duration: 1,
    opacity:0,
    stagger: 0.3,
    ease: "power4.out",
    rotate: -360
})

gsap.from(".portfolioHead",{
    scrollTrigger: ".portfolioHead",
    x: -100,
    duration: 1,
    opacity:0,
    ease: "power4.out"
});

gsap.from(".card",{
    scrollTrigger: ".portfoliohead",
    scale: 0,
    duration: .5,
    opacity:0,
    ease: "power1.out",
})


gsap.from(".column",{
    scrollTrigger: "#lname",
    y: 100,
    duration: 1,
    opacity:0,
    ease: "power1.out",
})