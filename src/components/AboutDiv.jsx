import React from 'react';
import AboutCard from './AboutDiv';

const Aboutdiv = ({year, experience, link, workingPoint, defination}) => {
  return (
    <div className=' md:w-5/6  p-8 md:p-5 h-auto md:h-40  bg-emerald-200 relative border border-indigo-100    flex justify-end mt-10 ml-5 md:ml-10'>
               <div className='absolute top-5 md:-top-0.5  z-0 -left-10   bg-emerald-600 overflow-hidden rounded-full h-30 w-30 md:w-40 md:h-40 flex items-center justify-center px-10 py-15 md:px-7 md:py-12  '>
                    <h2 className=' font-semibold' >
                        {year} 
                    </h2>
                        <div className='absolute  size-30  shadow-sm -bottom-18 -right-10  z-10 bg-b200 rounded-full '></div>
                        <div className=' inset-shadow-sm  inset-shadow-black/50 bg-emerald-100  z-30 h-23 w-22.5   absolute -bottom-15 -right-7 -rotate-395 '>.</div>
               </div>
                         
               <div className='  h-auto md:bg-emerald-200 gap-x-2 w-4/5  md:h-28    flex flex-col   justify-center pl-12 md:px-6 py-0'>
                    <h2  className='  self-end  flex itmes-center text-base md:text-2xl w-fit   '>
                         <span className=' w-28  flex justify-end font-bold text-xl md:text-2xl   '>{experience}</span> 
                         <span className=' font-bold text-xl  opacity-60 self-end md:text-2xl'><a className='ml-4 border-b-4 border-amber-400'  href={link}  >{workingPoint}</a></span>
                    </h2>
                    <p className=' mt-5 md:mt-4 text-base md:text-lg font-medium opacity-70'>
                         {defination}
                    </p>
               </div>
             </div>
  )
}

export default Aboutdiv