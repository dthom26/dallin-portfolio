import React from "react";

export const Navbar = () => {
    return (
        <nav className="bg-black text-white px-8 lg:px-24 w-full">
            <div className="py-2 flex justify-center md:justify-between items-center w-full">
                <div className="text-2xl font-bold hidden md:inline">Dallin</div>
                <div className="space-x-6">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#aboutMe" className="hover:text-gray-400">About Me</a>
                    <a href="#service" className="hover:text-gray-400">Services</a>
                    <a href="#project" className="hover:text-gray-400">Projects</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
                <div></div>
                {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button> */}
            </div>
        </nav>
    )
}
