import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Hero.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Hero = () => {
  return (
    <div className="hero mb-6">
      <Carousel breakPoints={breakPoints}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
      <div className="flex justify-center my-20">
        <button class="bttn ">Learn more</button>
      </div>
    </div>
  );
};

export default Hero;