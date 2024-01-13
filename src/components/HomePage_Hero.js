import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { GiCheckMark } from "react-icons/gi";

const HomePage_Hero = () => {

    const [userInput, setUserInput] = useState({
        category: '',
        business_in_us: '',
        no_of_employee: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        error: '',
    })

    // useEffect(() => {
    //   console.log(userInput);
    // }, [userInput])


    const [step1, setStep1] = useState('show')
    const [step2, setStep2] = useState('hide')
    const [step3, setStep3] = useState('hide')

    const nextStep = (params) => {
        if (params == 'step2') {
            if (userInput.category.length > 0) {
                setStep1('completed')
                setStep2('show')
            }
            else {
                setUserInput({ ...userInput, error: 'step1' })
            }
        }
        else if (params == 'step3') {
            if (userInput.business_in_us.length > 0 && userInput.no_of_employee.length > 0) {
                setStep2('completed')
                setStep3('show')
            }
            else {
                setUserInput({ ...userInput, error: 'step2' })
            }
        }
        else if (params == 'send') {
            if (userInput.email.length > 0 && userInput.phone.length > 0) {
                // write api post request code here 
                console.log(userInput);
            }
            else {
                setUserInput({ ...userInput, error: 'step3' })
            }
        }
    }

    const backStep = (params) => {
        if (params == 'step1') {
            setStep2('hide')
            setStep1('show')
        }
        else if (params == 'step2') {
            setStep3('hide')
            setStep2('show')
        }
    }

    return (
        <div style={{ backgroundImage: `URL(${require('../assets/static/hero_bg.webp')})` }} className={`bg-[#072d56] flex items-center justify-center w-full h-[85vh] bg-right bg-no-repeat`}>
            <div className="flex items-center h-full w-[75%] pt-16">
                <div className="w-[40%] h-[60%] flex flex-col gap-12   ">
                    <h1 className="text-white leading-[1.1em] font-serif font-bold px-4 tracking-wide text-6xl">Drive growth at scale for your brand.</h1>
                    <div className="">
                        <svg className='rotate-90 w-36 h-28 py-2 ' viewBox="0 0 65.1 91.5" fill='#0693e3' xmlns="http://www.w3.org/2000/svg"><g className=" plus-1"><path d="m6.2 6.3v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 1.8h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g><g className="center-col"><path className="plus-11" d="m33.1 53.3h-1.5v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-8" d="m33.1 79.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-5" d="m33.1 27.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-2" d="m33.1 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path></g><path className="plus-3" d="m58.9 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-4" d="m7.6 27.3h-1.4v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.3z"></path><g className="glitcher plus-6"><path d="m57.4 33.3 1.5-1.5v-4.5h-1.5v4.7h-4.1v1.3z"></path><path d="m58.9 31.8-1.5 1.5v4.5h1.5v-4.5h4.1v-1.3h-4.1z"></path></g><path className="plus-7" d="m7.6 53.3h-1.4v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.3z"></path><g className="glitcher plus-9"><path d="m57.4 57.8v.2h-4.1v1.3h4.1v4.5h1.5v-4.5z"></path><path d="m58.9 53.3h-1.5v4.5l1.5 1.5h4.1v-1.3h-4.1z"></path></g><g className="glitcher plus-10"><path d="m6.2 83.8v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 79.3h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g></svg>
                    </div>
                </div>
                <div className="w-60 h-[60%]">
                    <svg className='w-36 h-28 py-2 ' fill='#0693e3' viewBox="0 0 65.1 91.5" xmlns="http://www.w3.org/2000/svg"><g className="glitcher plus-1"><path d="m6.2 6.3v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 1.8h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g><g className="center-col"><path className="plus-11" d="m33.1 53.3h-1.5v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-8" d="m33.1 79.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-5" d="m33.1 27.3h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-2" d="m33.1 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path></g><path className="plus-3" d="m58.9 1.8h-1.5v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.2z"></path><path className="plus-4" d="m7.6 27.3h-1.4v4.7h-4.2v1.3h4.2v4.5h1.5v-4.5h4.2v-1.3h-4.3z"></path><g className="glitcher plus-6"><path d="m57.4 33.3 1.5-1.5v-4.5h-1.5v4.7h-4.1v1.3z"></path><path d="m58.9 31.8-1.5 1.5v4.5h1.5v-4.5h4.1v-1.3h-4.1z"></path></g><path className="plus-7" d="m7.6 53.3h-1.4v4.6h-4.2v1.3h4.2v4.6h1.5v-4.5h4.2v-1.3h-4.3z"></path><g className="glitcher plus-9"><path d="m57.4 57.8v.2h-4.1v1.3h4.1v4.5h1.5v-4.5z"></path><path d="m58.9 53.3h-1.5v4.5l1.5 1.5h4.1v-1.3h-4.1z"></path></g><g className="glitcher plus-10"><path d="m6.2 83.8v.2h-4.2v1.3h4.2v4.5h1.4v-4.5z"></path><path d="m7.6 79.3h-1.4v4.5l1.4 1.5h4.2v-1.3h-4.2z"></path></g></svg>
                </div>
                <div className="w-[40vw] flex items-center">
                    <div className="w-full h-full bg-white p-6 rounded-xl">
                        <div className="w-full h-full px-20 mt-3">
                            <div className="relative h-10">
                                <div className="w-full h-[3px] rounded-full bg-slate-500"></div>
                                <div className="absolute -top-3 w-full flex justify-between">
                                    <div className="">
                                        {step1 == 'completed' ?
                                            <p className='bg-green-500 flex justify-center items-center text-white w-8 h-8 rounded-full text-center font-bold'><GiCheckMark /></p>
                                            : <p className=' border-2 border-slate-800 bg-white w-8 h-8 rounded-full text-center font-bold'>1</p>}
                                        {(step1 == 'show') ? <div className="bg-[#0693e3] mt-1.5 h-[3px] w-full"></div> : ''}
                                    </div>
                                    <div className="">
                                        {step2 == 'completed' ?
                                            <p className='bg-green-500 flex justify-center items-center text-white w-8 h-8 rounded-full text-center font-bold'><GiCheckMark /></p>
                                            : <p className=' border-2 border-slate-800 bg-white w-8 h-8 rounded-full text-center font-bold'>2</p>}
                                        {(step2 == 'show') ? <div className="bg-[#0693e3] mt-1.5 h-[3px] w-full"></div> : ''}
                                    </div>
                                    <div className="">
                                        {step3 == 'completed' ?
                                            <p className='bg-green-500 flex justify-center items-center text-white w-8 h-8 rounded-full text-center font-bold'><GiCheckMark /></p>
                                            : <p className=' border-2 border-slate-800 bg-white w-8 h-8 rounded-full text-center font-bold'>3</p>}
                                        {(step3 == 'show') ? <div className="bg-[#0693e3] mt-1.5 h-[3px] w-full"></div> : ''}
                                    </div>
                                </div>
                            </div>

                            {/* step 1 */}

                            {(step1 == 'show') ? <div className="pt-10 w-full">
                                <h1 className='text-3xl font-serif font-bold tracking-wide text-center'>What are you interested in?*</h1>
                                <p className='text-sm font-semibold py-1 text-center font-mono uppercase'>SELECT ALL THAT APPLY</p>
                                <div className="grid grid-cols-3 text-lg mt-9 gap-5 font-semibold">
                                    <button onClick={(e) => { setUserInput({ ...userInput, category: e.target.innerText }) }} className='rounded-lg hover:bg-[#0693e3] hover:text-white focus:bg-[#0693e3] focus:text-white border-2 duration-300 border-slate-200 outline-none py-3'>Paid Social</button>
                                    <button onClick={(e) => { setUserInput({ ...userInput, category: e.target.innerText }) }} className='rounded-lg hover:bg-[#0693e3] hover:text-white focus:bg-[#0693e3] focus:text-white border-2 duration-300 border-slate-200 outline-none py-3'>Paid Search</button>
                                    <button onClick={(e) => { setUserInput({ ...userInput, category: e.target.innerText }) }} className='rounded-lg hover:bg-[#0693e3] hover:text-white focus:bg-[#0693e3] focus:text-white border-2 duration-300 border-slate-200 outline-none py-3'>SEO</button>
                                    <button onClick={(e) => { setUserInput({ ...userInput, category: e.target.innerText }) }} className='rounded-lg hover:bg-[#0693e3] hover:text-white focus:bg-[#0693e3] focus:text-white border-2 duration-300 border-slate-200 outline-none '>Creative</button>
                                    <button onClick={(e) => { setUserInput({ ...userInput, category: e.target.innerText }) }} className='rounded-lg hover:bg-[#0693e3] hover:text-white focus:bg-[#0693e3] focus:text-white border-2 duration-300 border-slate-200 outline-none '>CRO</button>
                                    <button onClick={(e) => { setUserInput({ ...userInput, category: e.target.innerText }) }} className='rounded-lg hover:bg-[#0693e3] hover:text-white focus:bg-[#0693e3] focus:text-white border-2 duration-300 border-slate-200 outline-none p-1'>Web Development</button>
                                </div>
                                <div className="pt-2 text-sm text-red-600 my-2">
                                    {(userInput.error == 'step1') ? <p>Please select at least one option.</p> : ''}
                                </div>
                                <div className="w-full flex justify-center mt-5">
                                    <button onClick={() => { nextStep('step2') }} className='bg-[#0692e3] px-10 text-white duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>Next</button>
                                </div>
                            </div> : ''}

                            {/* step 2  */}

                            {(step2 == 'show') ? <div className="">
                                <h1 className='text-3xl py-5 font-serif font-bold tracking-wide text-center'>Tell us about your business.</h1>
                                <div className="py-2 ">
                                    <p className='font-bold tracking-wide text-slate-800'>IS YOUR BUSINESS HEADQUARTERED IN U.S.?*</p>
                                    <div className="flex items-center gap-5 pb-4">
                                        <div className="flex items-center gap-2 font-semibold text-slate-600 ">
                                            <input type="radio" onChange={(e) => { setUserInput({ ...userInput, business_in_us: e.target.value }) }} value={'yes'} name="business_in_delhi" className="border-2 outline-none" />
                                            <p>Yes</p>
                                        </div>
                                        <div className="flex items-center gap-2 font-semibold text-slate-600 ">
                                            <input type="radio" onChange={(e) => { setUserInput({ ...userInput, business_in_us: e.target.value }) }} value={'no'} name="business_in_delhi" className="border-2 outline-none" />
                                            <p>No</p>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <p className='font-bold tracking-wide text-slate-800'>NUMBER OF EMPLOYEES</p>
                                        <select name="no_of_employee" onChange={(e) => { setUserInput({ ...userInput, no_of_employee: e.target.value }) }} className='border-2 border-slate-300 w-96 px-2 py-1.5 mt-1 font-semibold text-slate-800 outline-none'>
                                            <option defaultChecked>Please Select</option>
                                            <option value="1 to 50">1 to 50</option>
                                            <option value="51 to 100">51 to 100</option>
                                            <option value="101 to 250">101 to 250</option>
                                            <option value="251 to 500">251 to 500</option>
                                            <option value="501 to 1000">501 to 1000</option>
                                            <option value="1000 +">1000 +</option>
                                        </select>
                                    </div>
                                    <div className="pt-2 text-sm text-red-600 my-2">
                                        {(userInput.error == 'step2') ? <p>Please complete all required fields.</p> : ''}
                                    </div>
                                    <div className="w-full flex justify-center gap-5 mt-5">
                                        <button onClick={() => backStep('step1')} className='bg-[#0692e3] px-16 text-white duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl text-lg hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none tracking-wider'>Back</button>
                                        <button onClick={() => nextStep('step3')} className='bg-[#0692e3] px-16 text-white duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl text-lg hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none tracking-wider'>Next</button>
                                    </div>
                                </div>
                            </div> : ''}

                            {/* step 3 */}

                            {(step3 == 'show') ? <div className="">
                                <h1 className='text-3xl py-5 font-serif font-bold tracking-wide text-center'>Tell us about you.</h1>

                                <div className="">
                                    <div className="">
                                        <div className="flex items-center gap-5 py-2">
                                            <div className="w-full">
                                                <p className='font-bold tracking-wider uppercase text-slate-800 py-1'>First name</p>
                                                <input onChange={(e) => { setUserInput({ ...userInput, first_name: e.target.value }) }} type="text" className='outline-none border-2 border-slate-200 focus:border-[#0693e3] w-full duration-300 px-2 py-1 rounded-lg' />
                                            </div>
                                            <div className="w-full">
                                                <p className='font-bold tracking-wider uppercase text-slate-800 py-1'>Last name</p>
                                                <input onChange={(e) => { setUserInput({ ...userInput, last_name: e.target.value }) }} type="text" className='outline-none border-2 border-slate-200 focus:border-[#0693e3] w-full duration-300 px-2 py-1 rounded-lg' />
                                            </div>
                                        </div>
                                        <div className="w-full py-2">
                                            <p className='font-bold tracking-wider uppercase text-slate-800 py-1'>Business Email <span className='text-red-500'>*</span></p>
                                            <input onChange={(e) => { setUserInput({ ...userInput, email: e.target.value }) }} type="text" className='outline-none border-2 border-slate-200 focus:border-[#0693e3] w-full duration-300 px-2 py-1 rounded-lg' />
                                        </div>
                                        <div className="w-full py-2">
                                            <p className='font-bold tracking-wider uppercase text-slate-800 py-1'>Phone Number <span className='text-red-500'>*</span></p>
                                            <input onChange={(e) => { setUserInput({ ...userInput, phone: e.target.value }) }} type="text" className='outline-none border-2 border-slate-200 focus:border-[#0693e3] w-full duration-300 px-2 py-1 rounded-lg' />
                                        </div>
                                        <div className="w-full py-2">
                                            <p className='font-bold tracking-wider uppercase text-slate-800 py-1'>What else we know</p>
                                            <textarea onChange={(e) => { setUserInput({ ...userInput, message: e.target.value }) }} className='outline-none border-2 border-slate-200 focus:border-[#0693e3] w-full duration-300 px-2 py-1 rounded-lg' ></textarea>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-sm text-red-600 my-2">
                                        {(userInput.error == 'step3') ? <p>Please complete all required fields.</p> : ''}
                                    </div>
                                    <div className="w-full flex justify-center gap-5 mt-5">
                                        <button onClick={() => backStep('step2')} className='bg-[#0692e3] px-16 text-white duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl text-lg hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none tracking-wider'>Back</button>
                                        <button onClick={() => { nextStep('send') }} className='bg-[#0692e3] px-16 text-white duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl text-lg hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none tracking-wider'>Next</button>
                                    </div>
                                </div>

                            </div> : ''}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage_Hero