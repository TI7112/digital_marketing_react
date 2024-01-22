import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

    // menu list data

    const Menu = [
        {
            menuTitle: 'About',
            menuList: [
                {
                    title: 'PAID SOCIAL',
                    url: '#',
                },
                {
                    title: 'PAID SEARCH',
                    url: '#',
                },
                {
                    title: 'SEO',
                    url: '#',
                },
                {
                    title: 'CREATIVE',
                    url: '#',
                },
                {
                    title: 'CRO',
                    url: '#',
                },
                {
                    title: 'WEB DESIGN + DEVELOPMENT',
                    url: '#',
                },
                {
                    title: 'PRODUCTS',
                    url: '#',
                },

            ]
        },
        {
            menuTitle: 'Case study',
            menuList: []
        },
        {
            menuTitle: 'The Agency',
            menuList: [
                {
                    title: 'ABOUT US',
                    url: '#',
                },
                {
                    title: 'TEAM',
                    url: '#',
                },
                {
                    title: 'AWARDS',
                    url: '#',
                },
                {
                    title: 'CAREERS',
                    url: '#',
                },

            ]
        }, 
        {
            menuTitle: 'INSIGHTs',
            menuList: [
                {
                    title: 'Blog',
                    url: '/blogs',
                },
                {
                    title: 'Podcast',
                    url: '#',
                },
                {
                    title: 'Newsletter',
                    url: '#',
                },
            ]
        },
    ]

    // menu views component

    const MenuItem = ({ props }) => {
        return (
            <div className="group cursor-pointer">
                <p className='group-hover:text-[#0693e3] duration-500 px-1'>{props.menuTitle}</p>
                <div className="w-0 group-hover:w-full duration-300 h-[3px] rounded-full group-hover:bg-gradient-to-r from-[#0693e3] to-[#00d084]"></div>
                {(props.menuList.length > 0) ?
                    <>
                        <div className="absolute z-20 hidden group-hover:block -ml-3 min-w-40 mt-2 shadow-xl">
                            <div className=" h-4 -mt-3"></div>
                            <div className="flex flex-col bg-white text-black p-4 leading-loose rounded-lg text-sm">
                                {props.menuList.map((curElem, index) => (
                                    <Link to={curElem.url} key={index} ><p className='hover:text-fuchsia-900'>{curElem.title}</p></Link>
                                ))}
                            </div>
                        </div>
                    </>
                    : ''}
            </div>
        )
    }

    return (
        <div className='w-full fixed z-50 top-0 bg-[#072d56] flex justify-center'>
            <div className='w-[75%] text-white font-bold tracking-wider'>
                <div className="w-full pt-3 flex items-center justify-end">
                    <p className='uppercase text-xs px-5 border-r-2 border-slate-500'>Subscribe to newsletter</p>
                    <button className='flex gap-2 px-2 items-center'>
                        <IoSearchOutline className="w-5 h-5" />
                        <p className='uppercase text-xs'>Search</p>
                    </button>
                </div>
                <div className='flex py-2 justify-between '>
                    <div className="">
                        <h1 className='text-4xl cursor-pointer font-medium text-white font-mono'>TI <span className='font-bold tracking-wider font-mono uppercase'>ads</span></h1>
                    </div>
                    <div className="flex uppercase gap-10 font-bold text-gray-200 items-center">
                        {Menu.map((curElem, index) => (
                            <MenuItem key={index} props={curElem} />
                        ))}
                        <Link to={'#'}><p className='bg-sky-700 px-8 text-white duration-300 py-0.5 rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full rounded-br-full hover:rounded-none' href="">services</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar