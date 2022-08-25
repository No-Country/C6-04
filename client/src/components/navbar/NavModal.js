import ButtonActive from "./ButtonActive";
import SocialMedia from "./SocialMedia";
import closeButton from "./../../assets/Icons/close.svg";
import "./NavModal.css";
import { NavLink } from "react-router-dom";

const NavModal = () => {
  const options = [
    {
      name: "Colecciones",
      to: "/",
      font: true,
    },
    {
      name: "Tendencias",
      to: "/",
      font: true,
    },
    {
      name: "Categorias",
      to: "/",
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

          <div class="divider font-bold mt-6">Bienvenido</div>

          {/* main options */}
          <ul className="my-8 w-fit">
            {options.map((op) => (
              <>
                {op.font && <li className="modal-list_mainLink">{op.name}</li>}
              </>
            ))}
          </ul>

          {/* secondary options */}
          <ul className="my-8 w-fit">
            {options.map((op) => (
              <>
                {!op.font && <li className="modal-list_secLink"><NavLink to={op.to}>{op.name}</NavLink></li>}
              </>
            ))}
          </ul>

          {/* login options */}
          <ul className="my-8 w-fit">
            <li className="modal-list_logLink">Inicia sesión</li>
            <li className="modal-list_logLink">Registrate</li>
          </ul>

          <div class="divider font-bold mt-6">Redes Sociales</div>

          <SocialMedia />
        </article>
      </section>
    </>
  );
};

export default NavModal;
