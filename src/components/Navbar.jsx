import { useState } from "react";

const navLinks = [
  { href: "#aboutMe", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll and active link highlight
  const handleNavClick = (href) => {
    setActive(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 shadow-lg transition-all">
      <div className="px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="text-2xl font-bold tracking-wide text-blue-400 select-none">
          Dallin Thomson
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 md:gap-12 flex-1 justify-end">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 font-medium transition-colors duration-200 rounded-lg focus:outline-none
                ${
                  active === link.href
                    ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-white"
                    : "hover:text-emerald-400 text-gray-200"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
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
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`w-full text-left px-4 py-2 font-medium rounded-lg transition-colors duration-200 focus:outline-none
                ${
                  active === link.href
                    ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white"
                    : "hover:text-blue-400 text-gray-200"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
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
