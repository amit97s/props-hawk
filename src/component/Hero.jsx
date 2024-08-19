import React from "react";
import { heroWallpaper, logo } from "../assets/images";

function Hero() {
  return (

    <>
    <section className="first">
      <div className="container flex flex-wrap justify-center items-center  ">
        <div className="top">
        <h1 className="text-lg sm:text-xl text-white">Welcome to Jivux</h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold">
        Invest Today in <br /> Your Dream Home
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <button className="px-10 sm:px-20 py-3 sm:py-4 rounded-xl text-white bg-red-500">
              View Property
            </button>
            <button className="px-10 sm:px-20 py-3 sm:py-4 rounded-xl text-white bg-blue-500">
              Contact Now
            </button>
          </div>


        </div>
        <div className="bottom flex gap-2 flex-wrap text-center justify-center">
        <input
            type="text"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
            placeholder="Enter a keyword"
          />
          <select
            id="sellRent"
            name="sellRent"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Sell Or Rent
            </option>
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
          </select>
          <select
            id="propertyType"
            name="propertyType"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Property Type
            </option>
            <option value="Apartment">Apartment</option>
            <option value="office">Office</option>
          </select>
          <select
            id="location"
            name="location"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Location
            </option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Delhi">Delhi</option>
            <option value="Himachal">Himachal</option>
          </select>
          <select
            id="amenities"
            name="amenities"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Amenities
            </option>
            <option value="swimmingPool">Swimming Pool</option>
            <option value="playArea">Play-area</option>
          </select>
          <button className="px-10 bg-red-500 py-3 rounded-lg font-medium text-white w-full md:w-auto">
            Search
          </button>
        </div>

      </div>
    </section>

    
  
    {/* <div className="bg-blue-50 mt-0 sm:mt-16">
      <div className="w-full py-2 sm:py-10 flex flex-col items-center relative">
        <div className="relative w-full max-w-screen-xl">
          <img
            src={heroWallpaper}
            alt=""
            className="rounded-xl shadow-2xl w-full h-[400px] sm:auto"
          />
          <div className="absolute inset-0 bg-[#888fb0] opacity-50 rounded-xl"></div>
        </div>
        <div className="flex flex-col items-center gap-5 sm:gap-7 absolute top-[15%] sm:top-[100%] text-center px-4 sm:px-0">
          <div className="flex items-center gap-3 sm:gap-5">
            <img src={logo} alt="" className="w-8 sm:w-12 h-auto" />
            <h1 className="text-lg sm:text-xl text-white">Welcome to Jivux</h1>
          </div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold">
            Invest Today in <br /> Your Dream Home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <button className="px-10 sm:px-20 py-3 sm:py-4 rounded-xl text-white bg-red-500">
              View Property
            </button>
            <button className="px-10 sm:px-20 py-3 sm:py-4 rounded-xl text-white bg-blue-500">
              Contact Now
            </button>
          </div>
        </div>
        <div className="w-full max-w-screen-lg gap-2 h-auto flex flex-col md:flex-row items-center mt-3 sm:mt-0 bg-green-200 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl static sm:absolute bottom-8 md:bottom-20 justify-between text-center md:text-left">
          <input
            type="text"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
            placeholder="Enter a keyword"
          />
          <select
            id="sellRent"
            name="sellRent"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Sell Or Rent
            </option>
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
          </select>
          <select
            id="propertyType"
            name="propertyType"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Property Type
            </option>
            <option value="Apartment">Apartment</option>
            <option value="office">Office</option>
          </select>
          <select
            id="location"
            name="location"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Location
            </option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Delhi">Delhi</option>
            <option value="Himachal">Himachal</option>
          </select>
          <select
            id="amenities"
            name="amenities"
            className="outline-none px-3 py-2 rounded-lg w-full md:w-auto mb-3 md:mb-0"
          >
            <option value="" disabled selected>
              Amenities
            </option>
            <option value="swimmingPool">Swimming Pool</option>
            <option value="playArea">Play-area</option>
          </select>
          <button className="px-10 bg-red-500 py-3 rounded-lg font-medium text-white w-full md:w-auto">
            Search
          </button>
        </div>
      </div>
    </div> */}
    </>

  );
}

export default Hero;
