import React from 'react'
import Nvabar from './../components/Nvabar';
import NavbarMobile from '../components/NavbarMobile';

function About() {
    return (
        <div className="flex flex-col w-full h-auto bg-gray-900">
            <Nvabar />
            <div className='flex-1 flex flex-col-reverse min-h-screen md:flex-row-reverse items-center py-6 md:px-12 mt-9'>

                <div className='flex flex-col gap-y-4 px-3 mt-4 flex-1/2'>
                    <div>
                        <h1 className='capitalize text-primary text-xl font-bold'>My story</h1>
                        <p className='text-sm text-slate-300 font-normal'>
                            I'm a product designer with a passion for creating intuitive and impactful user experiences. My journey in design began with a fascination for how technology can seamlessly
                            integrate into our lives, enhancing everyday interactions. I believe in a user-centered approach, where every design decision is informed by a deep understanding of user
                            needs and behaviors.
                        </p>
                    </div>
                    <div>
                        <h1 className='capitalize text-primary text-xl font-semibold'>Professional Background</h1>
                        <p className='text-sm text-slate-300 font-normal'>
                            With over 5 years of experience in the tech industry, I've had the privilege of working on a diverse range of projects, from mobile apps to web platforms. My expertise spans
                            across the entire design process, including user research, wireframing, prototyping, and visual design. I'm adept at collaborating with cross-functional teams to bring
                            innovative ideas to life.
                        </p>
                    </div>
                    <div>
                        <h1 className='capitalize text-blue-500 text-xl font-bold'>Design Philosophy</h1>
                        <p className='text-sm text-slate-300 font-normal'>
                            My design philosophy is rooted in simplicity, functionality, and aesthetics. I strive to create designs that are not only visually appealing but also highly usable and
                            accessible. I believe that great design should be invisible, seamlessly guiding users through their tasks and enhancing their overall experience. I'm always eager to learn and
                            adapt, staying abreast of the latest design trends and technologies to deliver cutting-edge solutions.
                        </p>
                    </div>
                </div>

                <div className='flex items-center flex-col flex-1/2'>
                    {/* [profile image ] */}
                    <div
                        className='size-32 sm:size-40 md:size-48 rounded-full bg-slate-500'>
                        <img
                            className='w-full h-full object-cover p-1 rounded-full'
                            src="/banner-profile.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3'>Eather Carter</h1>
                        <p className='flex items-center justify-center md:justify-center md:w-md flex-wrap gap-x-2 text-gray-300 mt-3'><span>Product Desiner</span> <span>Crafting intuive and engaging</span><span>digital experiences.</span></p>
                    </div>
                </div>
            </div>

            <NavbarMobile />
        </div>
    )
}

export default About