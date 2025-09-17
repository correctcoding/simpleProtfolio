import React, { useState } from 'react'
import { contactFormData, typeConfirmer } from '../config'
import { Linkedin, Mail, MoveRightIcon, Twitter } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarMobile from '../components/NavbarMobile';
import Nvabar from '../components/Nvabar';
// import { Twitter } from 'lucide-react';


function ContactUs() {
    const [form, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const changesData = (data) => {
        setformData((prev) => ({
            ...prev,
            [data.target.name]: data.target.value
        }))
    }

    const handleFormData = () => {
        console.log(form)
        setformData(
            {
                name: "",
                email: "",
                message: ""
            }
        )
    }
    return (
        <div className='w-full h-auto min-h-screen bg-gray-900 text-white p-4 '>
            <Nvabar />
            <div className='mb-12 md:mb-0 md:mt-16'>


                <h1 className='text-xl text-white text-center font-bold'>Contact</h1>
                <div>
                    <h1 className='text-2xl font-extrabold py-3'>Get in touch</h1>
                    <form className='flex flex-col items-end' onClick={(e) => e.preventDefault()} action="">

                        {contactFormData.map((item, i) => (
                            <div className='w-full' key={i}>{typeConfirmer(item, changesData, form)}</div>
                        ))}
                        <button onClick={handleFormData} className='text-right inline-block bg-primary px-6 py-2 text-lg rounded-md font-bold tracking-widest hover:bg-primary/95 cursor-pointer'>Send Message</button>
                    </form>
                </div>

                <div className='flex flex-col mt-5'>
                    <h1 className='text-xl font-bold my-2'>Or find me on</h1>
                    <div className='flex items-center justify-between bg-[#1c2127] p-3 rounded-md my-3'>
                        <div className='flex items-center gap-2'>
                            <Mail /><span>Email</span>
                        </div>
                        <span className='text-sm text-gray-300'>correct.coding.cc@gmail.com</span>
                    </div>


                    <div className='flex items-center justify-between bg-[#1c2127] p-3 rounded-md my-3'>
                        <div className='flex items-center gap-2'>
                            <Linkedin /><span>Linkedin</span>
                        </div>
                        <Link target='_blank' to="http://www.linkedin.com" className='text-sm text-gray-300'><MoveRightIcon /></Link>
                    </div>

                    <div className='flex items-center justify-between bg-[#1c2127] p-3 rounded-md my-3'>
                        <div className='flex items-center gap-2'>
                            <Twitter /><span>Linkedin</span>
                        </div>
                        <Link target='_blank' to="http://x.com" className='text-sm text-gray-300'><MoveRightIcon /></Link>
                    </div>


                </div>

            </div>
            <NavbarMobile />
        </div >
    )
}

export default ContactUs