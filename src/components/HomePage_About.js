import React from 'react'

const HomePage_About = () => {
    return (
        <div className="flex justify-center items-center bg-white h-[80vh]">
            <div className="flex items-center gap-10 w-[70%]">
                <div className="w-1/2">
                    <p className='text-5xl py-6 font-bold tracking-wider font-serif'>Unlock your brand’s potential.</p>
                    <p className='text-slate-700'>Best-of-breed digital marketing doesn’t live in the siloes of “B2B” or “B2C”. That’s why hundreds of ambitious brands partner with WebMechanix to help them bust through performance plateaus. We apply proven digital marketing approaches to maximize your efficiency. Then, turn up the heat to drive profitable growth at scale.</p>
                    <div className="grid grid-cols-3 pt-10 gap-5">
                        <div className="flex justify-center items-center border border-slate-200 p-2 rounded-lg"><img className='' src={`${require('../assets/static/AAG1.png')}`} alt="" /></div>
                        <div className="flex justify-center items-center border border-slate-200 p-2 rounded-lg"><img className='' src={`${require('../assets/static/solar-logo-2-e1689689031832 1.png')}`} alt="" /></div>
                        <div className="flex justify-center items-center border border-slate-200 p-2 rounded-lg"><img className='' src={`${require('../assets/static/logo-gong-1 1.png')}`} alt="" /></div>
                        <div className="flex justify-center items-center border border-slate-200 p-2 rounded-lg"><img className='' src={`${require('../assets/static/TMO1.png')}`} alt="" /></div>
                        <div className="flex justify-center items-center border border-slate-200 p-2 rounded-lg"><img className='' src={`${require('../assets/static/everfi-blackbaud-colored-logo 1.png')}`} alt="" /></div>
                        <div className="flex justify-center items-center border border-slate-200 p-2 rounded-lg"><img className='' src={`${require('../assets/static/maxim-health-logo 1.png')}`} alt="" /></div>
                    </div>
                </div>
                <div className="w-1/2 ">
                    <img className='rounded-full' src={`${require('../assets/static/photo.webp')}`} alt="" />

                </div>
            </div>
        </div>
    )
}

export default HomePage_About