import React from "react";
import ProfilePic from "../assets/images/ProfilePic.png";
export const About = () => {
  return (
    <div className=" text-white py-20" id="aboutMe">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* <h2 className="text-4xl font-bold text-center mb-12">
        </h2> */}
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
              A passionate web developer dedicated to crafting interactive,
              user-friendly websites that prioritize fluid and engaging user
              experiences. With a background in Psychology, principles of human
              behavior and design are thoughtfully integrated into every
              project, ensuring digital experiences are not only visually
              appealing but also intuitive and impactful. Expertise lies in
              blending science and technology to build functional, user-centric
              web applications that bridge the gap between innovation and
              usability. Focused on developing solutions that resonate deeply
              with users, the goal is to create meaningful digital experiences
              through data-driven design and cutting-edge web development
              techniques.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label
                  htmlFor="htmlandcss"
                  className="w-4/12 sm:w-2/12 flex-shrink-0"
                >
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="tailwindcss"
                  className="w-4/12 sm:w-2/12 flex-shrink-0"
                >
                  Tailwind CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="javascript"
                  className="w-4/12 sm:w-2/12 flex-shrink-0"
                >
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="reactjs"
                  className="w-4/12 sm:w-2/12 flex-shrink-0"
                >
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
