import React from "react";
import logoPersons from "../../assets/Pictures/peeps.svg";
import logo from "../../assets/Pictures/logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full max-w-full flex justify-center items-center flex-col">
      <div className="flex flex-col justify-around items-center w-full my-10 lg:flex lg:flex-row">
        <div className="flex justify-start items-start flex-col gap-5">
          <h4 className="text-white text-2xl font-bold"><NavLink to='/acerca-de'>ACERCA DE</NavLink></h4>
          <h4 className="text-white text-2xl font-bold"><NavLink to='/nosotros'>SOBRE NOSOTROS</NavLink></h4>
          <h4 className="text-white text-2xl font-bold"><NavLink to='/equipo'>EQUIPO</NavLink></h4>
        </div>
        <img src={logoPersons} className="pt-10 md:my-10" alt="" />
        <NavLink to='/'>
          <img src={logo} className="hidden lg:block self-center my-10 lg:self-end" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
