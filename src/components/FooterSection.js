import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



const Footer = () => {

    const [time, setTime] = useState()

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());

    }, 100);




    return (
        <div className="relative w-full h-[80vh]">
            <div className="absolute z-10 w-full bottom-0">
                <svg class="w-full h-full" viewBox="0 0 1440 405" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M764 177.961C551 -15.4529 138.667 -26.0393 0 29.9607V443.961H1440V231C1330.67 252.333 1042.4 430.761 764 177.961Z" fill="#002244"></path></svg>
            </div>

            <div className="absolute right-0 -bottom-0">
                <svg width="900" height="600" fill="none" viewBox="0 0 852 350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><linearGradient id="dtunbrsyurs" gradientUnits="userSpaceOnUse" x1="0" x2="385.068" y1=".681152" y2="715.495"><stop offset=".178333" stop-color="#009fd4"></stop><stop offset="1" stop-color="#46b756"></stop></linearGradient><path d="m856 55.9996c-350.4-136-734 10.0002-856 104.0004 241.6 424 688.667 311.333 856 198z" fill="url(#dtunbrsyurs)"></path></svg>
            </div>

            <div className="absolute right-60 bottom-0">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="700" viewBox="0 0 95.25 191.029" width="350"><linearGradient id="c"><stop offset="0" stop-color="#4f4f4f" stop-opacity=".131" /><stop offset=".07" stop-color="#4f4f4f" /><stop offset=".937" stop-color="#4f4f4f" stop-opacity=".953" /><stop offset="1" stop-color="#4f4f4f" stop-opacity="0" /></linearGradient><linearGradient id="b"><stop offset="0" stop-color="#cbcbcb" stop-opacity=".275" /><stop offset=".05" stop-color="#cbcbcb" /><stop offset=".95" stop-color="#cbcbcb" /><stop offset="1" stop-color="#cbcbcb" stop-opacity=".276" /></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#404040" /><stop offset=".6" stop-color="#838383" /><stop offset="1" stop-color="#a7a7a7" /></linearGradient><clipPath id="l"><path d="M56.734 2.014c-29.678 0-53.572 23.893-53.572 53.572v610.443c0 29.679 23.894 53.573 53.572 53.573h246.532c29.678 0 53.572-23.894 53.572-53.573V55.586c0-29.679-23.894-53.572-53.572-53.572zm-1.423 3.978h249.378c26.583 0 47.983 21.398 47.983 47.98V668.21c0 26.582-21.4 47.982-47.983 47.982H55.311c-26.583 0-47.983-21.4-47.983-47.982V53.973c0-26.583 21.4-47.98 47.983-47.98z" /></clipPath><filter id="m" color-interpolation-filters="sRGB" height="1.002" width="1.003" x="-.002" y="-.001"><feGaussianBlur stdDeviation=".266" /></filter><linearGradient id="n" gradientUnits="userSpaceOnUse" x1="340.652" x2="349.574" xlinkHref="#a" y1="361.123" y2="361.123" /><linearGradient id="o" gradientTransform="matrix(-.26458 0 0 .26458 95.476 0)" gradientUnits="userSpaceOnUse" x1="340.652" x2="349.574" xlinkHref="#a" y1="361.123" y2="361.123" /><filter id="p" color-interpolation-filters="sRGB" height="1.165" width="1.385" x="-.192" y="-.082"><feGaussianBlur stdDeviation=".031" /></filter><filter id="q" color-interpolation-filters="sRGB" height="1.165" width="1.218" x="-.109" y="-.082"><feGaussianBlur stdDeviation=".031" /></filter><clipPath id="g"><rect height="7.417" ry=".451" width="4.377" x="-13.878" y="25.857" /></clipPath><filter id="f" color-interpolation-filters="sRGB" height="1.052" width="1.65" x="-.325" y="-.026"><feGaussianBlur stdDeviation=".071" /></filter><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="-13.206" x2="-13.206" xlinkHref="#b" y1="26.259" y2="32.871" /><linearGradient id="j" gradientUnits="userSpaceOnUse" x1=".672" x2=".672" xlinkHref="#b" y1="40.09" y2="53.1" /><clipPath id="i"><path d="M.451 39.688a.45.45 0 00-.451.45v12.913c0 .25.201.451.451.451h3.474a.45.45 0 00.451-.45V40.138a.45.45 0 00-.45-.451z" /></clipPath><clipPath id="k"><path d="M.451 39.688a.45.45 0 00-.451.45v12.913c0 .25.201.451.451.451h3.474a.45.45 0 00.451-.45V40.138a.45.45 0 00-.45-.451z" /></clipPath><linearGradient id="e" gradientUnits="userSpaceOnUse" x1=".672" x2=".672" y1="40.09" y2="61.132"><stop offset="0" stop-color="#cbcbcb" stop-opacity=".275" /><stop offset=".04" stop-color="#cbcbcb" /><stop offset=".96" stop-color="#cbcbcb" /><stop offset="1" stop-color="#cbcbcb" stop-opacity=".276" /></linearGradient><clipPath id="d"><path d="M.451 39.688a.45.45 0 00-.451.45v20.945c0 .25.201.451.451.451h3.474a.45.45 0 00.451-.45V40.138a.45.45 0 00-.45-.451z" /></clipPath><linearGradient id="r" gradientUnits="userSpaceOnUse" x1="8.382" x2="87.002" xlinkHref="#c" y1="5.874" y2="5.874" /><linearGradient id="s" gradientTransform="matrix(1 0 0 -1 .067 193.567)" gradientUnits="userSpaceOnUse" x1="8.315" x2="86.935" xlinkHref="#c" y1="8.48" y2="8.48" /><linearGradient id="t" gradientUnits="userSpaceOnUse" x1="304.221" x2="303.21" y1="22.201" y2="920.095"><stop offset="0" stop-color="#404040" /><stop offset=".022" stop-color="#464646" /><stop offset=".999" stop-color="#525252" stop-opacity=".016" /><stop offset="1" stop-color="#444" stop-opacity="0" /></linearGradient><path d="M94.799 44.206a.45.45 0 01.451.451v20.945a.45.45 0 01-.451.45h-3.474a.45.45 0 01-.451-.45V44.657c0-.25.2-.45.45-.45z" /><path clip-path="url(#d)" d="M.547 40.09a.401.401 0 00-.402.402V60.73c0 .223.18.402.402.402h.125V40.09z" fill="url(#e)" filter="url(#f)" transform="matrix(-1 0 0 1 95.25 4.518)" /><g transform="translate(.014)"><rect height="7.417" ry=".451" width="4.377" x="-.014" y="25.857" /><path clip-path="url(#g)" d="M-13.33 26.259a.401.401 0 00-.403.402v5.808c0 .223.18.402.402.402h.125v-6.612z" fill="url(#h)" filter="url(#f)" transform="translate(13.864)" /></g><path d="M.451 39.688a.45.45 0 00-.451.45v12.913c0 .25.201.451.451.451h3.474a.45.45 0 00.451-.45V40.138a.45.45 0 00-.45-.451z" /><path clip-path="url(#i)" d="M.547 40.09a.401.401 0 00-.402.402v12.206c0 .223.18.402.402.402h.125V40.09z" fill="url(#j)" filter="url(#f)" /><path d="M.451 57.06a.45.45 0 00-.451.451v12.913c0 .25.201.45.451.45h3.474a.45.45 0 00.451-.45V57.51a.45.45 0 00-.45-.45z" /><path clip-path="url(#k)" d="M.547 40.09a.401.401 0 00-.402.402v12.206c0 .223.18.402.402.402h.125V40.09z" fill="url(#j)" filter="url(#f)" transform="translate(0 17.373)" /><path d="M14.483.199A13.934 13.934 0 00.52 14.163v162.634a13.934 13.934 0 0013.964 13.965h28.301l.578-.82h8.525l.58.82h28.3a13.934 13.934 0 0013.964-13.965V14.163A13.934 13.934 0 0080.767.2z" /><path d="M.837 19.826h1.102v-1.303H.837z" fill="#7d7e7f" /><path d="M.837 171.2h1.102V19.827H.837z" fill="#ebebeb" /><path d="M.837 172.504h1.102v-1.303H.837z" fill="#7d7e7f" /><path d="M94.413 172.504h-1.102v4.36a12.668 12.668 0 01-12.695 12.695H14.634A12.668 12.668 0 011.94 176.864v-4.36H.837v3.783A14.143 14.143 0 0015.01 190.46h65.228a14.143 14.143 0 0014.174-14.174z" fill="#ebebeb" /><path d="M94.413 171.2h-1.102v1.304h1.102z" fill="#7d7e7f" /><path d="M94.413 19.826h-1.102v151.375h1.102z" fill="#ebebeb" /><path d="M94.413 18.523h-1.102v1.303h1.102z" fill="#7d7e7f" /><path d="M15.011.6A14.143 14.143 0 00.837 14.773v3.75h1.102v-4.177A12.667 12.667 0 0114.634 1.652h65.982A12.667 12.667 0 0193.31 14.347v4.176h1.102v-3.75A14.143 14.143 0 0080.24.6z" fill="#ebebeb" /><path clip-path="url(#l)" d="M37.924 11.58c-6.587-.168-19.14 1.826-32.031 16.313-18.75 21.071-1.965 8.392-1.965 8.392s11.518-17.856 27.59-20.178c16.071-2.321 11.16-3.93 11.16-3.93s-1.76-.52-4.754-.597zm284.152 0c-2.994.076-4.754.598-4.754.598s-4.911 1.608 11.16 3.93 27.59 20.177 27.59 20.177 16.785 12.679-1.965-8.392c-12.89-14.487-25.444-16.48-32.03-16.313zM-2.439 681.941c-1.439-.172-.457 2.29 8.332 12.166 18.75 21.072 36.785 15.715 36.785 15.715s4.911-1.608-11.16-3.93c-16.072-2.32-27.59-20.177-27.59-20.177s-4.737-3.578-6.367-3.774zm364.878 0c-1.63.196-6.367 3.774-6.367 3.774s-11.518 17.856-27.59 20.178c-16.071 2.321-11.16 3.93-11.16 3.93s18.035 5.356 36.785-15.716c8.79-9.877 9.77-12.338 8.332-12.166z" fill="#434343" fill-rule="evenodd" filter="url(#m)" transform="scale(.26458)" /><path d="M325.58 15.363c-1.174-.116-.62 1.055 2.016 3.496 8.696 8.055 14.095 19.714 14.095 32.692v619.144c0 12.978-5.4 24.637-14.095 32.692-2.636 2.441-3.19 3.612-2.016 3.496.705-.07 2.032-.603 3.904-1.602 12.71-6.78 20.09-21.408 20.09-36.945V53.91c0-15.537-7.38-30.165-20.09-36.945-1.872-.999-3.2-1.532-3.904-1.602z" fill="url(#n)" transform="translate(-.113) scale(.26458)" /><path d="M9.333 4.065c.311-.03.164.279-.533.925-2.3 2.131-3.73 5.216-3.73 8.65v163.815c0 3.433 1.43 6.518 3.73 8.65.697.645.844.955.533.924-.186-.018-.537-.16-1.033-.423-3.362-1.794-5.315-5.665-5.315-9.775V14.264c0-4.111 1.953-7.981 5.315-9.775.496-.265.847-.406 1.033-.424z" fill="url(#o)" transform="translate(-.113)" /><rect fill="#1e1e1e" height="1.441" ry=".721" width="11.363" x="42.026" y="7.262" /><circle cx="57.915" cy="7.89" fill="#2b2b2b" r="1.345" /><circle cx="57.915" cy="7.89" fill="#0a0d13" r="1.077" /><circle cx="57.915" cy="7.89" fill="#091427" r=".821" /><path d="M57.35 7.34c-.098.01-.236.16-.246.451-.01.292.118.451.19.451.071 0 .368-.425.056-.901z" fill="#235a91" fill-opacity=".556" fill-rule="evenodd" filter="url(#p)" /><path d="M58.049 7.238c-.154.047-.183.296-.177.437.006.142.206.514.449.431.242-.082.283-.39.183-.596-.1-.207-.284-.354-.455-.272z" fill="#235a91" fill-opacity=".556" fill-rule="evenodd" filter="url(#q)" /><path d="M40.24 8.014a1.057 1.057 0 01-1.052 1.057 1.057 1.057 0 01-1.061-1.05 1.057 1.057 0 011.045-1.064 1.057 1.057 0 011.069 1.041l-1.057.016z" fill="#0f0f0f" /><path d="M34.246 8.038a1.595 1.57 0 01-1.589 1.57 1.595 1.57 0 01-1.6-1.558 1.595 1.57 0 011.577-1.58 1.595 1.57 0 011.612 1.545l-1.595.023z" fill="#101010" /><path d="M14.624 2.577a11.69 11.69 0 00-6.242 1.792v1.505a10.897 10.897 0 016-1.785h66.619c2.22 0 4.28.657 6 1.785V4.37a11.685 11.685 0 00-6.241-1.792H40.794z" fill="url(#r)" /><path d="M14.624 188.384a11.69 11.69 0 01-6.242-1.792v-1.505a10.897 10.897 0 006 1.785h66.619a10.9 10.9 0 006-1.785v1.505a11.685 11.685 0 01-6.241 1.792H40.794z" fill="url(#s)" /><path d="M55.78 22.201c-17.769 0-32.073 14.304-32.073 32.072V667.47c0 17.768 14.304 32.072 32.072 32.072h248.442c17.768 0 32.072-14.304 32.072-32.072V54.273c0-17.768-14.304-32.072-32.072-32.072h-31.373a5.358 5.358 0 00-5.358 5.358v2.466c0 9.654-7.77 17.426-17.424 17.426H109.934A17.386 17.386 0 0192.51 30.025V27.56a5.358 5.358 0 00-5.358-5.358z" fill="url(#t)" transform="scale(.26458)" /><path d="M66.398 7.87a2.133 2.11 0 01-2.125 2.109 2.133 2.11 0 01-2.14-2.094A2.133 2.11 0 0164.24 5.76a2.133 2.11 0 012.157 2.078l-2.133.031z" fill="#0f0f0f" /></svg>
                    <div className="text-white absolute top-6 px-9 z-20">
                        <p className='text-[10px] pt-1'>{time}</p>
                        <div className="pt-8">
                            <p className='text-3xl font-bold tracking-wider'>Subscribe to our newsletter</p>
                            <p className='py-3 text-slate-300'>Most newsletters suck — but this isn’t 'industry standards' and 'best practices' — only the real stuff that moves the needle.</p>
                            <div className="flex flex-col gap-2">
                                <p>Email*</p>
                                <input className='rounded-xl outline-none text-black px-2 py-1' type="text" name='email' />
                                <button type='submit' className='w-fit bg-sky-700 border-2  px-5 text-white duration-300 py-1 uppercase tracking-wider rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full rounded-br-full hover:rounded-none text-sm'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-5 z-20 flex flex-col items-center w-full">
                <div className="w-[75%] h-72 font-bold text-xl tracking-widest">
                    <p className='text-slate-200'>Street no 11, Chunapur road</p>
                    <p className='text-slate-200'>Sipahi tola Purnea,</p>
                    <p className='text-slate-200'>Bihar 854301</p>
                    <div className="py-5 flex flex-col gap-0.5">
                        <a href='' className='text-lg text-slate-200'>+91 9060532886</a>
                        <a href='' className='text-lg text-slate-200'>ayushjha7112@gmail.com</a>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-sky-500 hover:bg-sky-700 duration-500 cursor-pointer">
                            <FaFacebookF />
                        </div>
                        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-sky-500 hover:bg-sky-700 duration-500 cursor-pointer">
                            <FaInstagram />
                        </div>
                        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-sky-500 hover:bg-sky-700 duration-500 cursor-pointer">
                            <FaLinkedinIn />
                        </div>
                        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-sky-500 hover:bg-sky-700 duration-500 cursor-pointer">
                            <FaTwitter />
                        </div>
                        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-sky-500 hover:bg-sky-700 duration-500 cursor-pointer">
                            <FaWhatsapp />
                        </div>
                    </div>
                </div>
                <div className="w-full text-slate-200 font-semibold border-t-2">
                    <p className='text-center py-2 '>All right reserved - TI Advertising Agency</p>
                </div>
            </div>
        </div>
    )
}

export default Footer