let tl = gsap.timeline();

tl.from(".left_bar",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:0.3,
})
tl.from("#resources,#no3",{
    y:-30,
    opacity:0,
    duration: 1,
    stagger:0.5,
})
tl.from(".social_media ,#S_iconA,#S_iconB,#S_iconC",{
    y:-30,
    opacity:0,
    duration: 1,
    stagger:0.5,
})
  tl.from(".intro_div,#intro_part,#h4_heading,#h1_heading,.img_part,#h3_heading,.social_media2",{
    y:30,
    opacity:0,
    duration: 1,
    stagger:0.5,
})