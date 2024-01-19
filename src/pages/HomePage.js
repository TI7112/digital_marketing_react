import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import HomePage_Hero from '../components/HomePage_Hero'
import HomePage_About from '../components/HomePage_About'
import AboutUsVideo from '../components/AboutUsVideo'
import ProvenProcess from '../components/ProvenProcess'
import { Link } from 'react-router-dom'
import DigitalPrincepal from '../components/DigitalPrincepal'
import Services from '../components/Services'
import TalkDigitally from '../components/TalkDigitally'
import FooterSection from '../components/FooterSection'

const HomePage = () => {

  return (
    <>
      <Navbar />
      <HomePage_Hero />
      <HomePage_About />
      <ProvenProcess />
      <AboutUsVideo />
      <DigitalPrincepal />
      <Services />
      <TalkDigitally />
      <FooterSection />
     


      {/* <LandingPage /> */}

    </>
  )
}

export default HomePage