import { NavLink, useLocation } from "react-router-dom";

const PagesOptions = ({ list }) => {
  return (
    <>
      <ul className="flex flex-col items-center gap-y-3 py-6">
        <h1 className="font-black stroke-pages text-[38px]">Proyecto</h1>
        <NavLink
          className={({ isActive }) =>
            isActive ? list + " bg-opacity-90 text-[22px]" : list
          }
          to="/acerca-de"
        >
          <li>Acerca de</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? list + " bg-opacity-90 text-[22px]" : list
          }
          to="/nosotros"
        >
          <li>Nosotros</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? list + " bg-opacity-90 text-[22px]" : list
          }
          to="/equipo"
        >
          <li>Equipo</li>
        </NavLink>
      </ul>
    </>
  );
};

const AcercaDe = () => {
  return (
    <>
      <h1 className="font-bold text-2xl text-main-black">Acerca de</h1>
      <article className="flex flex-col gap-y-4 mt-6 font-semibold">
        <p>No Country - Simulación de Entorno Laboral</p>
        <p>
          Proyecto realizado para la simulación organizada por NoCountry,
          Cohorte 6
        </p>
        <p>Gana y valida experiencia como Desarrollador.</p>
        <p>
          Trabaja en Equipo Ponete a Prueba. No todo es código, demostra tu
          capacidad trabajando junto a otras personas.
        </p>
      </article>
    </>
  );
};

const Nosotros = () => {
  return (
    <>
      <h1 className="font-bold text-2xl text-main-black">Nosotros</h1>
      <article className="flex flex-col gap-y-4 mt-6 font-semibold">
        <p>
          Proyecto enfocado sobre NFTs y otras tecnologias Blockchain,
          desarrollando una aplicacion Marketplace donde los usuarios van a
          poder:
        </p>
        <ul>
          <li>• Registrarse</li>
          <li>• Configurar su perfil y visualizar sus NFT</li>
          <li>• Vincular su billetera de MetaMask</li>
          <li>• Descubrir y recolectar NFTs</li>
        </ul>
      </article>
    </>
  );
};

const Equipo = () => {
  const team = {
    person: [
      {
        img: "https://avatars.githubusercontent.com/u/88901450?v=4",
        name: "Al3x4nDr0s",
        rol: "Backend Dev",
        linkedin: "https://www.linkedin.com/in/alejandro-alfredo-cardenas/",
        github: "https://github.com/Al3x4nDr0s",
      },
      {
        img: "https://avatars.githubusercontent.com/u/86995775?v=4",
        name: "JuliErre",
        rol: "Frontend Dev",
        linkedin:
          "https://www.linkedin.com/in/julian-erreguerena-montini-b77055206/",
        github: "https://github.com/JuliErre",
      },
      {
        img: "https://avatars.githubusercontent.com/u/60670525?v=4",
        name: "AcJoell",
        rol: "Frontend Dev",
        linkedin: "https://www.linkedin.com/in/acjoell/",
        github: "https://github.com/AcJoell",
      },
      {
        img: "https://avatars.githubusercontent.com/u/109761305?v=4",
        name: "DsOvalle",
        rol: "Frontend Dev",
        linkedin: "https://www.linkedin.com/in/",
        github: "https://github.com/dsovalle",
      },
      {
        img: "https://avatars.githubusercontent.com/u/70817495?v=4",
        name: "oliveravictor",
        rol: "Frontend Dev",
        linkedin: "https://www.linkedin.com/in/victor-olivera/",
        github: "https://github.com/oliveravictor",
      },
    ],
  };
  return (
    <>
      <div class="grid grid-cols-1 gap-x-5 gap-y-8 xl:gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center">
        {team.person.map((person) => (
          <>
            <div class="bg-white bg-opacity-60 w-[170px] h-60 rounded-lg">
              <div class="flex flex-col items-center justify-center p-3">
                <img
                  class="w-20 h-20 mb-2 rounded-full"
                  src={person.img}
                  alt=""
                />
                <h2 class="text-lg font-medium">{person.name}</h2>
                <p class="font-medium text-second-blue">{person.rol}</p>
              </div>

              <div class="flex border-t border-main-black divide-x divide-main-black">
                <a
                  href={person.github}
                  class="flex-1 block p-6 text-center text-black transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-auto fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a
                  href={person.linkedin}
                  class="flex-1 block p-6 text-center text-black transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-auto fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

const Project = () => {
  const location = useLocation();
  return (
    <>
      <main className=" w-full xl:h-[590px] bg-main-blue flex justify-center items-center py-6">
        <section className="w-11/12 h-full bg-second-blue flex flex-col items-center md:flex md:flex-row md:items-start rounded-2xl py-8 md:gap-x-6 px-6 gap-y-6 md:gap-y-0">
          <article className="bg-main-white bg-opacity-30 w-64 h-80 md:h-80 rounded-2xl">
            <PagesOptions list="bg-main-white bg-opacity-40 h-14 w-5/6 rounded-2xl font-black text-xl flex justify-center items-center" />
          </article>
          <article className="bg-main-white bg-opacity-40 w-full h-fit xl:h-80 rounded-2xl py-10 px-5">
            {location.pathname === "/acerca-de" && <AcercaDe />}
            {location.pathname === "/nosotros" && <Nosotros />}
            {location.pathname === "/equipo" && <Equipo />}
          </article>
        </section>
      </main>
    </>
  );
};

export default Project;
