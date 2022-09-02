import { NavLink, useLocation } from "react-router-dom";
import Monedero from "../assets/Icons/monedero.svg";
import Edit from "../assets/Icons/edit.svg";
import Button from "../components/botones/Button";
import ItemCard from "../components/cards/ItemCard";

const PagesOptions = ({ list }) => {
  return (
    <>
      <ul className="flex flex-col items-center gap-y-3 py-6">
        <h1 className="font-black stroke-pages text-[38px]">Tablero</h1>
        <NavLink
          className={({ isActive }) =>
            isActive ? list + " bg-opacity-90 text-[22px]" : list
          }
          to="/perfil"
        >
          <li>Perfil</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? list + " bg-opacity-90 text-[22px]" : list
          }
          to="/tus-nft"
        >
          <li>Tus NFT</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? list + " bg-opacity-90 text-[22px]" : list
          }
          to="/historial"
        >
          <li>Historial</li>
        </NavLink>
      </ul>
    </>
  );
};

const PerfilShow = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-main-black">Perfil</h1>
      <section className="flex flex-col md:flex-row">
        <figure>
          <img
            src="https://placeimg.com/192/192/people"
            className="w-52 rounded-full mt-4 md:m-10"
            alt=""
          />
        </figure>
        <article className="flex flex-col gap-y-4 md:ml-20 mt-12 font-semibold">
          {/* Nombres */}
          <section className="flex flex-col md:flex-row items-center md:w-[400px]">
            <article className="w-1/2 flex justify-start">
              <h1 className="font-bold text-xl text-main-black">Nombres:</h1>
            </article>
            <article className="w-1/2 flex justify-start md:justify-end">
              <label className="flex justify-center bg-main-white bg-opacity-30 rounded-full p-2 px-3 min-w-[120px] md:min-w-[200px] line-clamp-1">
                Nombre 1 - Nombre 2
              </label>
            </article>
          </section>
          {/* Apellidos */}
          <section className="flex flex-col md:flex-row items-center md:w-[400px]">
            <article className="w-1/2 flex justify-start">
              <h1 className="font-bold text-xl text-main-black">Apellidos:</h1>
            </article>
            <article className="w-1/2 flex justify-start md:justify-end">
              <label className="flex justify-center bg-main-white bg-opacity-30 rounded-full p-2 px-3 min-w-[120px] md:min-w-[200px] line-clamp-1">
                Apellido 1 - Apellido 2
              </label>
            </article>
          </section>
          {/* Nacimiento */}
          <section className="flex flex-col md:flex-row items-center -mt-2 md:w-[400px]">
            <article className="w-1/2 flex justify-start">
              <h1 className="font-bold text-xl text-main-black">
                Fecha de nacimiento:
              </h1>
            </article>
            <article className="w-1/2 flex justify-start md:justify-end">
              <label className="flex justify-center bg-main-white bg-opacity-30 rounded-full p-2 px-3 min-w-[120px] md:min-w-[200px] line-clamp-1">
                12 - 08 - 1993
              </label>
            </article>
          </section>
        </article>
      </section>
      <section className="flex justify-center">
        <NavLink to="editar">
          <Button
            className="btn bg-second-yellow bg-opacity-90 text-main-black rounded-2xl hover:border-second-yellow hover:bg-second-yellow"
            text="Editar"
          />
        </NavLink>
      </section>
    </>
  );
};

const PerfilEdit = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-main-black">Editar perfil</h1>
      <section className="flex flex-col md:flex-row">
        {/* Image */}
        <figure className="display-block md:display-hidden lg:display-block">
          <label
            for="dropzone-file"
            class="rounded-full mt-4 xl:m-10 flex flex-col bg-gray-500 cursor-pointer hover:bg-gray-600 "
          >
            <div class="flex flex-col justify-center items-center">
              <img
                src="https://placeimg.com/192/192/people"
                className="w-52 rounded-full hover:opacity-40"
                alt=""
              />
              <input id="dropzone-file" type="file" class="hidden" />
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src={Edit} alt="" className="-mt-52 rounded-full" />
            </div>
          </label>
        </figure>

        <article className="flex flex-col gap-y-4 md:ml-20 mt-12 font-semibold">
          {/* Nombres */}
          <section className="flex flex-col md:flex-row items-center md:w-[400px]">
            <article className="w-1/2 flex justify-start">
              <h1 className="font-bold text-xl text-main-black underline">
                Nombres:
              </h1>
            </article>
            <article className="w-1/2 flex justify-start md:justify-end">
              <input
                className="flex justify-center bg-main-white bg-opacity-30 rounded-full p-2 px-3 min-w-[120px] md:min-w-[200px] line-clamp-1 placeholder:text-main-black"
                placeholder="Nombre 1 - Nombre 2"
              />
            </article>
          </section>
          {/* Apellidos */}
          <section className="flex flex-col md:flex-row items-center md:w-[400px]">
            <article className="w-1/2 flex justify-start">
              <h1 className="font-bold text-xl text-main-black underline">
                Apellidos:
              </h1>
            </article>
            <article className="w-1/2 flex justify-start md:justify-end">
              <input
                className="flex justify-center bg-main-white bg-opacity-30 rounded-full p-2 px-3 min-w-[120px] md:min-w-[200px] line-clamp-1 placeholder:text-main-black"
                placeholder="Apellido 1 - Apellido 2"
              />
            </article>
          </section>
          {/* Nacimiento */}
          <section className="flex flex-col md:flex-row items-center -mt-2 md:w-[400px]">
            <article className="w-1/2 flex justify-start">
              <h1 className="font-bold text-xl text-main-black underline">
                Fecha de nacimiento:
              </h1>
            </article>
            <article className="w-1/2 flex justify-start md:justify-end">
              <input
                className="flex justify-center bg-main-white bg-opacity-30 rounded-full p-2 px-3 min-w-[120px] md:min-w-[200px] line-clamp-1 placeholder:text-main-black"
                placeholder="12 - 08 - 1993"
              />
            </article>
          </section>
        </article>
      </section>
      <section className="flex justify-center gap-x-20">
        <NavLink to="/perfil">
          <Button
            className="btn bg-second-red bg-opacity-90 text-main-white rounded-2xl hover:border-second-red hover:bg-second-red text-md"
            text="Cancelar"
          />
        </NavLink>
        <NavLink to="/perfil">
          <Button
            className="btn bg-second-green bg-opacity-90 text-main-white rounded-2xl hover:border-second-green hover:bg-second-green text-md"
            text="Guardar"
          />{" "}
        </NavLink>
      </section>
    </>
  );
};

