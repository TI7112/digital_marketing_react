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

  const TalkDigitallyData = [
    {
      title: 'Insights',
      desc: 'Get the WebMechanix perspective on industry updates, best practices, and more.',
      imgurl: 'crosslink-insights.jpg',
      btn_title: 'Learn more',
      btn_link: '#',
    },
    {
      title: 'Meet the team',
      desc: 'Get to know a little more about the 60+ problem solvers behind the work.',
      imgurl: 'TheTeam.jpg',
      btn_title: 'See our faces',
      btn_link: '#',
    },
  ]




  return (
    <>
      <Navbar />
      <HomePage_Hero />
      <HomePage_About />
      <ProvenProcess />
      <AboutUsVideo />
      <DigitalPrincepal />
      <Services />
      <TalkDigitally data={TalkDigitallyData}>
        <div className="min-h-[50vh] pt-20 w-[70%] flex flex-col items-center">
          <p className='text-5xl font-bold tracking-wider text-white pt-16 pb-8 font-serif text-center'>Ready to talk digital?</p>
          <Link to={'#'}>
            <p className='w-fit bg-sky-700 border-2  px-16 text-white duration-300 py-2 uppercase tracking-wider rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full rounded-br-full hover:rounded-none text-lg'>Get started with your free audit</p>
          </Link>
        </div>
      </TalkDigitally>
      <FooterSection />



      {/* <LandingPage /> */}

    </>
  )
}

export default HomePage