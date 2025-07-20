import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Hero2 = () => {
  return (
    <div id='connect' className=' mt-10 flex h-auto w-full p-5 bg-blue-950 text-white'>
      {/* left */}
      <div className='  w-1/2 h-55 flex flex-col    '>
        <div  >
          <p className='font-bold text-2xl px-3'>Personal Details</p>
        </div>
        <div className='flex justify-center'>
          <p className='font-medium text-lg px-8 pt-5'>Aspiring Frontend Developer skilled in HTML, CSS, JavaScript, React, Tailwind and Bootstrap. Looking to create responsive and engaging web applications.</p>
        </div>
        <div className='pt-8 px-8 flex  justify-start gap-x-5 '>
           <div><a  href="https://github.com/mehra91"><FaGithub className='h-8 w-8'/></a> </div>
             <div> <a href="https://www.instagram.com/mr_mehra_383/"><FaInstagram className='h-8 w-8 hover:no-underline ' /></a></div>
              <div> <a href="https://www.linkedin.com/in/priyanshu-mehra-70b044229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='h-8 w-8 hover:no-underline ' /></a></div>
        </div>
      </div>
      {/* right */}
      <div className='   h-50 w-1/2 '>
        <div className='text-2xl font-bold   '>
          <p> Connect Me !</p>
        </div>
        <div className='text-lg px-8 pt-5'>
          <p className='opacity-75 pt-2 font-medium'>Feel free to ask / inquire about anything (school, internships, etc).</p>

          <p className='opacity-50 pt-2 flex gap-x-2 items-center justify-start'><MdEmail/><a  href="mailto:pm7300779625@gmail.com"> pm7300779625@gmail.com</a></p>
          <p className='opacity-50 pt-2 flex gap-x-2 items-center justify-start'> <FaPhoneAlt /> +919058044137</p>
        </div>
      </div>
       
    </div>
  )
}

export default Hero2;



 