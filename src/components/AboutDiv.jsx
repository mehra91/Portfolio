import React from 'react'
import AboutCard from './AboutDiv'

const Aboutdiv = (props) => {
  return (
    <div className='  w-5/6 p-5 h-40  bg-white relative border border-indigo-100   flex justify-end mt-10 ml-10'>
               <div className='absolute -top-0.5 z-0 -left-10   bg-blue-300 overflow-hidden rounded-full w-40 flex items-center justify-center px-7 py-12 h-40'>
                    <h2 >
                        {props.year} 
                    </h2>
                        <div className='absolute  size-30  shadow-sm -bottom-18 -right-10  z-10 bg-b200 rounded-full '></div>
                        <div className=' inset-shadow-sm  inset-shadow-black/50 bg-white  z-30 h-23 w-22.5   absolute -bottom-15 -right-7 -rotate-395 '>.</div>
               </div>
                         
               <div className=' gap-x-5 w-4/5 h-28  flex flex-col   justify-center px-6 py-2'>
                    <h2  className=' font-medium self-end border-b-2 border-amber-400 shadow-2xl  flex itmes-center text-2xl w-fit  '>
                        {props.experience}- {props.workingPoint}
                    </h2>
                    <p className='mt-4 text-lg font-medium'>
                         {props.defination}
                    </p>
               </div>
             </div>
  )
}

export default Aboutdiv