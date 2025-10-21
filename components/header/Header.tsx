import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-3 py-3 items-center" id="header">
      <div className="hidden sm:block">Peyman Malek</div>
      <div className="sm:hidden">PM</div>
      <div className="flex-1 border-t border-zinc-400 mx-10"></div>
      <div className="">
        <div className="flex space-x-6">
          <a href="#about" className="cursor-pointer hidden sm:block">
            About
          </a>
          <a href="#skill" className="cursor-pointer hidden sm:block">
            Skill
          </a>
          <a href="#exp" className="cursor-pointer hidden sm:block">
            Experience
          </a>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
