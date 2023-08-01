import React from "react";
import NavItems from "./NavItems";
import { FaHockeyPuck } from "react-icons/fa";
import { CiBoxList } from 'react-icons/ci'


const Navbar = () => {
  const NavItemsArray = ["About", "Portfolio", "Skills"]
  return (
    <>
      <nav className="nav w-full bg-slate-100 p-3 shadow-lg fixed z-10">
        <div className=" flex justify-between">
          <div className="">
            <h1 className="text-xl flex text-emerald-700 shadow-green-700 font-semibold italic ">
              <span className="p-2"><FaHockeyPuck/></span> <h1 className="max-sm:hidden">Benedict Ojekudo</h1>
            </h1>
          </div>
          <div className="max-sm:hidden">
            <ul className="list-none font-headStyle flex gap-3 p-1">
              <li className="items-center">
              
              </li>
              {NavItemsArray.map((Item, i) => (<NavItems key={i} navItem_Value={Item}/>))}
            </ul>
          </div>
          <div className="flex justify-end lg:hidden md:hidden sm:block">
            <button className="shadow text-emerald-950 font-bold rounded-full p-2 hover:scale-125"><CiBoxList/></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
