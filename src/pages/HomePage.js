import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: `URL(${require('../assets/static/hero_bg.webp')})` }} className={`bg-[#072d56] flex items-center justify-center w-full h-[85vh] bg-right bg-no-repeat`}>
        <div className="flex items-center h-full w-[75%] pt-16">
          <div class="w-[40%] h-[60%] flex flex-col gap-12   ">
            <h1 class="text-white leading-[1.1em] font-serif font-bold px-4 tracking-wide text-6xl">Drive growth at scale for your brand.</h1>
            <div className="">
              <svg className='rotate-90 w-36 h-28 py-2 ' viewBox="0 0 65.1 91.5" fill='#0693e3' xmlns="http://www.w3.org/2000/svg"><g class=" plus-1"><path d="m6.2 6.3v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 1.8h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g><g class="center-col"><path class="plus-11" d="m33.1 53.3h-1.5v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-8" d="m33.1 79.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-5" d="m33.1 27.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-2" d="m33.1 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path></g><path class="plus-3" d="m58.9 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-4" d="m7.6 27.3h-1.4v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.3z"></path><g class="glitcher plus-6"><path d="m57.4 33.3 1.5-1.5v-4.5h-1.5v4.7h-4.1v1.3z"></path><path d="m58.9 31.8-1.5 1.5v4.5h1.5v-4.5h4.1v-1.3h-4.1z"></path></g><path class="plus-7" d="m7.6 53.3h-1.4v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.3z"></path><g class="glitcher plus-9"><path d="m57.4 57.8v.2h-4.1v1.3h4.1v4.5h1.5v-4.5z"></path><path d="m58.9 53.3h-1.5v4.5l1.5 1.5h4.1v-1.3h-4.1z"></path></g><g class="glitcher plus-10"><path d="m6.2 83.8v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 79.3h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g></svg>
            </div>
          </div>
          <div class="w-60 h-[60%]">
            <svg className='w-36 h-28 py-2 ' fill='#0693e3' viewBox="0 0 65.1 91.5" xmlns="http://www.w3.org/2000/svg"><g class="glitcher plus-1"><path d="m6.2 6.3v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 1.8h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g><g class="center-col"><path class="plus-11" d="m33.1 53.3h-1.5v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-8" d="m33.1 79.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-5" d="m33.1 27.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-2" d="m33.1 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path></g><path class="plus-3" d="m58.9 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path class="plus-4" d="m7.6 27.3h-1.4v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.3z"></path><g class="glitcher plus-6"><path d="m57.4 33.3 1.5-1.5v-4.5h-1.5v4.7h-4.1v1.3z"></path><path d="m58.9 31.8-1.5 1.5v4.5h1.5v-4.5h4.1v-1.3h-4.1z"></path></g><path class="plus-7" d="m7.6 53.3h-1.4v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.3z"></path><g class="glitcher plus-9"><path d="m57.4 57.8v.2h-4.1v1.3h4.1v4.5h1.5v-4.5z"></path><path d="m58.9 53.3h-1.5v4.5l1.5 1.5h4.1v-1.3h-4.1z"></path></g><g class="glitcher plus-10"><path d="m6.2 83.8v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 79.3h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g></svg>
          </div>
          <div className="w-[40vw] h-[45vh] flex items-center">
            <div className="w-full h-full bg-white p-6 rounded-xl">
              <div className="w-full h-full px-20 mt-3">
                <div className="relative h-10">
                  <div className="w-full h-[3px] rounded-full bg-slate-500"></div>
                  <div className="absolute -top-3 w-full flex justify-between">
                    <div className="">
                    <p className=' border-2 border-slate-800 bg-white w-8 h-8 rounded-full text-center font-bold'>1</p>
                    <div className="bg-[#0693e3] mt-1.5 h-[3px] w-full"></div>
                    </div>
                    <div className="">
                    <p className=' border-2 border-slate-800 bg-white w-8 h-8 rounded-full text-center font-bold'>2</p>
                    <div className="bg-[#0693e3] mt-1.5 h-[3px] w-full"></div>
                    </div>
                    <div className="">
                    <p className=' border-2 border-slate-800 bg-white w-8 h-8 rounded-full text-center font-bold'>3</p>
                    <div className="bg-[#0693e3] mt-1.5 h-[3px] w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LandingPage /> */}
    </>
  )
}

export default HomePage