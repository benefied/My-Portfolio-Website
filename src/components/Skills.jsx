import React from "react";
import Whatido from "./Whatido"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBroom } from "react-icons/fa";

const Skills = () => {
  const skillItems = [
    {
      logo: <FaHtml5/>,
      name: "HTML"
    },
    {
      logo: <FaCss3/>,
      name: "CSS"
    },
    {
      logo:<DiJavascript1/>,
      name: "J.script"
    },
    {
      logo:<FaReact/>,
      name: "React"
    },
    {
      logo: <BiLogoTailwindCss/>,
      name: "Tailwind"
    },
    {
      logo: <FaBroom/>,
      name: "Adobe"
    }
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className=" bg-slate-200 p-16">
      <div className="text-center pt-2">
        <h1 className="text-6xl text-slate-700 font-bold ">My Skills</h1>
      </div>
      <div className="pt-[3rem]">
        <div className=""><h1 className=" font-light text-xl">My stacks and libraries</h1></div>
        <div className="bg-gray-500 lg:p-4 md:p-3 sm:p-[7rem] w-full text-white shadow-xl rounded-xl">
        <Carousel responsive={responsive}>
         {skillItems.map((skillItem) => (<CarouselItem logo={skillItem.logo} name={skillItem.name}/>))}
        </Carousel>
        </div>
      </div>
      <Whatido/>
    </div>
  );
};

export default Skills;
