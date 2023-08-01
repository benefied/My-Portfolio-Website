import React from "react";

const CarouselItem = ({ logo, name }) => {
  return (
    <div className="">
      <div className="shadow-lg">
        <i className="text-white text-2xl">{logo}</i>
        <h2 className="text-white font-semibold text-xl">{name}</h2>
      </div>
    </div>
  );
};

export default CarouselItem;
