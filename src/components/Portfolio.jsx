import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-slate-100 p-16">
      <div className="mt-8">
        <header className="font-bold lg:tracking-[2rem] md:tracking-[1rem] sm:tracking-[2rem] text-slate-600 lg:text-6xl md:text-3xl sm:text-3xl text-center">
          MY PORTFOLIO
        </header>
      </div>
      <div className=" mb-14 mt-2">
      <h1 className="text-center font-light">Click on any portfolio to view project</h1>
      </div>
      <div className="lg:p-[10rem] md:p-[6rem] sm:p-0">
        <div className="relative lg:flex md:grid sm:grid md:grid-cols-2 sm:grid-cols-1 pb-3 justify-center">
          <a href="" className="cursor-pointer">
            <div className="first__portfolio lg:absolute md:absolute sm:relative top-[-9rem] left-[7rem] shadow-md px-[4rem] pb-[4rem] text-center hover:scale-105 hover:z-10 duration-100 ease-in-out">
              <i className="font-bold text-xl bg-green-300 text-white p-1 rounded-lg w-full">
                01
              </i>
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800  capitalize">
                  Solution saver Apk(AI)
                </h2>
                <h3 className=" font-extralight text-sm">site saves your solution gotten from AI</h3>
              </div>
            </div>
          </a>

          <a href="https://github.com/benefied/Web3-Car-Leaser" className="cursor-pointer">
            <div className="second__portfolio lg:absolute md:absolute sm:relative top-[-2rem] right-[18rem] bg-red-100 shadow-md px-[4rem] pb-[4rem] text-center hover:scale-105 hover:z-10 duration-100 ease-in-out">
              <i className="font-bold text-xl bg-red-300 text-white p-1 rounded-lg">
                02
              </i>
              <div>
                <h2 className="text-xl font-bold text-gray-800 w-full capitalize">
                  Car Leaser Sale Apk(Web3/ABI)
                </h2>
                <h3 className=" font-extralight text-sm ">A car leasing site that uses Nft tech</h3>
              </div>
            </div>
          </a>

          <a href="https://github.com/benefied/News-Site-API-Data-" className="cursor-pointer">
            <div className="third__portfolio lg:absolute md:absolute sm:relative top-[6rem] left-[0rem] bg-blue-100 shadow-md px-[4rem] pb-[4rem] text-center hover:scale-105 hover:z-10 duration-100 ease-in-out">
              <i className="font-bold text-xl bg-blue-300 text-white p-1 rounded-lg">
                03
              </i>
              <div>
                <h2 className="text-xl font-bold text-gray-800 w-full capitalize">
                  Sport News Getter(API)
                </h2>
                <h3 className=" font-extralight text-sm">site gets sports news from an API</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
