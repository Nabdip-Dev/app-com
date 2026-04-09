import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
const Navbar = () => {
    const navLinks = [
        {
            path: '/',
            text: 'Home'
        },
        {
            path: '/app',
            text: 'Apps'
        },
        {
            path: '/install',
            text: 'Installation'
        }
    ]
    
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <img src={logoImg} alt="" className='w-12 h-12' />
                    <h1 className='text-[#9F62F2] font-bold'>HERO.IO</h1>
                </div>

                <div className="navbar-center">
                    <ul className="flex gap-4">
                        {
                            navLinks.map((item, index) => <MyNavLink key={index} to={item.path}>{item.text}</MyNavLink>)
                        } 
                    </ul>
                </div>

                <div className="navbar-end">
                    <button className='btn'>Contribute</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;