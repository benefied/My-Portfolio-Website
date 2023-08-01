import React from "react";

const NavItems = ({navItem_Value}) => {
  return (
    <li className="text-slate-500 hover:skew-x-3 hover:shadow-md duration-100">
      <a href="" className="cursor-pointer">
        {navItem_Value}
      </a>
    </li>
  );
};

export default NavItems;
