
gsap.to(".imgcontainer",{
    ease: Expo.easeInout,
    width :"100%",
    stagger: 2
})
gsap.to(".imgcontainer",{
    delay:2,
    ease: Expo.easeInout,
    width :"0%",
    stagger: 2
})
gsap.to("#headRapper h1",{
    ease: Expo.easeInout,
    stagger:2,
    top: "0px",
})
gsap.to("#headRapper h1",{
    delay : 2,
    ease: Expo.easeInout,
    stagger:2,
    top: "-100px",
})
gsap.to("#paraRapper p",{
    ease: Expo.easeInout,
    stagger:2,
    top: "0px",
})
gsap.to("#paraRapper p",{
    delay : 2,
    ease: Expo.easeInout,
    stagger:2,
    top: "-100px",
})