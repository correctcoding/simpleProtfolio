
import React from 'react'
import { Link } from 'react-router-dom'
import { projectsInfo } from '../config'
import Nvabar from '../components/Nvabar'
import NavbarMobile from '../components/NavbarMobile'

function Project() {
    return (
        <div className='flex flex-col w-full h-auto bg-gray-900'>
            <Nvabar />
            <div className='w-full h-auto min-h-screen py-8 px-4 my-12'>
                <h1 className='text-primary text-2xl font-semibold mb-6'>
                    Featured Projects
                </h1>

                {/* Grid layout */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        projectsInfo.map((item, index) => {
                            if (item.featured) {
                                return (
                                    <Link
                                        className='bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300'
                                        key={index}
                                        to={item.link}
                                    >
                                        <div className='w-full h-48'>
                                            <img
                                                className='w-full h-full object-cover'
                                                src={item.uiImage}
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className="p-4 text-white">
                                            <h2 className="text-sm text-gray-400">{item.type}</h2>
                                            <h1 className="text-lg font-semibold">{item.title}</h1>
                                            <p className="text-gray-300 text-sm mt-1">{item.dsc}</p>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <NavbarMobile />
        </div>
    )
}

export default Project
