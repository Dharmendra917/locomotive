
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// page1 animaton
gsap.from("#page1  nav h2",{
    y:'-150%',
    opacity: .5,
    duration: .9,
    ease: Power1,
    delay: .4,
},'same1')
gsap.to("#page1  .container span img",{
    bottom:'5%',
    duration: .9,
    delay: .7,
    ease: Power1,
},'same1')
gsap.to("#page1 .container h1",{
    top: "62%",
    rotateX: "0deg",
    ease: Power1,
    duration: 1,
    delay: .5,
    stagger: .1,
    opacity: 1,
},'same1')

var tl1 = gsap.timeline({
    scrollTrigger: {
        // trigger: "#page1",
        scroll: "#main",
        start: "100% 100%",
        end: "100% 0%",
        // markers: "true",
        // pin: true,
        scrub:1,
    }
})

tl1.to(".nav",{
    padding: "0% 5%",
    ease: Power1, 
},"same2")
tl1.to(".header",{
    ease: Power1,
    y: "-35%",   
},"same2")
tl1.to(".t_one",{
    ease: Power1,
    y: "-100%", 
},"same2")
tl1.to(".header_b",{
    ease: Power1,
    y: "-25%", 
},"same2")
tl1.to(".header_b .b_one",{
    ease: Power1,
    y: "-15%",
},"same2")
tl1.to(".header_b .b_two",{
    ease: Power1,
    y: "-45%",
},"same2")
tl1.to(".header_b .b_four",{
    ease: Power1,
    y: "-25%",
},"same2")
tl1.to("#page1 span img",{
    ease: Power1,
    y: "-50%",
},"same2")
tl1.to("#page1 .border",{
    ease: Power1,
    scale : 1,
    // duration: .1,
},"same2")
tl1.to("#page2 .right  p",{
    ease: Power1,
    width: "100%",
    stagger: .1,
},"same2")

//-----------------page3-----------------------------
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3 ",
        scroll: "#main",
        start: "40% 100%",
        end: "40% 0%",
        // markers: "true",
        // pin: true,
        scrub:1,
    }
})
tl2.to("#page3 .left .text",{
    top: "40%",
    ease: Power1,
},"same3")
tl2.to("#page3 .right img",{
    top: "-15%",
    ease: Power1,
},"same3")
tl2.to("#page3 .right .cir",{
    scale: 1,
    ease: Power1,
},"same3")
tl2.to("#page3 .right .cir",{
    top: "5%",
    ease: Power1,
},"same3")
tl2.to("#page3 .right h2",{
    top: "70%",
    ease: Power1,
    delay: .2,
},"same3")

