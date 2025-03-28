import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaUpwork } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          {/* <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Dallin</h3>
                    <p className="text-gray-400">Web Developer based out of U.S.A</p>
                </div> */}
          {/* <div className="flex-1 w-full">
                    <form className="flex items-center justify-center">
                        <input type="email" placeholder="Enter Email"
                        className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"/>
                        <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4
                        py-2 rounded-r-lg">
                        Subscribe
                        </button>
                    </form>
                </div> */}
        </div>
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:felx-row
            justify-between items-center"
        >
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dallin-thomson/"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/dthom26"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.upwork.com/freelancers/~01873c0ab84ae9f53d?mp_source=share"
              className="text-gray-400 hover:text-white"
            >
              <FaUpwork />
            </a>
          </div>
          {/* <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Privacy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Terms Of Services
                    </a>
                </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
