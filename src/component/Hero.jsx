import React from "react";
import { heroWallpaper, logo } from "../assets/images";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="first">
        <div className="container flex flex-wrap justify-center items-center">
          <div className="top">
            <h1 className="text-lg sm:text-xl text-white">Welcome to Prophawks</h1>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-14">
              Streamlining Property Management
              <br /> Leveraging Technology for Efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <NavLink to="/services" className="px-10 sm:px-20 py-3 sm:py-4 rounded-xl text-white bg-red-500">
                Explore Services
              </NavLink>
              <NavLink to="/contact" className="px-10 sm:px-20 py-3 sm:py-4 rounded-xl text-white bg-blue-500">
                Contact Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;