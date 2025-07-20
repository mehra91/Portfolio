import React from 'react'

const FMain = () => {
  return (
    <div id='FMain' className='Hero bg-orange-100  px-30 flex items-center justify-center h-90 w-full text-black '>
           <div className=' flex flex-col  h-40 gap-y-2  justify-center'>
             <h2 className='text-2xl font-semibold opacity-50   flex items-center justify-center'>Hi,I'm  Priyanshu Mehra</h2>    
             <h1 className='text-5xl font-bold flex items-center justify-center text-wrap '> I'm a Frontend Developer</h1>
             <div className='flex justify-center '>
             <button className='mt-6 rounded   h-8  w-16 hover:bg-cyan-500 bg-cyan-400 flex items-center justify-center ' >
                <a href="https://images.unsplash.com/photo-1752610877640-25087fb5205a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" target='blank'> Resume</a>
             </button>
            </div>  
           </div>
    </div>
  )
}

export default FMain ; 