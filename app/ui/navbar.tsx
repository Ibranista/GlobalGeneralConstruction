'use client'
import React from "react";
import Image from 'next/image'

export default function SideNav() {
    const [isNavVisible, setNavVisibility] = React.useState(false)
    const toggleVisibility = () => {
        setNavVisibility(!isNavVisible)
    }

    return (
            <nav className="fixed w-full z-20 bg-slate-100">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse
                 order-1 md:-order-2
                ">
                        <Image
                            src='/logo.png'
                            alt="logo"
                            width={200}
                            height={100}
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                        />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center p-2 w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
                " aria-controls="navbar-default" aria-expanded="false"
                        onClick={toggleVisibility}

                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round" style={{ cursor: "pointer", margin: '0 auto', display: 'block' }}>
                            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                                <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                            </path>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                            </rect>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                                <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                            </rect>
                        </svg>
                    </button>
                    {/* links */}
                    <div
                        className={`transition-all duration-500 ease-in-out absolute origin-top ${isNavVisible ? 'top-20 opacity-100 scale-y-100' : 'top-20 scale-y-0'} md:static md:scale-y-100 `}
                    >

                        <ul className="font-medium flex gap-2 flex-col py-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                            <li className='navList'><a href="#" className="navLink" aria-current="page">Home</a></li>
                            <li className='navList'><a href="#" className="navLink " aria-current="page">About Us</a></li>
                            <li className='navList'><a href="#" className="navLink " aria-current="page">Services</a></li>
                            <li className='navList'><a href="#" className="navLink " aria-current="page">Our Team</a></li>
                            <li className='navList'><a href="#" className="navLink " aria-current="page">Market Insights</a></li>
                            <li className='navList'><a href="#" className="navLink " aria-current="page">Experience</a></li>
                            <li className='navList'><a href="#" className="navLink " aria-current="page">Contact Us</a></li>
                        </ul>
                    </div>

                </div>
            </nav >
        
    )
}