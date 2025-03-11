import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white px-8 lg:px-24 w-full">
      <div className="py-2 flex  items-center w-full">
        <div className="text-2xl font-bold">{/* Add logo/name here */}</div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 md:gap-12 justify-center flex-1">
          <a href="#aboutMe" className="hover:text-gray-400 px-4 py-2">
            About
          </a>
          <a href="#project" className="hover:text-gray-400 px-4 py-2">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 px-4 py-2">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#aboutMe" className="block hover:text-gray-400 px-4 py-2">
            About
          </a>
          <a href="#project" className="block hover:text-gray-400 px-4 py-2">
            Projects
          </a>
          <a href="#contact" className="block hover:text-gray-400 px-4 py-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

// export const Navbar = () => {
//   return (
//     <nav className=" text-white px-8 lg:px-24 w-full">
//       <div className="py-2 flex justify-center md:justify-between items-center w-full gap-8">
//         {" "}
//         {/* Added gap */}
//         <div className="text-2xl font-bold hidden md:block md:flex-1">
//           {" "}
//           {/* Added flex-1 */}
//           {/* Add logo/name here */}
//         </div>
//         <div className="flex gap-8 md:gap-12">
//           {" "}
//           {/* Increased spacing */}
//           <a href="#home" className="hover:text-gray-400 px-4 py-2">
//             {" "}
//             {/* Added padding */}
//             Home
//           </a>
//           <a href="#aboutMe" className="hover:text-gray-400 px-4 py-2">
//             About
//           </a>
//           <a href="#project" className="hover:text-gray-400 px-4 py-2">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-gray-400 px-4 py-2">
//             Contact
//           </a>
//         </div>
//         <div className="md:flex-1"></div> {/* Added balancing flex */}
//       </div>
//     </nav>
//   );
// };
