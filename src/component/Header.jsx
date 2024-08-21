import React, { useState } from 'react';
import { logo } from '../assets/images';
import { FaBars } from 'react-icons/fa'; 
import { RxCross2 } from 'react-icons/rx'; 
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from "react-icons/fa"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ online: false, financial: false, location: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownEnter = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: true }));
  };

  const handleDropdownLeave = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
  };

  return (
    <div className='w-full h-24 bg-slate-50'>
      <div className='max-w-screen-xl mx-auto h-full bg-slate-50 border flex justify-between px-12 sm:px-10 items-center'>
        <div>
          <NavLink to={'/'}>
            <img src={logo} alt="Logo" className='h-24 mix-blend-darken'/>
          </NavLink>
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
            <NavLink to='/' className='cursor-pointer hover:text-blue-500 hover:underline text-sm'>Home</NavLink>
            <NavLink to='/about' className='cursor-pointer hover:text-blue-500 hover:underline text-sm'>About</NavLink>
            <li
              className='relative cursor-pointer hover:text-blue-500 text-sm flex items-center gap-1'
              onMouseEnter={() => handleDropdownEnter('online')}
              onMouseLeave={() => handleDropdownLeave('online')}
            >
              <span>Online Services</span> 
              {dropdownOpen.online ? <FaAngleUp /> : <FaAngleDown />}
              <ul
                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-50 shadow-lg z-10 transition-opacity duration-300 ${dropdownOpen.online ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter('online')}
                onMouseLeave={() => handleDropdownLeave('online')}
              >
                <li><NavLink to='/online/service1' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Comprehensive property management</NavLink></li>
                <li><NavLink to='/online/service2' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Custom property management</NavLink></li>
                <li><NavLink to='/online/service3' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Property management services</NavLink></li>
                <li><NavLink to='/online/service4' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Security of property</NavLink></li>
                <li><NavLink to='/online/service5' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Rent management</NavLink></li>
                <li><NavLink to='/online/service6' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Legal services</NavLink></li>
                <li><NavLink to='/online/service7' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Property dispute redressal</NavLink></li>
                <li><NavLink to='/online/service8' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Fresh properties</NavLink></li>
              </ul>
            </li>
            <li
              className='relative cursor-pointer hover:text-blue-500 text-sm flex items-center gap-1'
              onMouseEnter={() => handleDropdownEnter('financial')}
              onMouseLeave={() => handleDropdownLeave('financial')}
            >
              <span>Financial Services</span> 
              {dropdownOpen.financial ? <FaAngleUp /> : <FaAngleDown />}
              <ul
                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-50 shadow-lg z-10 transition-opacity duration-300 ${dropdownOpen.financial ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter('financial')}
                onMouseLeave={() => handleDropdownLeave('financial')}
              >
                <li><NavLink to='/financial/service1' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Commercial finance</NavLink></li>
                <li><NavLink to='/financial/service2' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Project finance</NavLink></li>
              </ul>
            </li>
            <li
              className='relative cursor-pointer hover:text-blue-500 text-sm flex items-center gap-1'
              onMouseEnter={() => handleDropdownEnter('location')}
              onMouseLeave={() => handleDropdownLeave('location')}
            >
              <span>Location</span> 
              {dropdownOpen.location ? <FaAngleUp /> : <FaAngleDown />}
              <ul
                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10 transition-opacity duration-300 ${dropdownOpen.location ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter('location')}
                onMouseLeave={() => handleDropdownLeave('location')}
              >
                <li><NavLink to='/location/noida' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Noida</NavLink></li>
                <li><NavLink to='/location/delhi' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Delhi</NavLink></li>
                <li><NavLink to='/location/kolkata' className='block px-4 py-2 hover:bg-gray-100 text-sm'>Kolkata</NavLink></li>
              </ul>
            </li>
            <NavLink to='/contact' className='cursor-pointer hover:text-blue-500 text-sm hover:underline'>Contact</NavLink>
            <NavLink to='/login' className='cursor-pointer hover:text-blue-500 hover:underline text-sm bg-red-500 text-white px-5 py-2 rounded-lg'>Login</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
