import React from "react";
import ProfilePic from "../assets/images/ProfilePic.png";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className=" text-white text-center py-16">
      {/* <img
        src={ProfilePic}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover object-top transform  transition-transform duration-300 hover:scale-105"
      /> */}
      <h1 className="text-4xl font-semibold text-center text-white font-sora">
        Dallin Thomson, Front-End Developer
      </h1>
      <p className=" mt-4 text-lg text-gray-300">
        I create modern, responsive web apps for seamless, user-friendly
        experiences.
      </p>
    </div>
  );
};

export default Hero;
