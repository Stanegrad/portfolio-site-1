const tl = gsap.timeline({default: {duration: 0.75}})

tl.fromTo('.top-cloud', {opacity:0, x: 100}, {opacity: 1, x: 0}, 2)
tl.fromTo('.bottom-cloud', {opacity:0, x: -100}, {opacity: 1, x: 0}, 2)
tl.fromTo('.mountain-pic', {opacity:0, y: 100}, {opacity: 1, y: 0}, 2.5)


gsap.from('.profile-pic', {
    duration: 1,
    autoAlpha: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".profile-pic",
        // markers: true,
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
    }
})

gsap.from('.code-img', {
    duration: 0.75,
    autoAlpha: 0,
    x: -400,
    scrollTrigger: {
        trigger: ".code-img",
        // markers: true,
        // Trigger Scroller
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
    }
})

gsap.from('.chilli-img', {
    duration: 0.75,
    autoAlpha: 0,
    x: 300,
    scrollTrigger: {
        trigger: ".chilli-img",
        // markers: true,
        // Trigger Scroller
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
    }
})