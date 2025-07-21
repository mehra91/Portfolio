import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import FMain from './FMain.jsx'
import SkillsCard from './Card.jsx'
 


const Home = () => {
  return (
     <>
     <Navbar />
    <FMain />
    <About />
    <SkillsCard />
    <Footer/>
  
     
     </>
  )
}

export default Home;