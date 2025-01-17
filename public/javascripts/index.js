gsap.to(".nav", {
    backgroundColor: `rgb(184,212,207/1)`,
    // // backgroundColor:`cyan`,
    backdropFilter: "blur(15px)",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -1%",
        end: "top -50%",
        scrub: 1
    }
})

gsap.from(".head", {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".head",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 70%",
        scrub: 2
    }
})

gsap.to(".nav", {
    dispaly: "none",
    opacity: 0,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -250%",
        end: "top -250%",
        scrub: 1
    }
})


gsap.from(".cards",{
    y:"100%",
    stagger:0.4,
    duration:1,
    opacity:0,
    ease:"none",
    scrollTrigger:{
        trigger:".cards-container",
        scroller:"body",
        // markers:true,
        // start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})


function marquee() {
    const anim = document.querySelectorAll(".anim");

    anim.forEach(function (e) { // Set initial transform
        gsap.to(e, {
            transform: "translateX(-100%)", // Ensure consistent property usage
            duration: 11,
            ease: 'linear',
            repeat: Infinity,
            scrollTrigger: {
                trigger: e,
                scroller: "body",
                // markers:true,
                start: "top 80%",
                end: "top 80%",
                
            }
        });
    });
}
marquee();


function typeWriterEffect() {

    const span = document.querySelector(".change");

    function typeWriter(textElement, text, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                textElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                setTimeout(function () {
                    textElement.innerHTML = "";
                        callback();
                    
                }, 1000);
            }
        }
        type();
    }

    function changing() {
        typeWriter(span, 'Project', 300, function () {
            setTimeout(function () {
                typeWriter(span, 'Talent', 300, changing);
            }, 1000);
        });
    }

    changing();
}
typeWriterEffect();

var currentUrl = window.location.href;

var navLinks = document.querySelectorAll('.navlinks');
navLinks.forEach(function(link) {
  if (link.href === currentUrl) {
    link.classList.add("text-[#43856F]");
  }
});