import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import HomePage_Hero from '../components/HomePage_Hero'
import HomePage_About from '../components/HomePage_About'

const HomePage = () => {

  return (
    <>
      <Navbar />
      <HomePage_Hero />
      <HomePage_About />

      <div className="flex flex-col items-center bg-gray-100">
        <div className="w-[70%] h-screen">
          <div className="flex flex-col items-center">
            <p className='text-5xl font-bold tracking-wider pt-16 pb-8 font-serif text-center'>Our proven process</p>
            <p className='text-slate-700 w-[50vw] text-center font-semibold'>Marketing fundamentals drive results – not tactics or fads. That’s what our approach is all about: universal performance marketing truths that stand the test of time and help you win.</p>
            <div className="grid grid-cols-4 w-full gap-5 py-16">
              <div className="w-full flex gap-5">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tl from-blue-500 via-emerald-500 to-teal-500">
                  <p className='text-4xl font-bold text-center w-full bg-white h-full flex justify-center items-center rounded-full'>P</p>
                </div>
                <div className="w-[60%] py-1">
                  <p className='text-4xl font-bold'>Prepare</p>
                  <p className='text-sm font-semibold py-2'>DISCOVER | MODEL</p>
                  <p className='font-semibold text-slate-700'>Understand your business and its revenue funnel</p>
                </div>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1" /></svg>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tl from-blue-500 via-emerald-500 to-teal-500">
                  <p className='text-4xl font-bold text-center w-full bg-white h-full flex justify-center items-center  rounded-full'>P</p>
                </div>
                <div className="w-[60%] pt-1">
                  <p className='text-4xl font-bold'>Prepare</p>
                  <p className='text-sm font-semibold py-2'>DISCOVER | MODEL</p>
                  <p className='font-semibold text-slate-700'>Understand your business and its revenue funnel</p>
                </div>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1" /></svg>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tl from-blue-500 via-emerald-500 to-teal-500">
                  <p className='text-4xl font-bold text-center w-full bg-white h-full flex justify-center items-center  rounded-full'>P</p>
                </div>
                <div className="w-[60%] pt-1">
                  <p className='text-4xl font-bold'>Prepare</p>
                  <p className='text-sm font-semibold py-2'>DISCOVER | MODEL</p>
                  <p className='font-semibold text-slate-700'>Understand your business and its revenue funnel</p>
                </div>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1" /></svg>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tl from-blue-500 via-emerald-500 to-teal-500">
                  <p className='text-4xl font-bold text-center w-full bg-white h-full flex justify-center items-center  rounded-full'>P</p>
                </div>
                <div className="w-[60%] pt-1">
                  <p className='text-4xl font-bold'>Prepare</p>
                  <p className='text-sm font-semibold py-2'>DISCOVER | MODEL</p>
                  <p className='font-semibold text-slate-700'>Understand your business and its revenue funnel</p>
                </div>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1" /></svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2">
                {/* <img src={`${require('../assets/static/')}`} alt="" /> */}
              </div>
              <div className="w-1/2">
                <p className='text-3xl font-bold tracking-wider py-4 font-serif'>Always going beyond the lead</p>
                <p className='font-semibold text-slate-700'>We’re never satisfied with just a click or lead. So through our Act and Calibrate phases, we optimize for outcomes that matter most to your business — like qualified leads, sales opportunities, and Closed Won revenue.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1"/></svg> */}
      {/* <LandingPage /> */}

    </>
  )
}

export default HomePage