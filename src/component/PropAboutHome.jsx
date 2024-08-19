import React from 'react';
import { logo, PropHomeAbout } from '../assets/images';
import { GiCastle } from "react-icons/gi";
import { GiPeaks } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GiGuards } from "react-icons/gi";

function PropAboutHome() {
    const dataAbout = [
        {
            name: "Smart Home Design",
            icon: <GiCastle />
        },
        {
            name: "Beautiful Scene Around",
            icon: <GiPeaks />
        },
        {
            name: "Exceptional Lifestyle",
            icon: <CgGym />
        },
        {
            name: "Complete 24/7 Security",
            icon: <GiGuards />
        },
    ];

    return (
        <div className='w-full max-w-screen-xl mx-auto h-auto mt-10 lg:mt-36 flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 h-auto'>
                <img src={PropHomeAbout} alt="PropHomeAbout" className='object-cover w-full h-full' />
            </div>
            <div className='w-full lg:w-1/2 h-auto flex flex-col gap-4 px-4 bg-[#e2e8f0] lg:px-10'>
                <div className='flex items-center gap-3'>
                    <img src={logo} alt="Logo" className='w-16 h-16 bg-transparent mix-blend-darken'/>
                    <p className='text-lg lg:text-xl font-semibold'>About Jivux</p>
                </div>
                <h1 className='text-3xl lg:text-4xl font-extrabold'>
                    The Leading Real Estate Marketplace
                </h1>
                <p className='text-base lg:text-lg'>
                    Duis pulvinar metus elit, ut aliquam est sollicitudin finibus. Integer lobortis est interdum. Suspendisse nunc est, varius quis fringilla ac, commodo a ante. Praesent non elit cursus, aliquam sapien quis, dictum tortor.
                </p>
                <div className='w-full flex flex-col lg:flex-row lg:flex-wrap mt-6 gap-4'>
                    {
                        dataAbout.map((item, i) => (
                            <div key={i} className='flex items-center gap-3 w-full lg:w-1/2 mb-4'>
                                <h1 className='text-orange-400 text-2xl lg:text-3xl'>{item.icon}</h1>
                                <h1 className='text-base lg:text-xl'>{item.name}</h1>
                            </div>
                        ))
                    }
                    <button className='bg-red-500 font-medium px-4 lg:px-5 text-white py-2 rounded-lg self-start mt-4'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PropAboutHome;