const TusNFT = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-main-black">Tus NFT</h1>
      <article className="flex flex-row flex-wrap gap-4 mt-6">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </article>
    </>
  );
};

const Historial = () => {
  const history = {
    purchase: [
      {
        number: 1,
        img: "https://picsum.photos/200",
        purchased_by: "Al3x4nDr0s",
        date: "12/04/2022",
        history_ID: "12k1hl3j4h12lk",
      },
      {
        number: 2,
        img: "https://picsum.photos/200",
        purchased_by: "Al3x4nDr0s",
        date: "12/04/2022",
        history_ID: "12k1hl3j4h12lk",
      },
      {
        number: 3,
        img: "https://picsum.photos/200",
        purchased_by: "Al3x4nDr0s",
        date: "12/04/2022",
        history_ID: "12k1hl3j4h12lk",
      },
      {
        number: 4,
        img: "https://picsum.photos/200",
        purchased_by: "Al3x4nDr0s",
        date: "12/04/2022",
        history_ID: "12k1hl3j4h12lk",
      },
      {
        number: 5,
        img: "https://picsum.photos/200",
        purchased_by: "Al3x4nDr0s",
        date: "12/04/2022",
        history_ID: "12k1hl3j4h12lk",
      },
    ],
  };
  return (
    <>
      <section className="ml-6 mb-6">
        <h1 className="flex font-bold text-3xl text-main-black">
          Historial de compra
        </h1>
      </section>
      <main className="flex flex-col justify-center items-center">
        {history.purchase.map((purchase) => (
          <section
            className="bg-main-white bg-opacity-25 flex items-center px-5 gap-x-8 h-12 mb-1 rounded-xl w-full md:w-[700px]"
            key={purchase.number}
          >
            <article>
              <img
                src={purchase.img}
                className="w-8 rounded-xl"
                alt={purchase.purchased_by}
              />{" "}
            </article>
            <article>
              <h2 className="font-bold text-md text-main-black">
                Comprado por {purchase.purchased_by} el {purchase.date}
              </h2>
            </article>
            <article className="flex w-56 justify-end items-center">
              <img src={Monedero} className="w-6 mr-0.5" alt="" />
              <h2 className="font-bold text-sm text-main-black">
                {purchase.history_ID}...
              </h2>
            </article>
          </section>
        ))}
      </main>
    </>
  );
};

const Perfil = () => {
  const location = useLocation();
  return (
    <>
      <main className=" w-full xl:h-full bg-main-blue flex justify-center items-center py-6">
        <section className="w-11/12 h-full bg-second-blue flex flex-col items-center md:flex md:flex-row md:items-start rounded-2xl py-8 md:gap-x-6 px-6 gap-y-6 md:gap-y-0">
          <article className="bg-main-white bg-opacity-30 w-64 h-80 md:h-80 rounded-2xl">
            <PagesOptions list="bg-main-white bg-opacity-40 h-14 w-5/6 rounded-2xl font-black text-xl flex justify-center items-center" />
          </article>
          <article className="bg-main-white bg-opacity-40 w-full h-fit xl:h-full rounded-2xl py-10 px-5">
            {location.pathname === "/perfil" && <PerfilShow />}
            {location.pathname === "/perfil/editar" && <PerfilEdit />}
            {location.pathname === "/tus-nft" && <TusNFT />}
            {location.pathname === "/historial" && <Historial />}
          </article>
        </section>
      </main>
    </>
  );
};

export default Perfil;
