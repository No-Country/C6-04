import { useState } from "react";
import { NavLink } from "react-router-dom";
import orderIcon from "./../../assets/Icons/ordenar.svg";
import Button from "../botones/Button";
import SearchInput from "../input/SearchInput";
import ItemCard from "../cards/ItemCard";

const SearchContent = () => {
  const [colection, setColection] = useState(true);
  const [nft, setNft] = useState(false);

  const handleClick = () => {
    setColection(true);
    setNft(false);
  };
  const handleClick2 = () => {
    setColection(false);
    setNft(true);
  };

  return (
    <main className="flex flex-col items-center">
      {/* Nav and Filters */}
      <section className="flex flex-row justify-start items-center bg-second-blue rounded-2xl px-4 md:px-10 h-14 w-11/12 mx-10 my-5">
        <article className="flex flex-row items-center md:gap-6 bg-second-blue">
          <Button
            className={`flex items-center bg-[#7CA2DC] p-3.5 rounded-2xl h-10 font-extrabold text-xl ${
              colection
                ? "text-main-black bg-[#fcbf29] shadow-md shadow-gray-600"
                : "text-main-white"
            }`}
            onClick={() => handleClick()}
            text="Coleccion"
          />
          <Button
            className={`flex items-center bg-[#7CA2DC] p-3.5 rounded-2xl h-10 font-extrabold text-xl ${
              nft
                ? "text-main-black bg-[#fcbf29] shadow-md shadow-gray-600"
                : "text-main-white"
            }`}
            onClick={() => handleClick2()}
            text="Elementos"
          />
        </article>

        {window.screen.width >= 1200 && nft === true && (
          <>
            <article className="flex flex-row items-center gap-10">
              <article class="divider divider-horizontal before:bg-main-white after:bg-main-white"></article>
              <section className="flex flex-row justify-center items-center gap-3 ">
                <h3 className="text-main-white font-black text-sm">Busqueda</h3>
                <SearchInput
                  className="input input-info bg-main-white bg-opacity-20 pl-12 h-10 w-40 placeholder:text-main-white text-main-white border-2 border-main-white text-sm rounded-3xl"
                  placeholder="Buscar NFTs."
                  icon={true}
                  activeKey={false}
                />
              </section>

              <section className="flex flex-row gap-2 justify-center items-center">
                <h3 className="text-main-white font-black text-sm w-20">
                  Rango de precio
                </h3>
                <input
                  className="input input-info pl-4 bg-main-white bg-opacity-20 h-10 w-16 placeholder:text-main-white text-main-white border-2 border-main-white text-sm rounded-3xl"
                  placeholder="MIN"
                  type="text"
                />
                <span className="text-main-white text-3xl font-bold">:</span>
                <input
                  className="input input-info pl-4 bg-main-white bg-opacity-20 h-10 w-16 placeholder:text-main-white text-main-white border-2 border-main-white text-sm rounded-3xl"
                  placeholder="MAX"
                  type="text"
                />
              </section>
            </article>

            <article className="flex justify-end items-end md:w-full">
              <label className="btn btn-sm h-10 bg-main-white bg-opacity-20 hover:bg-main-blue border-2 border-white hover:border-white rounded-2xl md:ml-5">
                <h3 className="text-main-white font-black text-sm mr-2">
                  Ordenar
                </h3>
                <img src={orderIcon} alt="Menu" className="w-6" />
              </label>
            </article>
          </>
        )}
      </section>

      {/* BoxCards */}
      <section className="flex flex-col justify-between items-center w-10/12 bg-second-blue min-h-[480px] max-h-[480px] md:mx-10 rounded-2xl px-8 py-8 overflow-y-scroll">
        {colection ? (
          <div className="flex flex-row justify-center flex-wrap gap-4 ">
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
            <NavLink to="/coleccion">
              <ItemCard type="Collection" />
            </NavLink>
          </div>
        ) : (
          <div className="flex flex-row justify-center flex-wrap gap-4 ">
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
            <NavLink to="/nft">
              <ItemCard />
            </NavLink>
          </div>
        )}

        <button className="bg-[#7CA2DC] mt-3 text-xl font-bold text-main-white p-3 rounded-xl">
          Cargar mas
        </button>
      </section>
    </main>
  );
};

export default SearchContent;
