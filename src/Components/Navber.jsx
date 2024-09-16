"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navber = () => {
    const pathName = usePathname()
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#252322] rounded-box z-[1] mt-3  p-2 shadow-2xl">
                        {
                            navLinks.map(link => <li className={`${pathName === link.path && 'border-b-2 border-[#EE6C0C]'} font-bold uppercase`} key={link.path}><Link href={link.path}>{link.title}</Link></li>)
                        }
                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost text-xl"><span className='text-[#EE6C0C]'>GYM</span>FIT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map(link => <li className={`${pathName === link.path && 'border-b-2 border-[#EE6C0C]'} font-bold uppercase`} key={link.path}><Link href={link.path}>{link.title}</Link></li>)
                    }
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Courses',
        path: '/courses'
    },
    {
        title: 'Trainers',
        path: '/trainers'
    },
    {
        title: 'Contacts',
        path: '/contacts'
    },
]

export default Navber;