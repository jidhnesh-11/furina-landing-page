
var tl = gsap.timeline()

tl.from(".navbar", {

  y:-10,
  opacity:0,
  duration:2,
  delay:1.5,

})

tl.from("li",{
  y:-10,
  opacity:0,
  duration:0.5,
  delay:0.01,
  stagger:1
})

gsap.from(".left-center",{

  y:15,
  opacity:0,
  duration:1,
  delay:2
})

gsap.from(".bottom-left",{

  y:15,
  opacity:0,
  duration:0.5,
  delay:1.5
})

gsap.from(".bottom-right",{

  y:15,
  opacity:0,
  duration:0.5,
  delay:1.5
})


