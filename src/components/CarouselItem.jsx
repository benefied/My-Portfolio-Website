import React from "react";

const CarouselItem = ({ logo, name }) => {
  return (
    <div className="w-full px-5 py-2">
      <div className="shadow-lg">
        <i className="text-white text-2xl">{logo}</i>
        <h2 className="text-white font-semibold text-xl text-left">{name}</h2>
      </div>
    </div>
  );
};

export default CarouselItem;
