import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
    const [countOn, setCounterOn] = useState(false)
    useEffect(() => {
        AOS.init({ duration: "900", delay: "100" })
    }, [])
    return (
        <div className="">
            {/* page: 1 */}
            <div className="bg-blue-950 w-screen flex h-screen mt-14" style={{ backgroundImage: "url(https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/wmx-hero-bg-2.webp)" }}>
                <div className="w-[50%]  h-full items-center  flex">
                    <h1 className='text-white text-6xl font-bold px-24 leading-snug'>Drive growth at scale for your brand.</h1>
                </div>
                <div className="w-[50%]">
                    <div className="flex h-full items-center">
                        <div className="bg-white w-fit p-7 rounded-2xl">
                            <h1 className='text-3xl font-semibold'>What are you interested in?*</h1>
                            <p className='text-sm text-center'>SELECT ALL THAT APPLY</p>
                            <div className="grid grid-cols-3 mt-9 gap-5 text-sm font-semibold">
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none py-3'>Paid Social</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none py-3'>Paid Search</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none py-3'>SEO</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none '>Creative</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none '>CRO</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none p-1'>Web Design + <br />Development</button>
                            </div>
                            <div className="leading-10 text-sm text-red-600 my-2">
                                <p>Please select at least one option.</p>
                                <p>Please complete all required fields.</p>
                            </div>
                            <div className="w-full flex justify-center mt-5">
                                <button className='bg-sky-700 px-10 text-white duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* page: 2 */}

            <div className=" w-screen h-screen items-center justify-center  flex">
                <div className="w-[50%] px-14">
                    <div className="w-full h-full">
                        <h1 className='text-6xl font-semibold text-blue-950'>Unlock your brand’s potential.</h1>
                        <p className='py-14 text-gray-500'>Best-of-breed digital marketing doesn’t live in the siloes of “B2B” or “B2C”. That’s why hundreds of ambitious brands partner with WebMechanix to help them bust through performance plateaus. We apply proven digital marketing approaches to maximize your efficiency. Then, turn up the heat to drive profitable growth at scale.</p>
                        <div className="grid grid-cols-3 gap-5">
                            <img data-aos="fade-up" className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/AAG1.png" alt="" />
                            <img data-aos="fade-up" className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/solar-logo-2-e1689689031832%201.png" alt="" />
                            <img data-aos="fade-up" className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/logo-gong-1%201.png" alt="" />
                            <img data-aos="fade-up" className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/everfi-blackbaud-colored-logo%201.png" alt="" />
                            <img data-aos="fade-up" className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/TMO1.png" alt="" />
                            <img data-aos="fade-up" className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/maxim-health-logo%201.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className=" w-full flex items-center justify-center h-full">
                        <img className='rounded-full w-96 h-96' src="https://img.freepik.com/free-photo/conference-room-with-desk-wall-windows-that-says-office_1340-37385.jpg" alt="" />
                    </div>
                </div>
            </div>


            {/* page: 3 */}

            <div className="bg-amber-50 py-16 w-screen ">
                <div className="text-center">
                    <h1 className='text-6xl text-blue-950 font-semibold'>Our proven process</h1>
                    <p className='text-blue-950 py-6'>Marketing fundamentals drive results – not tactics or fads. That’s what our approach is all about: universal performance <br /> marketing truths that stand the test of time and help you win.</p>
                </div>

                <div className="flex gap-24 mt-14 px-16">
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-sky-500 px-3 py-1'>P</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Prepare</h1>
                            <h2 className='text-base font-semibold'>DISCOVER | MODEL</h2>
                            <p className='text-gray-500 text-sm'>Understand your business and its revenue funnel</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-yellow-500 px-3 py-1'>A</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Act</h1>
                            <h2 className='text-base font-semibold'>PLAN | EXECUTE</h2>
                            <p className='text-gray-500 text-sm'>Identify your  opportunities and attack leverage points within that funnel</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-orange-500 px-3 py-1'>C</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Calibrate</h1>
                            <h2 className='text-base font-semibold'>MEASURE | ADAPT</h2>
                            <p className='text-gray-500 text-sm'>Make necessary course corrections to further align actions with the desired result</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-green-500 px-3 py-1'>E</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Evolve</h1>
                            <h2 className='text-base font-semibold'>ITERATE | OPTIMIZE</h2>
                            <p className='text-gray-500 text-sm'>Constantly measure, adapt, and improve results at each identified lever in the funnel</p>
                        </div>
                    </div>
                </div>

                <div className="w-full pt-32  flex px-16">
                    <div className="w-[50%] flex justify-center">
                        <img className=' w-[80%]' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/beyond-the-lead.svg" alt="" />
                    </div>
                    <div className="w-[50%] ">
                        <div className="flex justify-center w-full">
                            <div className="">
                                <h1 className='text-5xl leading-snug text-blue-950'>Always going <br />beyond the lead</h1>
                                <p className='pt-4'>We’re never satisfied with just a click or lead. So through <br />our Act and Calibrate phases, we optimize for outcomes <br />that matter most to your business — like qualified leads, <br />sales opportunities, and Closed Won revenue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* page: 4 */}

            <div className="w-screen h-screen bg-white"></div>



            {/* page: 5 */}

            <div className="bg-amber-50 flex py-16">
                <div className="w-[50%] flex flex-col items-center ">
                    <div className="py-4">
                        <img className='rounded-3xl shadow-gray-600 shadow-2xl w-96 h-96' src="https://www.themaevastore.com/cdn/shop/files/IMG_5811-1-2_900x.jpg?v=1684508622" alt="" />
                    </div>
                    <div className="text-left px-6 text-blue-900">
                        <h1 className='text-6xl font-bold py-10'>Our digital <br />principles</h1>
                        <p>It doesn’t matter if you’re buying media or earning it through SEO <br />and content. Following these 5 undying principles is the secret <br />ingredient to our clients’ success. Ignore these at your peril.</p>
                    </div>
                </div>
                <div className="w-[50%] flex flex-col gap-5 px-10">
                    <div data-aos="fade-down" className="flex gap-5">
                        <div className="">
                            <img className='w-36 rounded-full h-22' src="https://i.pinimg.com/474x/3b/06/34/3b06343baefdb2ce0e7259461d739668.jpg" alt="" />
                        </div>
                        <div className="text-blue-900">
                            <h1 className='text-3xl font-bold'>First, move the needle</h1>
                            <p className='text-sm py-3'>Fact: you’re probably wasting (a lot of) money somewhere. Find that waste, cut it and reallocate to what’s working right now. Increase your results immediately and create momentum.</p>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="flex gap-5">
                        <div className="">
                            <img className='w-36 rounded-full h-22' src="https://i.pinimg.com/474x/3b/06/34/3b06343baefdb2ce0e7259461d739668.jpg" alt="" />
                        </div>
                        <div className="text-blue-900">
                            <h1 className='text-3xl font-bold'>Get the data tight</h1>
                            <p className='text-sm py-3'>Your inputs determine your outputs. Good data = good decisions. And good decisions = good results. Clean, accurate and complete data is the linchpin of any winning campaign.</p>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="flex gap-5">
                        <div className="">
                            <img className='w-36 rounded-full h-22' src="https://i.pinimg.com/474x/3b/06/34/3b06343baefdb2ce0e7259461d739668.jpg" alt="" />
                        </div>
                        <div className="text-blue-900">
                            <h1 className='text-3xl font-bold'>80/20 marketing</h1>
                            <p className='text-sm py-3'>20% of your marketing efforts lead to 80% of your results. Identify the leverage points in your 20% and focus efforts there for the biggest gains in performance.</p>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="flex gap-5">
                        <div className="">
                            <img className='w-36 rounded-full h-22' src="https://i.pinimg.com/474x/3b/06/34/3b06343baefdb2ce0e7259461d739668.jpg" alt="" />
                        </div>
                        <div className="text-blue-900">
                            <h1 className='text-3xl font-bold'>Revenue-generating activities</h1>
                            <p className='text-sm py-3'>Or RGAs for short. Marketing’s not just about sexy ideas and tactics. Do the hard work of refining and testing your campaigns. Over time, you’ll beat your shiny object-chasing competitors.</p>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="flex gap-5">
                        <div className="">
                            <img className='w-36 rounded-full h-22' src="https://i.pinimg.com/474x/3b/06/34/3b06343baefdb2ce0e7259461d739668.jpg" alt="" />
                        </div>
                        <div className="text-blue-900">
                            <h1 className='text-3xl font-bold'>There’s always another level</h1>
                            <p className='text-sm py-3'>No matter how well a campaign or ad is doing, it can do better. Proactively research, test and evolve. You’ll unlock shocking new levels of growth and scale.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* page: 6 */}

            <div className="px-16">
                <div className="p-20">
                    <h1 className='text-center text-6xl text-blue-900 font-bold'>How we help you win.</h1>
                    <p className='text-center text-blue-900 py-4'>Top 1% media buying prowess. Performance-driven creative genius. God-tier technical and analytics capabilities. All <br />working together as an extension of your team, accountable to your goals and KPIs. This is how you win.</p>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="flex flex-col gap-4">
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>PAID SEARCH</button>
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>CREATIVE</button>
                    </div>
                    <div className="flex mt-20 flex-col gap-4">
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>PAID SOCIAL</button>
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>VIDEO</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>ORGANIC SEARCH</button>
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>WEB + TECHNICAL SERVICES</button>
                    </div>
                    <div className="flex mt-20 flex-col gap-4">
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>EMAIL + MARKETING AUTOMATION</button>
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>WEB DESIGN + DEVELOPMENT</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>UX + STRATEGY</button>
                        <button data-aos="flip-up" className='border py-8 rounded-xl hover:bg-sky-100 text-sm font-semibold'>BRANDING</button>
                    </div>
                </div>
            </div>



            {/* page: 7 */}

            <div className="">
                <div className="w-screen pt-56 flex">
                    <div className="w-[50%] flex items-center justify-center">
                        <img className='w-96 h-96 rounded-full' src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1017296670ITSupportSpecialist.jpg=ws1280x960" alt="" />
                    </div>
                    <div className="w-[50%] flex items-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="">
                                <p className='text-xs'>THE CLIENT:</p>
                                <h1 className='text-2xl font-bold'>ZEPHYR SMARTBEAR</h1>
                                <div className="py-8">
                                    <p className='text-xs'>THE RESULTS:</p>
                                    <h1 className='text-8xl py-2 text-sky-500'>
                                        {countOn && <CountUp start={0} end={1400} duration={2} delay={0} />}
                                        +</h1>
                                    <h2 className='text-xl text-blue-950'>Content asset leads</h2>
                                </div>
                                <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>LEARN MORE</button>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>

                <div className="w-screen pt-56 flex">
                    <div className="w-[50%] flex justify-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="">
                                <p className='text-xs'>THE CLIENT:</p>
                                <h1 className='text-2xl font-bold'>WIDEN</h1>
                                <div className="py-8">
                                    <p className='text-xs'>THE RESULTS:</p>
                                    <h1 className='text-8xl py-2 text-sky-500'>
                                        {countOn && <CountUp start={0} end={96} duration={2} delay={0} />}
                                        %</h1>
                                    <h2 className='text-xl text-blue-950'>Decrease in cost per lead</h2>
                                </div>
                                <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>LEARN MORE</button>
                            </div>
                        </ScrollTrigger>
                    </div>
                    <div className="w-[50%] flex items-center ">
                        <img className='w-96 h-96 rounded-full' src="https://thumbs.dreamstime.com/z/business-communication-technology-call-center-concept-friendly-female-helpline-operator-headphones-computer-call-133000803.jpg" alt="" />
                    </div>
                </div>

                <div className="w-screen pt-56 flex">
                    <div className="w-[50%] flex items-center justify-center">
                        <img className='w-96 h-96 rounded-full' src="https://en.idei.club/uploads/posts/2023-06/thumbs/1685716703_en-idei-club-p-computer-pic-dizain-krasivo-16.jpg" alt="" />
                    </div>
                    <div className="w-[50%] flex items-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="">
                                <p className='text-xs'>THE CLIENT:</p>
                                <h1 className='text-2xl font-bold'>OPENTRONS</h1>
                                <div className="py-8">
                                    <p className='text-xs'>THE RESULTS:</p>
                                    <h1 className='text-8xl py-2 text-sky-500'>
                                        {countOn && <CountUp start={0} end={10000} duration={2} delay={0} />}
                                        + </h1>
                                    <h2 className='text-xl text-blue-950'>Increase in leads</h2>
                                </div>
                                <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>LEARN MORE</button>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>

                <div className="flex w-screen justify-center py-36">
                    <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-3 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>MORE WIN STORIES</button>
                </div>
            </div>



            {/* page: 8 */}

            <div className="bg-blue-950 flex justify-center items-center h-[500px] w-screen">
                <div className=" border-l-4 px-10 border-fuchsia-600">
                    <h1 className='text-5xl pb-9 text-white font-bold font-serif'>Ready to talk digital?</h1>
                    <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-4 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>GET STARTED WITH A FREE AUDIT</button>
                </div>
            </div>
        </div>

    )
}

export default LandingPage