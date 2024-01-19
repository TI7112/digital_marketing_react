import React from 'react'
import { IoSpeedometerOutline } from "react-icons/io5";


const DigitalPrincepal = () => {

    const Item = ({image , title , desc}) => {
        return (
            <div className="flex gap-5">
                <div className="w-1/4 flex justify-end">
                    <div className="w-24 h-24 rounded-full border-2 border-slate-100 bg-white flex justify-center items-center">
                        <IoSpeedometerOutline className="w-12 h-12" />
                    </div>
                </div>
                <div className="w-3/4">
                    <h2 className='text-3xl font-bold font-serif text-sky-700 tracking-wider'>{title}</h2>
                    <p className='text-slate-500 py-2'>{desc}</p>
                </div>
            </div>
        )
    }


    return (
        <div className="flex flex-col items-center bg-gray-100 w-full min-h-96">
            <div className="w-[70%] py-20 flex gap-10">
                <div className="w-1/3">
                    <img src={`${require('../assets/static/WMX-Wall-Logo-Light.webp')}`} alt="" />
                    <p className='text-5xl font-bold tracking-wider font-serif text-sky-700'>Our Digital Principles</p>
                    <p className='text-slate-500 py-4'>It doesn’t matter if you’re buying media or earning it through SEO and content. Following these 5 undying principles is the secret ingredient to our clients’ success. Ignore these at your peril.</p>
                </div>
                <div className="w-2/3 flex flex-col gap-5">
                    <Item title={'First, move the needle'} desc={'Fact: you’re probably wasting (a lot of) money somewhere. Find that waste, cut it and reallocate to what’s working right now. Increase your results immediately and create momentum.'}/>
                    <Item title={'Get the data tight'} desc={'Your inputs determine your outputs. Good data = good decisions. And good decisions = good results. Clean, accurate and complete data is the linchpin of any winning campaign.'}/>
                    <Item title={'80/20 marketing'} desc={'20% of your marketing efforts lead to 80% of your results. Identify the leverage points in your 20% and focus efforts there for the biggest gains in performance.'}/>
                    <Item title={'Revenue-generating activities'} desc={'Or RGAs for short. Marketing’s not just about sexy ideas and tactics. Do the hard work of refining and testing your campaigns. Over time, you’ll beat your shiny object-chasing competitors.'}/>
                    <Item title={'There’s always another level'} desc={'No matter how well a campaign or ad is doing, it can do better. Proactively research, test and evolve. You’ll unlock shocking new levels of growth and scale.'}/>
                </div>
            </div>
        </div>
    )
}

export default DigitalPrincepal