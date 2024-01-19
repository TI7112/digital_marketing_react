import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsVideo = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[80%] flex flex-col items-center">
                <p className='text-5xl font-bold tracking-wider pt-24 pb-8 font-serif text-center'>Our clients call us the <span className='text-blue-500'>anti-agency</span>.</p>
                <div className="w-[70%] bg-teal-500 h-[60vh] rounded-xl"></div>
                <div className="min-h-[30vh] flex flex-col justify-center items-center">
                    <p className='text-5xl font-bold tracking-wider pt-16 pb-8 font-serif text-center'>See how we can unlock your potential.</p>
                    <Link to={'#'}><p className='w-fit bg-sky-700 border-2  px-16 text-white duration-300 py-2 uppercase tracking-wider rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full rounded-br-full hover:rounded-none text-lg' href="">Get started with your free audit</p></Link>
                </div>
            </div>
        </div>)
}

export default AboutUsVideo