//-----------------page4---------------
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroll: "#main",
        start: "40% 100%",
        end: "40% 0%",
        // markers: "true",
        // pin: true,
        scrub:1,
    }
})
tl3.to("#page4 .left .cir1",{
    ease: Power1,
},"same4")
tl3.to("#page4 .left .cir2",{
    ease: Power1,
    scale: 1,
    delay: -.1,
},"same4")
tl3.to("#page4 .left .cir1",{
      ease: Power1,
      top: "40%",
},"same4")
tl3.to("#page4 .left .cir2",{
    ease: Power1,
    top: "70%",
},"same4")
tl3.to("#page4 .container1 h2",{
    ease: Power1,
   top: "80%",
},"same4")
tl3.to("#page4 .right .cir1.a",{
    ease: Power1,
    top: "60%",
},"same4")
tl3.to("#page4 .right .cir1.b",{
    ease: Power1,
    top: "10%",
},"same4")
tl3.to("#page4 .right .cir1.c",{
    ease: Power1,
    top: "40%",
},"same4")
tl3.to("#page4 .right img",{
    ease: Power1,
   top: "25%",
   delay: .1,
},"same4")
//---------page5-----------
var tl4 = gsap.timeline({
    scrollTrigger: {
        scroll: "#main",
        trigger: "#page5",
        start: "100% 100%",
        end: "100% 0%",
        // markers: true,
        pin: true,
        scrub: 2,
    }
})
tl4.to("#page5 .layer",{
    top: "-100%",
    eass: Power1,
},"same5")
tl4.to("#page5 .layer .block",{
    stagger:.1,
    eass: Power1,
},"same5")
tl4.to("#page5 .layer .block.-one",{
    x: "-100%",
    eass: Power1,
},"same5")
tl4.to("#page5 .layer .block.-three",{
    x: "-100%",
    // top: "150%",
    eass: Power1,
    delay: .1,
},"same5")
tl4.to("#page5 .layer .block.-four",{
    x: "-90%",
    eass: Power1,
    bottom: "-5%"
},"same5")
tl4.to("#page5 .layer .block.-two",{
    x: "90%",
    // top : "90%",
    delay: .1,
    eass: Power1,
},"same5")
tl4.to("#page5 .layer .block.-five",{
    x: "100%",
    eass: Power1,
},"same5")
// ---------------page6------------------------
var tl4 = gsap.timeline({
    scrollTrigger: {
        scroll: "#main",
        trigger: "#page6",
        start: "100% 100%",
        end: "100% 20%",
        // markers: true,
        pin: true,
        scrub: 1,
    }
})
tl4.to("#page6 .inner_c",{
    eass: Power1,
    top: "-90%",
    duration: 5,
},"sam5")
tl4.to("#page6 .left .text",{
    eass: Power1,
    top: "-20%",
    duration: 2,
    delay: 1,
},"sam5")
tl4.to("#page6 .inner_c .cir_",{
    eass: Power1,
    duration: 5,
},"sam5")
tl4.to("#page6 .inner_c .cir_",{
    eass: Power1,
    y: "90%",
    duration: 4,
},"sam5")
tl4.to("#page6 .inner_c .cir_",{
    eass: Power1,
    duration:4,
    // delay: -.1,
    y: "0%",
},"sam6")
tl4.to("#page6 .inner_c .box.-three h1 span" ,{
    eass: Power1,
    stagger: .3,
    opacity: 1,
    duration: 3,
},"sam5")

//---------page7-----------
var tl5 = gsap.timeline({
    scrollTrigger: {
        scroll: "#main",
        trigger: "#page7",
        start: "100% 100%",
        end: "100% 0%",
        // markers: true,
        pin: true,
        scrub: 1,
    }
})
tl5.to("#page7 .right .layer",{
    ease: Power1,
    height: "0%",
    duration: 5,
},"same7")
tl5.to("#page7 .right .layer2",{
    ease: Power1,
    // height: "50%",
    y: "-60%",
    duration: 5,
    delay:5,
},"same7")
tl5.to("#page7 .right",{
    ease: Power1,
    y: "-40%",
    duration: 5,
    delay: 5,
},"same7")
//-------page8-----------------
var tl8 = gsap.timeline({
    scrollTrigger: {
        scroll: "#main",
        trigger: "#page8",
        start: "70% 70%",
        end: "70% 0%",
        // markers: true,
        pin: true,
        scrub: 1,
    }
})
tl8.to("#page8 h1",{
    opacity: 1,
    rotateX: "0deg",
    duration: 3,
    stagger: .1,
})
//-----------page9--------
var tl6 = gsap.timeline({
    scrollTrigger: {
        scroll: "#main",
        trigger: "#page9",
        start: "100% 100%",
        end: "100% 0%",
        // markers: true,
        pin: true,
        scrub: 1,
    }
})
 
tl6.to("#page9 .layer",{
    top: "-10%",
    duration: 5,
    ease: Power1,
},"same8")
tl6.to("#page9 .layer .t_one",{
    left: "-50%",
    top: "-30%",
    ease: Power1,
    duration: 5,
},"same8")
tl6.to("#page9 .layer .t_two",{
    left: "110%",
    top: "-10%",
    ease: Power1,
    duration: 5,
})
//---------page10----------
var tl7 = gsap.timeline({
    scrollTrigger: {
        scroll: "#main",
        trigger: "#page10",
        start: "100% 100%",
        end: "100% 90%",
        // markers: true,
        pin: true,
        scrub: 1,
    }
})
tl7.to("#page10 h1",{
    rotateX : "0deg",
    opacity: 1,
    stagger: .1,
})