import React from "react";
import { delhi1, indore, logo, noida1, pune1 } from "../assets/images";

function PropertyLoc() {
  const StateData = [
    {
      img: delhi1,
      name: "Delhi",
    },
    {
      img: pune1,
      name: "Pune",
    },
    {
      img: noida1,
      name: "Noida",
    },
    // {
    //   img: indore,
    //   name: "Indore",
    // },
  ];

  return (
    <div className="bg-slate-50 flex justify-center w-full mt-20 lg:mt-32 px-4">
      <div className="w-full max-w-screen-xl border py-8 lg:py-10 px-4 lg:px-0">
        <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-3 justify-center">
          {/* <img src={logo} alt="" className="w-10 lg:w-40 mix-blend-darken" /> */}
          <p className="text-lg lg:text-3xl  font-bold">Location's</p>
        </div>
        <h1 className="text-center text-2xl lg:text-4xl font-bold mt-4">
          Properties by Cities
        </h1>
        <div className="flex flex-wrap gap-4 mt-8 lg:mt-12 justify-center">
          {StateData.map((data, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 lg:w-1/4 h-52 sm:h-64 relative group overflow-hidden rounded-2xl lg:rounded-3xl"
            >
              <img
                src={data.img}
                alt=""
                className="w-full h-full object-cover rounded-2xl lg:rounded-3xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 lg:p-6 transition-opacity duration-500 group-hover:bg-opacity-0">
                <p className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                  {data.name}
                </p>
                <button className="bg-blue-500 px-3 py-1 text-xs sm:text-sm lg:text-base text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyLoc;
