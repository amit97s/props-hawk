import React from "react";
import { logo } from "../assets/images";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-r from-[#1a237e] to-[#283593] px-4 sm:px-6 pt-8 pb-4 text-white">
      <div className="w-full rounded-xl bg-blue-900 flex flex-wrap justify-between p-6 sm:p-8 gap-6">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <div className="flex items-center w-44 rounded-lg gap-3 bg-white">
            <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 mix-blend-multiply" />
            <p className="text-lg text-black  font-semibold">PropsHawk</p>
          </div>
          <p className="text-xs sm:text-sm">
          Stay connected with us on social media for the latest updates, exclusive offers, and a peek into our projects.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <div className="p-2 bg-blue-700 rounded-full cursor-pointer hover:bg-blue-600 transition">
              <FaFacebookMessenger className="text-lg sm:text-xl" />
            </div>
            <div className="p-2 bg-pink-600 rounded-full cursor-pointer hover:bg-pink-500 transition">
              <IoLogoInstagram className="text-lg sm:text-xl" />
            </div>
            <div className="p-2 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-400 transition">
              <FaXTwitter className="text-lg sm:text-xl" />
            </div>
            <div className="p-2 bg-blue-800 rounded-full cursor-pointer hover:bg-blue-700 transition">
              <FaLinkedinIn className="text-lg sm:text-xl" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <h1 className="text-lg font-semibold border-b border-blue-700 pb-2">Contact Info</h1>
          <div className="flex items-start gap-2">
            <FaLocationDot className="text-lg sm:text-xl" />
            <p className="text-xs sm:text-sm">
            C-355 Block c Sector 122 Noida, Uttar Pradesh  201307
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdCall className="text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm">+91 7836961596 </span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosMail className="text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm">info@domainname.com</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <h1 className="text-lg font-semibold border-b border-blue-700 pb-2">Quick Links</h1>
          <ul className="text-xs sm:text-sm flex flex-col gap-2">
            <NavLink className="cursor-pointer hover:text-blue-400 transition">Home</NavLink>
            <NavLink to={'/about'} className="cursor-pointer hover:text-blue-400 transition">About</NavLink>
            <NavLink className="cursor-pointer hover:text-blue-400 transition">Services</NavLink>
            <NavLink className="cursor-pointer hover:text-blue-400 transition">Financial Services</NavLink>
            <NavLink className="cursor-pointer hover:text-blue-400 transition">Online Services</NavLink>
            <NavLink to={'/contact'} className="cursor-pointer hover:text-blue-400 transition">Contact</NavLink>
            <NavLink className="cursor-pointer hover:text-blue-400 transition">Location</NavLink>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <h1 className="text-lg font-semibold border-b border-blue-700 pb-2">Appointments</h1>
          <p className="text-xs sm:text-sm">
          Schedule an appointment with our expert builders today to explore your dream project and make it a reality
          </p>
          <NavLink to={'/contact'} className="bg-red-500 hover:bg-red-600 w-28 sm:w-32 text-xs sm:text-sm text-white rounded-lg px-3 py-2 self-start flex items-center gap-2">
            <FaCalendarCheck /> Appointment
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
