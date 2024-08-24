import React, { useState } from "react";
import { logo, PropHomeAbout } from "../assets/images";
import { GiCastle, GiPeaks, GiGuards, GiThreeFriends, GiAutoRepair, GiTakeMyMoney } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { MdOutlineEnergySavingsLeaf, MdEuroSymbol } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";

function PropAboutHome() {
  const [showMore, setShowMore] = useState(false);
  const dataAbout = [
    { name: "Smart Home Design", icon: <GiCastle /> },
    { name: "Beautiful Scene Around", icon: <GiPeaks /> },
    { name: "Spacious Interiors", icon: <SiAltiumdesigner /> },
    { name: "Prime Location Advantages", icon: <MdEuroSymbol /> },
    { name: "Exceptional Lifestyle", icon: <CgGym /> },
    { name: "Complete 24/7 Security", icon: <GiGuards /> },
    { name: "Eco-Friendly Features", icon: <GiThreeFriends /> },
    { name: "Advanced Automation Systems", icon: <GiAutoRepair /> },
    { name: "Energy-Efficient Solutions", icon: <MdOutlineEnergySavingsLeaf /> },
    { name: "Luxurious Amenities", icon: <GiTakeMyMoney /> },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto py-10 h-auto mt-10 lg:mt-36 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-auto">
        <img
          src={PropHomeAbout}
          alt="PropHomeAbout"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 h-auto flex flex-col gap-4 p-4 bg-slate-50 lg:px-10">
        <div className="flex items-center gap-3">
          {/* <img
            src={logo}
            alt="Logo"
            className="w-20 h-16 bg-transparent mix-blend-darken"
          /> */}
          <p className="text-lg lg:text-4xl font-bold">About Prophawks</p>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold">
          The Leading Real Estate Marketplace
        </h1>
        <p className="text-base lg:text-lg">
          Unleash the power of property with us. As The Leading Real Estate
          Marketplace, we connect buyers and sellers seamlessly. Discover your
          ideal home or investment opportunity today.
        </p>

        {/* Flex container with 2 divs */}
        <div className="w-full flex  gap-4 py-7 mt-16">
          {/* First div with first 5 items */}
          <div className="w-full lg:w-1/2 flex flex-wrap gap-4">
            {dataAbout.slice(0, 5).map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 w-full lg:w-full mb-4"
              >
                <h1 className="text-orange-400 text-2xl lg:text-3xl">
                  {item.icon}
                </h1>
                <h1 className="text-base lg:text-xl">{item.name}</h1>
              </div>
            ))}
          </div>
          
          {/* Second div with last 5 items, hide/show on button click */}
          {showMore && (
            <div className="w-full lg:w-1/2 flex flex-wrap gap-4">
              {dataAbout.slice(5).map((item, i) => (
                <div
                  key={i + 5}
                  className="flex items-center gap-3 w-full lg:w-full mb-4"
                >
                  <h1 className="text-orange-400 text-2xl lg:text-3xl">
                    {item.icon}
                  </h1>
                  <h1 className="text-base lg:text-xl">{item.name}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Button for toggling show/hide */}
        <div className="flex justify-end w-full">
          <button
            className="bg-red-500 font-medium px-4 lg:px-5 w-full text-white py-2 rounded-lg"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropAboutHome;
