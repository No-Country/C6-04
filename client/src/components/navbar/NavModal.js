import ButtonActive from "./ButtonActive";
import SocialMedia from "./SocialMedia";
import closeButton from "./../../assets/Icons/close.svg";
import "./NavModal.css";
import { NavLink } from "react-router-dom";
import ModalsAuth from "../Modal/ModalsAuth";
import Metamask from "../../services/Metamask";

const NavModal = () => {
  const options = [
    {
      name: "Categorias",
      to: "/categoria",
      font: true,
    },
    {
      name: "Colecciones",
      to: "/descubrir",
      font: true,
    },
    {
      name: "NFTs",
      to: "/descubrir",
      font: true,
    },
    {
      name: "Acerca de",
      to: "/acerca-de",
      font: false,
    },
    {
      name: "Nosotros",
      to: "/nosotros",
      font: false,
    },
    {
      name: "Equipo",
      to: "/equipo",
      font: false,
    },
  ];
  return (
    <>
      <ButtonActive modal="navModal" />

      {/* modal */}
      <section className="modal">
        <article className="modal-box">
          <label for="navModal">
            <img
              src={closeButton}
              className="absolute right-2 top-2 w-8 cursor-pointer"
              alt=""
            />
          </label>

          <div className="divider font-bold mt-6">Bienvenido</div>

          {/* main options */}
          <ul className="my-8 w-fit">
            {options.map((op) => (
              <>
                {op.font && <li className="modal-list_mainLink"><NavLink to={op.to}>{op.name}</NavLink></li>}
              </>
            ))}
          </ul>

          {/* secondary options */}
          <ul className="my-8 w-fit">
            {options.map((op) => (
              <>
                {!op.font && (
                  <li className="modal-list_secLink">
                    <NavLink to={op.to}>{op.name}</NavLink>
                  </li>
                )}
              </>
            ))}
          </ul>

          {/* login options */}
          <ul className="my-8 w-fit">
            <ModalsAuth boolean={false} />
          </ul>

          <div className="divider font-bold mt-6">Billetera</div>

          <article className="mt-8 flex justify-center">
            <Metamask />
          </article>

          <div className="divider font-bold mt-6">Redes Sociales</div>

          <SocialMedia />
        </article>
      </section>
    </>
  );
};

export default NavModal;
