import React from "react";
import ProfilePic from "../assets/images/ProfilePic.png";
export const About = () => {
  return (
    <div className=" text-white py-20" id="aboutMe">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-72 aspect-[3/4] relative overflow-hidden">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-full rounded object-cover object-[50%_15%] scale-[0.95]"
            />
          </div>

          <div className="flex-1">
            <p className="text-lg  text-white mb-8">
              I'm a web developer passionate about building interactive and
              user-friendly websites. With a B.S. in Psychology, I enjoy
              incorporating principles of human behavior and design to create
              engaging digital experiences. I love finding ways to blend science
              and technology to build intuitive and impactful web applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Tailwind CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              {/* <div className="mt-12 flex justify-evenly text-center">
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    2 +
                  </h3>
                  <p>Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    10 +
                  </h3>
                  <p>Projects Compeleted</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
