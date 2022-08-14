import React from "react";
import ImgHome from "./../../assets/Pictures/home-view.svg";
import Logo from "./../../assets/Pictures/logo.svg";
import Diart from "./../../assets/Icons/diart-logo.svg";
import "./Home.css";
import { Searchbar } from '../Searchbar/Searchbar';

export const Home = () => {
  return (
    <>
      <nav className="menu-container">
        <a href="#" className="menu-logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="menu">
          <ul>
            <li>
              <a href="/" className="menu-title">Digital Art is Art
              </a>                      
            </li>
          </ul>
          <ul>   
            <li>
            <Searchbar/>
            </li>          
            <li>
              <button className="menu-button">...</button>
            </li>
          </ul>
        </div>
       </nav>    
      <div className="menu-index">
        <div>
          <img className="menu-index-diart" src={Diart} alt="Diart" />
          <p className="menu-index-title">
            <span>Descubre</span> y recolecta NFTs <br />
            extraordinarios.
          </p>
          <button className="menu-index-button-register">Registrate</button>
          <button className="menu-index-button-session">Inicia Sesión</button>
        </div>
        <img className="menu-index-imgHome" src={ImgHome} alt="ImgHome" />
      </div>
      <p className="menu-section">Colecciones</p>
    </>
  );
};
