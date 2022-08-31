import Logo from "./../../assets/Pictures/logo.svg";
import Search from "../../assets/Icons/search.svg";
import SearchInput from "../input/SearchInput";
import NavModal from "./NavModal";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex navbar flex-col justify-between md:flex-row md:justify-between bg-main-blue border-b-[1px] md:sticky md:top-0 md:z-50">
      {/* logo y banner */}
      <article className="flex justify-center items-center flex-col md:flex-row">
        <img src={Logo} alt="Logo" className="h-14 md:mx-6" />
        <NavLink
          className="text-2xl font-bold text-main-white uppercase hidden md:block"
          to="/"
        >
          Digital Art is Art
        </NavLink>
      </article>

      <article className="flex justify-center items-center w-fit flex-col md:flex-row">
        {/* search input */}
        <SearchInput 
          className="input input-warning bg-second-blue px-12 h-12 opacity-75 placeholder:text-white text-white border-2 border-main-white text-sm rounded-2xl" 
          placeholder="Colecciones, NFTs o usuarios."
          icon={true}
          activeKey={true}
        />
        
        {/* button */}
        <NavModal />
      </article>
    </nav>
  );
};

export default NavBar;
