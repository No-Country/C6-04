import closeButton from "./../assets/Icons/close.svg";
import twitter from "./../assets/Icons/twitter.svg";
import instagram from "./../assets/Icons/instagram.svg";
import discord from "./../assets/Icons/discord.svg";
import slack from "./../assets/Icons/slack.svg";
import telegram from "./../assets/Icons/telegram.svg";
import "./NavButton.css";

const ButtonActive = ({ modal }) => {
  return (
    <>
      <label for={modal} className="btn modal-button m-5">
        . . .
      </label>
      <input type="checkbox" id={modal} className="modal-toggle" />
    </>
  );
};

const SocialMedia = () => {
  return (
    <section className="flex gap-5 h-14 w-max-20">
      <img className="modal-list_socialLink" src={twitter} alt="" />
      <img className="modal-list_socialLink" src={instagram} alt="" />
      <img className="modal-list_socialLink" src={discord} alt="" />
      <img className="modal-list_socialLink" src={slack} alt="" />
      <img className="modal-list_socialLink" src={telegram} alt="" />
    </section>
  );
};

const NavButton = () => {
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
      to: "Nosotros",
      font: false,
    },
    {
      name: "Nosotros",
      to: "/",
      font: false,
    },
    {
      name: "Equipo",
      to: "/",
      font: false,
    },
  ];
  return (
    <>
      <section className="flex justify-end dropdown dropdown-end bg-main-blue h-screen">
        {/* Button to open the modal */}

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
                  {!op.font && (
                    <li className="modal-list_mainLink">{op.name}</li>
                  )}
                </>
              ))}
            </ul>

            {/* secondary options */}
            <ul className="my-8 w-fit">
              {options.map((op) => (
                <>
                  {!op.font && (
                    <li className="modal-list_secLink">{op.name}</li>
                  )}
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
      </section>
    </>
  );
};

export default NavButton;
