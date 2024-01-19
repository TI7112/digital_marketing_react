import React from 'react'

const Services = () => {

    const Item = ({ title }) => {
        return (
            <div className="hover:bg-sky-300 duration-500 w-full flex justify-center items-center border-2 py-5 rounded">
                <p className='font-semibold text-center text-slate-600 tracking-wider'>{title}</p>
            </div>
        )
    }

    return (
        <div className="flex justify-center">
            <div className="w-[70%] pb-20">
                <div className="flex flex-col items-center text-center py-20">
                    <p className='text-5xl font-bold tracking-wider font-serif text-sky-700'>How we help you win.</p>
                    <p className='text-slate-500 py-4 w-[90%]'>Top 1% media buying prowess. Performance-driven creative genius. God-tier technical and analytics capabilities. All working together as an extension of your team, accountable to your goals and KPIs. This is how you win.</p>
                </div>
                <div className="flex gap-5 justify-center">
                    <div className="w-1/6 flex flex-col gap-5">
                        <Item title={'PAID SEARCH'} />
                        <Item title={'CREATIVE'} />
                    </div>
                    <div className="w-1/6 flex flex-col gap-5 mt-10">
                        <Item title={'PAID SOCIAL'} />
                        <Item title={'VIDEO'} />
                    </div>
                    <div className="w-1/6 flex flex-col gap-5">
                        <Item title={'ORGANIC SEARCH'} />
                        <Item title={'WEB DESIGN'} />
                    </div>
                    <div className="w-1/6 flex flex-col gap-5 mt-10">
                        <Item title={'EMAIL MARKETING'} />
                        <Item title={'WEB DEVELOPMENT'} />
                    </div>
                    <div className="w-1/6 flex flex-col gap-5">
                        <Item title={'UX + STRATGY'} />
                        <Item title={'BRANDING'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services