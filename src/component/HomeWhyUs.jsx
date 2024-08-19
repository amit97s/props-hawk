import React from "react";
import { GrValidate } from "react-icons/gr";
import { logo, meeting, whyusHome } from "../assets/images";

function HomeWhyUs() {
  return (
    <div className="w-full max-w-screen-xl mx-auto h-auto mt-20 lg:mt-40 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-auto p-6 lg:p-10 flex flex-col gap-6 lg:gap-10">
        <div className="flex items-center gap-3 lg:gap-4">
          <img src={logo} alt="Logo" className="w-8 lg:w-12 h-auto" />
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
          <li className="flex items-center gap-2 mb-2">
            <GrValidate className="text-green-500" />
            <span>Find Excellent Deals</span>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <GrValidate className="text-green-500" />
            <span>Friendly Host & Fast Support</span>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <GrValidate className="text-green-500" />
            <span>List Your Own Property</span>
          </li>
        </ul>
        <button className="bg-red-500 rounded-lg w-full lg:w-36 h-10 font-medium text-white">
          Read More
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
