import React from "react";
import SocialMedia from "./SocialMedia";


const Heading = () => {
  return (
    <div className="pt-32 mb-6 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
      <div className="border-b-4 border- border-slate-300">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-6">
        <div className="p-3 max-sm:p-1">
          <div className="flex justify-center hover:scale-105 duration-200 ease-out">
            <img src="/src/assets/meee.jpg" alt="" className="shadow-lg skew-x-2 w-48 h-48 border-emerald-500 border-[6px] p-3 border-spacing-5" />
          </div>
        </div>
        <div className="px-2 sm:w-5 md:w-full lg:w-96">
          <h1 className="font-semibold tracking-tight lg:text-2xl sm:text-xl text-slate-600 skew-x-2 hover:skew-x-0 duration-300 ease-in-out">
            <span className=" font-semibold shadow-md lg:text-3xl sm:text-xl">Hello I'm Benedict Ojekudo and I am a frontend developer.</span> Welcome to
            my Portfolio website where I display my skills, resume and other
            portfolios using this website I built.
          </h1>
          <div className="p-3 flex justify-center">
            <button className="p-3 px-5 my-3 cursor-pointer rounded-xl shadow-lg hover:bg-emerald-100 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-100 duration-300 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:text-emerald-700 text-white">
                <a href="#" className="">
                  View Resume
                </a>
              </button>
          </div>
        </div>
      </div>
      </div>
      <div className="max-sm:hidden w-[40rem] md:flex md:justify-center">
      <SocialMedia/>
      </div>
    </div>
  );
};

export default Heading;
