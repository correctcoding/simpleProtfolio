import React from 'react'
import Nvabar from '../components/Nvabar'
import { Cloud, Code, Database, Server } from 'lucide-react'
import NavbarMobile from '../components/NavbarMobile'

function Skills() {
    return (
        <div className='w-full h-auto bg-gray-900'>
            <Nvabar />
            <div className='py-5 md:py-16 px-3 w-full min-h-screen'>
                <h1 className='text-center text-white font-bold text-xl tracking-widest'>
                    Skills
                </h1>

                <div className='w-full flex flex-col mt-3'>
                    <h1 className='text-white text-2xl font-semibold'>Technical Skills</h1>

                    <div className='w-full text-white grid grid-cols-2 gap-4 py-16'>


                        <div className="flex flex-col p-4 bg-gray-800 ring-1 ring-slate-500 rounded-2xl group">
                            <Code className='text-primary size-8' />
                            <div className='mt-4'>
                                <h1 className='text-white font-bold tracking-widest group-hover:text-primary'>Frontend</h1>
                                <p className='text-slate-200 font-normal text-[0.87rem] mt-1'>HTML,CSS,React</p>
                            </div>
                        </div>


                        <div className="flex flex-col p-4 bg-gray-800 ring-1 ring-slate-500 rounded-2xl group">
                            <Database className='text-primary size-8' />
                            <div className='mt-4'>
                                <h1 className='text-white font-bold tracking-widest group-hover:text-primary transition-colors duration-300 ease-in-out'>Database</h1>
                                <p className='text-slate-200 font-normal text-[0.87rem] mt-1'>SQL,MongoDB</p>
                            </div>
                        </div>


                        <div className="flex flex-col p-4 bg-gray-800 ring-1 ring-slate-500 rounded-2xl group">
                            <Server className='text-primary size-8' />
                            <div className='mt-4'>
                                <h1 className='text-white font-bold tracking-widest group-hover:text-primary transition-colors duration-300 ease-in-out'>Backend</h1>
                                <p className='text-slate-200 font-normal text-[0.87rem] mt-1'>Python,Javascript</p>
                            </div>
                        </div>


                        <div className="flex flex-col p-4 bg-gray-800 ring-1 ring-slate-500 rounded-2xl group ">
                            <Cloud className='text-primary size-8' />
                            <div className='mt-4'>
                                <h1 className='text-white font-bold tracking-widest group-hover:text-primary transition-colors duration-300 ease-in-out'>Cloud</h1>
                                <p className='text-slate-200 font-normal text-[0.87rem] mt-1'>AWS,Azure,DCP</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <NavbarMobile />
        </div>
    )
}

export default Skills