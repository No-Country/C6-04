import Logo from "./../../assets/Pictures/logo.svg";
import Search from "../../assets/Icons/search.svg";
import NavModal from "./NavModal";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex navbar flex-col justify-between md:flex-row md:justify-between bg-main-blue border-b-[1px] md:sticky md:top-0 md:z-50">
      {/* logo y banner */}
      <article className="flex justify-center items-center flex-col md:flex-row">
        <img src={Logo} alt="Logo" className="h-14 md:mx-6" />
        <NavLink className="text-2xl font-bold text-main-yellow uppercase hidden md:block" to="/">
          Digital Art is Art
        </NavLink>
      </article>

      <article className="flex justify-center items-center w-fit flex-col md:flex-row">
        {/* input */}
        <div className="flex relative justify-center w-10/12 md:w-10/12 lg:w-full">
          <div className="flex absolute inset-y-0 left-0 items-center px-0 md:px-3 pointer-events-none">
            <img src={Search} alt="" />
          </div>
          <input
            type="text"
            className="bg-second-blue px-12 h-12 opacity-75 placeholder:text-white text-white border-2 border-main-white text-sm rounded-2xl"
            placeholder="Busca por colección, NFT o usuario."
          />
        </div>
        {/* button */}
        
        <NavModal />

      </article>
    </nav>
  );
};

export default NavBar;