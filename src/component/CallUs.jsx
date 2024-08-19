import React from "react";
import { MdPhoneCallback } from "react-icons/md";

function CallUs() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#e0ecfc] w-full max-w-screen-xl gap-6 lg:gap-10 px-6 lg:px-10 mx-auto rounded-xl items-center mt-20 lg:mt-48 py-6 lg:py-10">
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          Need Help? Talk to Our Expert.
        </h1>
        <p className="text-base lg:text-lg">
          Duis pulvinar metus elit, ut aliquam est sollicitudin finibus.
          Integer lobortis est interdum. Suspendisse nunc est, varius quis
          fringilla ac, commodo a ante.
        </p>
      </div>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-4">
        <div className="flex items-center bg-red-500 px-4 py-2 rounded-lg text-white gap-2 justify-center w-full lg:w-auto">
          <MdPhoneCallback className="text-xl lg:text-2xl" />
          <button className="text-sm lg:text-base">+123-456-789</button>
        </div>
        <button className="bg-blue-500 px-4 py-2 rounded-lg text-white w-full lg:w-auto text-sm lg:text-base">
          Contact Now
        </button>
      </div>
    </div>
  );
}

export default CallUs;
