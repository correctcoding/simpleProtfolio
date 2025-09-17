import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nvabar() {
    const navLinks = [
        {
            id: 1,
            link: "/",
            name: "Home",
        },
        {
            id: 2,
            link: "/about",
            name: "About",
        },
        {
            id: 3,
            link: "/projects",
            name: "Projects",
        },
        {
            id: 4,
            link: "/skills",
            name: "Skills",
        },
        {
            id: 5,
            link: "/contact-us",
            name: "Contact us",
        },
    ]
    return (
        <div className='hidden absolute inset-x-0 md:flex w-full justify-between px-8 py-3 bg-gray-900 shadow shadow-gray-800'>
            {/* [DESKTOP] */}
            {/* [ Logo ] */}
            <h1
                className="md:text-3xl font-extrabold tracking-widest text-white"
            >
                EC.
            </h1>
            {/* [End Logo ] */}
            <ul
                className="flex text-white font-bold space-x-4"
            >
                {
                    navLinks.map((item, index) => {
                        return (
                            <li key={index}><NavLink className="text-xl" to={item.link}>{item.name}</NavLink></li>
                        )
                    })
                }
            </ul>
            {/* [END OF DESKTOP] */}
        </div>
    )
}

export default Nvabar