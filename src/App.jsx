import { useState } from 'react'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FarmToLuxurySection from './components/FarmToLuxurySection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import LuxuryExperience from './components/LuxuryExperience'
import Services from './components/Services'


function App() {

    return (
      <> 
        <Navbar />
        <HeroSection />
        <Services />
        <FarmToLuxurySection />
        <CallToAction />
        <LuxuryExperience />
        <Footer />
      </>
    )
}

export default App
