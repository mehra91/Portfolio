 let tl= gsap.timeline();

tl.from("#about,#top_div,#Skills,#logo_skills,.skills_logos,#bottom_div,#Education,#part1,#part2",{
    y:30,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.5,
})
tl.from(".contact_body,#left_div,#LH1,#para,p,#right_div,#form,#label,input,#send_btn",{
    y:30,
    opacity:0,
    duration: 1,
    stagger:0.5,
})
