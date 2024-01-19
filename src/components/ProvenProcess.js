import React from 'react'

const ProvenProcess = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100">
            <div className="w-[70%] py-20">
                <div className="flex flex-col items-center">
                    <p className='text-5xl font-bold tracking-wider pb-8 font-serif text-center'>Our proven process</p>
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
                                <p className='text-4xl font-bold text-center w-full bg-white h-full flex justify-center items-center  rounded-full'>A</p>
                            </div>
                            <div className="w-[60%] pt-1">
                                <p className='text-4xl font-bold'>Act</p>
                                <p className='text-sm font-semibold py-2'>PLAN | EXECUTE</p>
                                <p className='font-semibold text-slate-700'>Identify your opportunities and attack leverage points within that funnel</p>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1" /></svg>
                            </div>
                        </div>
                        <div className="w-full flex gap-5">
                            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tl from-blue-500 via-emerald-500 to-teal-500">
                                <p className='text-4xl font-bold text-center w-full bg-white h-full flex justify-center items-center  rounded-full'>C</p>
                            </div>
                            <div className="w-[60%] pt-1">
                                <p className='text-4xl font-bold'>Calibrate</p>
                                <p className='text-sm font-semibold py-2'>MEASURE | ADAPT</p>
                                <p className='font-semibold text-slate-700'>Make necessary course corrections to further align actions with the desired result</p>
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
                                <p className='text-4xl font-bold'>Evolve</p>
                                <p className='text-sm font-semibold py-2'>ITERATE | OPTIMIZE</p>
                                <p className='font-semibold text-slate-700'>Constantly measure, adapt, and improve results at each identified lever in the funnel</p>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex justfy-between">
                        <div className="w-1/2">
                            <img src={`${require('../assets/static/moto.svg')}`} alt="" />
                        </div>
                        <div className="w-1/2">
                            <p className='text-3xl font-bold tracking-wider py-4 font-serif'>Always going beyond the lead</p>
                            <p className='font-semibold text-slate-700'>We’re never satisfied with just a click or lead. So through our Act and Calibrate phases, we optimize for outcomes that matter most to your business — like qualified leads, sales opportunities, and Closed Won revenue.</p>
                        </div>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 233"><path d="M27.6 233H0v-1h26.6V129.9l5.9-13.9-5.9-13V1H0V0h27.6v102.9l5.9 13.1-5.9 14.1z" fill="#e1e0e1"/></svg> */}
                        {/* <LandingPage /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProvenProcess