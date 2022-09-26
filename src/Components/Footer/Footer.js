import React from 'react'
import { Twitter, LinkedIn, Facebook, Instagram } from '../SocialIcons'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='absolute bottom-5 left-0 right-0'>
            <div className="flex flex-row flex-wrap justify-center gap-5">
                <div className='border-y border-l border-8 p-2'>
                    <img src="https://www.internships.com/wp-content/themes/IDC-theme/assets/chegg-internships-min.png" alt="" className="logo w-80" />
                    <p className='mt-5 w-80 text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sed numquam voluptatem accusamus at impedit.</p>
                    <ul className="socials flex flex-wrap gap-2 mt-10 justify-center">
                        <li><a href=""><LinkedIn /></a></li>
                        <li><a href=""><Twitter /></a></li>
                        <li><a href=""><Facebook /></a></li>
                        <li><a href=""><Instagram /></a></li>
                    </ul>
                </div>
                <div className='flex flex-col w-40 justify-center text-center'>
                    <h3 className='text-gray-500'>SITE MAP</h3>
                    <ul>
                    <li className='text-2xl'><NavLink to={"/"}>Home</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/saved"}>Saved</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/browse"}>Browse</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/Profile"}>Profile</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/inbox"}>Inbox</NavLink></li>
                    </ul>
                </div>
                <div className='flex flex-col  w-80 justify-center text-center'>
                    <ul>
                    <li className='text-2xl'><NavLink to={"/"}>Home</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/saved"}>Saved</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/browse"}>Browse</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/Profile"}>Profile</NavLink></li>
                    <li className='text-2xl'><NavLink to={"/inbox"}>Inbox</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer