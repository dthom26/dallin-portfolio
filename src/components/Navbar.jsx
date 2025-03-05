export const Navbar = () => {
  return (
    <nav className=" text-white px-8 lg:px-24 w-full">
      <div className="py-2 flex justify-center md:justify-between items-center w-full gap-8">
        {" "}
        {/* Added gap */}
        <div className="text-2xl font-bold hidden md:block md:flex-1">
          {" "}
          {/* Added flex-1 */}
          {/* Add logo/name here */}
        </div>
        <div className="flex gap-8 md:gap-12">
          {" "}
          {/* Increased spacing */}
          <a href="#home" className="hover:text-gray-400 px-4 py-2">
            {" "}
            {/* Added padding */}
            Home
          </a>
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
        <div className="md:flex-1"></div> {/* Added balancing flex */}
      </div>
    </nav>
  );
};
