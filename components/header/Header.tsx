import { site } from "../../data/profile";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-3 py-3" id="header">
      <div className="hidden sm:block">{site.name}</div>
      <div className="sm:hidden">PM</div>
      <div className="mx-4 flex-1 border-t border-zinc-400 sm:mx-10"></div>
      <nav className="flex items-center gap-x-3 text-sm lg:gap-x-6 lg:text-base">
        <a href="#about" className="hidden cursor-pointer md:block">
          About
        </a>
        <a href="#skill" className="hidden cursor-pointer md:block">
          Skills
        </a>
        <a href="#exp" className="hidden cursor-pointer md:block">
          Experience
        </a>
        <a href="#projects" className="hidden cursor-pointer md:block">
          Projects
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
