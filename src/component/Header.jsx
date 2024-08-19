import React, { useState } from 'react';
import { logo } from '../assets/images';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon
import { RxCross2 } from 'react-icons/rx'; // Importing the close icon
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-24 bg-slate-200'>
      <div className='max-w-screen-xl h-full bg-slate-200 border flex justify-between px-2 s:px-10 items-center'>
        <div>
          <img src={logo} alt="Logo" className='w-32 mix-blend-darken'/>
        </div>
        <div className='lg:hidden'>
          {menuOpen ? (
            <RxCross2 className='text-2xl cursor-pointer' onClick={toggleMenu} />
          ) : (
            <FaBars className='text-2xl cursor-pointer' onClick={toggleMenu} />
          )}
        </div>
        <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:static top-24 left-0 w-full lg:w-auto bg-slate-200 lg:bg-transparent border lg:border-none`}>
          <ul className='flex flex-col lg:flex-row items-center gap-10 font-medium p-5 lg:p-0'>
            <NavLink to={'/'}className='cursor-pointer hover:text-blue-500 hover:underline'>Home</NavLink>
            <NavLink to={'/about'} className='cursor-pointer hover:text-blue-500 hover:underline'>About</NavLink>
            <NavLink className='cursor-pointer hover:text-blue-500 hover:underline'>Services</NavLink>
            <NavLink className='cursor-pointer hover:text-blue-500 hover:underline'>Financial services</NavLink>
            <NavLink className='cursor-pointer hover:text-blue-500 hover:underline'>Online services</NavLink>
            <NavLink to={'/contact'} className='cursor-pointer hover:text-blue-500 hover:underline'>Contact</NavLink>
            <NavLink className='cursor-pointer hover:text-blue-500 hover:underline'>Location's</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

// 's':'360',
// 'md': '768px',
// 'lg': '1024px',

