import React from 'react'
import Nvabar from '../components/Nvabar'
import { Link } from 'react-router-dom'
import { Github, LinkedinIcon, Twitter, X } from "lucide-react"
import NavbarMobile from '../components/NavbarMobile'
function Home() {
    return (
        <div className='relative w-full h-auto  overflow-y-hidden flex flex-col bg-gray-900'>
            <Nvabar />
            <div className='flex flex-wrap-reverse w-full min-h-screen items-center justify-center md:justify-evenly py-20 mb-12'>
                {/* [profile info ] */}
                <div
                    className="text-white max-w-md flex flex-col items-center md:items-start justify-between">
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Eather Carter</h1>
                    <p className='flex items-center justify-center md:justify-start flex-wrap gap-x-2 text-gray-300 mt-3'><span>Product Desiner</span> <span>Crafting intuive and engaging</span><span>digital experiences.</span></p>

                    <Link to="/projects"
                        className='px-6 text-xl font-bold py-2 bg-[#3B82F6] hover:bg-blue-500 transition-all duration-200 cursor-pointer text-white rounded-full mt-4'
                    >View My Work</Link>
                </div>
                {/* [Profile image ]  */}
                <div className="size-40 sm:size-50 md:size-70 lg:size-80 rounded-full overflow-hidden bg-slate-500 p-1.5">
                    <img className='w-full h-full object-cover rounded-full' src="banner-profile.jpg" alt="" />
                </div>
                {/* [bottom icon] */}
                <div className=' text-white absolute bottom-18 flex gap-x-4 text-center'>
                    <a target='_blank' href="https://x.com"><Twitter className='size-6 transition-all duration-300 ease-in-out hover:text-blue-500' /></a>
                    <a target='_blank' href="https://www.linkedin.com/"><LinkedinIcon className="size-6 hover:text-blue-500 transition-all duration-300 ease-in-out" /></a>
                    <a target='_blank' href="https://github.com"><Github className="size-6 hover:text-blue-500 transition-all duration-300 ease-in-out" /></a>
                </div>
            </div>

            <NavbarMobile />
        </div>
    )
}

export default Home