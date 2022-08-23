import React from "react";
import CategoriesContainer from "./CategoriesContainer";
import logoPersons from "../assets/Pictures/peeps.svg";
import logo from "../assets/Pictures/logo.svg";

const Footer = () => {
  return (
    <div className="w-full max-w-full flex justify-center items-center flex-col">
      <CategoriesContainer />
      <div className="flex flex-col justify-around items-center w-full my-10 lg:flex lg:flex-row">
        <div className="flex justify-start items-start flex-col gap-5">
          <h4 className="text-white text-2xl font-bold">ACERCA DE</h4>
          <h4 className="text-white text-2xl font-bold">SOBRE NOSOTROS</h4>
          <h4 className="text-white text-2xl font-bold">EQUIPO</h4>
        </div>
        <img src={logoPersons} className="pt-10 md:my-10" alt="" />
        <img src={logo} className="hidden lg:block self-center my-10 lg:self-end" alt="" />
      </div>
    </div>
  );
};

export default Footer;
