import React from 'react'
import { NavLink } from "react-router-dom"
import { BriefcaseBusiness, Home, ListTodo, Mail, User } from "lucide-react"
function NavbarMobile() {
    return (
        <div className='w-full flex text-white justify-between px-3 py-1 bg-gray-900 md:hidden fixed bottom-0 inset-x-0'>
            <NavLink className={'flex flex-col items-center'} to="/">
                <Home className='size-5' />
                <span className='text-sm'>Home</span>
            </NavLink>
            <NavLink
                className={'flex flex-col items-center'} to="/about"
            >
                <User className="size-5" />
                <span className='text-sm'>About</span>
            </NavLink>
            <NavLink
                className={'flex flex-col items-center'} to="/projects"
            >
                <BriefcaseBusiness className="size-5" />
                <span className='text-sm'>Project</span>
            </NavLink>
            <NavLink
                className={'flex flex-col items-center'} to="/skills"
            >
                <ListTodo className='size-5' />
                <span className='text-sm'>Skills</span>
            </NavLink>
            <NavLink
                className={'flex flex-col items-center'} to="contact-us"
            >
                <Mail className="size-5" />
                <span className='text-sm'>Contact</span>
            </NavLink>
        </div >
    )
}

export default NavbarMobile