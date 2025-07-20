import React from 'react'
 

 
const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    { name: "Tailwind", img: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
];

const Carousel = () => (
   <div id='skills' className=' overflow-hidden relative mt-10  flex  bg-orange-100    h-40'>
    <div className="  w-2/4 py-2 ml-4    " style={{ height: "70px" }}>
        <h2 className='text-4xl font-semibold px-5  '>
            Skills
        </h2>
        <div
            className="flex py-8 gap-8"
            style={{
                width: "max-content",
                animation: "carousel-scroll 18s linear infinite",
            }}>

            {[...skills ,...skills,...skills,...skills].map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[80px]">
                    <img src={skill.img} alt={skill.name} className="h-10 w-10 mb-2" />
                    <span className="text-xs">{skill.name}</span>
                </div>
            ))}
        </div>
        <style>
            {`
                @keyframes carousel-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}
        </style>
        
    </div>
 </div>
);

export default Carousel;

