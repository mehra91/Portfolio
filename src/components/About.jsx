import React from 'react'
import AboutCard from './AboutDiv'

const About = () => {
  return (
    <div id='About' className=' h-auto w-full mt-3 pl-2 pt-3'>
        <div className='    pl-4'>
            <h1 className='text-3xl font-bold  w-2/9 '>Education</h1>
                < AboutCard
                    year="2023-2026"
                    experience ="B-Tech"
                    workingPoint ="Uttrakhand Technical University"
                    defination ="Completed Btech degree from amrapli university and prusing btech "
                />
                < AboutCard
                    year="2020-2023"
                    experience ="Diploma"
                    workingPoint ="UBTER"
                    defination ="Completed Diploma from UBTER and pass out with 80% "
                />
                < AboutCard
                    year="2020"
                    experience ="XII"
                    workingPoint ="Uttrakhand State Board"
                    defination =" Completed XII from STATE BOARD and pass out with 67.2% "
                />
                < AboutCard
                    year="2018"
                    experience ="X"
                    workingPoint ="Uttrakhand State Board"
                    defination =" Completed X from STATE BOARD and pass out with 76.4% "
                />

        </div>
    </div>
  )
}

export default About;