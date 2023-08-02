import React from "react";
import { BsTwitter, BsGithub, BsLinkedin, BsMailbox2 } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className=" bg-slate-100">
      <div className="grid grid-flow-row gap-2 lg:p-5 md:p-3 sm:p-1 w-full">
        <a href="https://www.linkedin.com/in/benedict-ojekudo-6a36b1225" className=" cursor-pointer">
          <div className="bg-slate-200 p-3 flex shadow-md shadow-gray-400 hover:shadow-lg hover:scale-105">
            <div className="p-5 flex items-center bg-slate-100 rounded-full shadow-md shadow-cyan-400">
              <span className="">
                <BsLinkedin />
              </span>
            </div>
            <div className="mx-2">
              <h2 className="text-xl font-bold text-slate-600">My Linkedin</h2>
              <h3 className=" font-normal max-sm:text-sm text-slate-500">
                Here I document, project myself and profile and post on tech.
              </h3>
            </div>
          </div>
        </a>
        <a href="https://www.ojekudobenedict1@gmail.com" className=" cursor-pointer">
          <div className="bg-slate-200 p-3 flex shadow-md shadow-gray-400 hover:shadow-lg hover:scale-105">
            <div className="p-5 flex items-center bg-slate-100 rounded-full shadow-md shadow-red-400">
              <span className="">
                <BsMailbox2 />
              </span>
            </div>
            <div className="mx-2">
              <h2 className="text-xl font-bold text-slate-600">My Gmail</h2>
              <h3 className=" font-normal max-sm:text-sm text-slate-500">
                My Gmail where you can mail me.
              </h3>
            </div>
          </div>
        </a>
        <a href="https://www.github.com/benefied" className=" cursor-pointer">
          <div className="bg-slate-200 p-3 flex shadow-md shadow-gray-400  hover:shadow-lg hover:scale-105">
            <div className="p-5 flex items-center bg-slate-100 rounded-full shadow-md shadow-gray-400">
              <span className="">
                <BsGithub />
              </span>
            </div>
            <div className="mx-2">
              <h2 className="text-xl font-bold text-slate-600">My Github</h2>
              <h3 className=" font-normal text-slate-500 max-sm:text-sm">
                Here I post my project codes, contribute and update my codes.
              </h3>
            </div>
          </div>
        </a>
        <a href="https://www.twitter.com/hurlway" className=" cursor-pointer">
          <div className="bg-slate-200 p-3 flex shadow-md shadow-gray-400  hover:shadow-lg hover:scale-105">
            <div className="p-5 flex items-center bg-slate-100 rounded-full shadow-md shadow-blue-400">
              <span className="">
                <BsTwitter />
              </span>
            </div>
            <div className="mx-2">
              <h2 className="text-xl font-bold text-slate-600">My Twitter</h2>
              <h3 className=" font-normal text-slate-500 max-sm:text-sm">
                Here I tweet about tech, advices and other.  
              </h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
