import React, { useState } from "react";
import { GrValidate } from "react-icons/gr";
import { logo, meeting, whyusHome } from "../assets/images";

function HomeWhyUs() {
  // State to toggle the visibility of the additional list items
  const [showMore, setShowMore] = useState(false);

  // List of items
  const items = [
    "Find Excellent Deals",
    "Comprehensive Market Insights",
    "Trusted Real Estate Experts",
    "Friendly Host & Fast Support",
    "List Your Own Property",
    "Explore Exclusive Listings",
    "Seamless Property Transactions",
    "Tailored Property Recommendations"
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto h-auto mt-20 lg:mt-40 flex bg-slate-50 p-10 flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-auto p-6 lg:p-10 flex flex-col gap-6 lg:gap-10">
        <div className="flex items-center gap-3 lg:gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-8 lg:w-12 h-auto mix-blend-darken"
          />
          <p className="text-lg lg:text-xl font-semibold">Why Choosing Us</p>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold">
          Let's Find the Right Selling Option for You
        </h1>
        <p className="text-base lg:text-lg">
          Duis pulvinar metus elit, ut aliquam est sollicitudin finibus. Integer
          lobortis est interdum. Suspendisse nunc est, varius quis fringilla ac,
          commodo a ante. Praesent non elit cursus, aliquam sapien quis, dictum
          tortor.
        </p>
        <ul className="list-disc list-inside pl-5 text-base lg:text-lg">
          {items.slice(0, 4).map((item, index) => (
            <li key={index} className="flex items-center gap-2 mb-2">
              <GrValidate className="text-green-500" />
              <span>{item}</span>
            </li>
          ))}
          {showMore && items.slice(4).map((item, index) => (
            <li key={index + 4} className="flex items-center gap-2 mb-2">
              <GrValidate className="text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-red-500 rounded-lg w-full lg:w-36 h-10 font-medium text-white"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:items-end">
          <img
            src={meeting}
            alt="Meeting"
            className="w-full h-auto lg:h-5/6 object-cover rounded-3xl"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:items-start">
          <img
            src={whyusHome}
            alt="Why Us Home"
            className="w-full h-auto lg:h-5/6 object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeWhyUs;
