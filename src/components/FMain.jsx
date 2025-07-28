import React from 'react'

const FMain = () => {
  return (
    <div id='FMain' className='Hero bg-emerald-100  px-30 flex items-center justify-center h-90 w-full text-black '>
           <div className=' flex flex-col  h-40 gap-y-2  justify-center'>
             <h2 className='text-2xl md:text-3xl font-bold opacity-50   flex items-center justify-center'>Hi,I'm  Priyanshu Mehra</h2>    
             <h1 className=' text-3xl md:text-5xl font-bold flex items-center justify-center text-wrap '> I'm a Frontend Developer</h1>
             <div className='flex justify-center '>
             <button className='mt-6 rounded text-xl font-bold  h-auto  w-auto p-2 hover:bg-emerald-800 bg-emerald-600 md:bg-emerald-400 flex items-center justify-center ' >
                <a href="https://docs.google.com/document/d/14xEK8timYxvci2lVCmpNZtm2zNYfTIZlpCretz0C0EA/edit?usp=sharing" target='blank'> Resume</a>
             </button>
            </div>  
           </div>
    </div>
  )
}

export default FMain ; 