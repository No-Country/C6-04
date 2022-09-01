import ItemCard from "./../components/cards/ItemCard";
import SearchInput from "../components/input/SearchInput";
import Expandir from "./../assets/Icons/Expandir.svg";
import orderIcon from "./../assets/Icons/ordenar.svg";
import { NavLink } from "react-router-dom";

const Collection = () => {
  return (
    <main className="bg-main-blue flex flex-col items-center justify-start min-h-screen flex-wrap gap-5 pt-3">
      <section className="flex flex-col md:flex md:flex-row flex-wrap rounded-3xl gap-3 bg-second-blue min-h-[400px] w-[96%] p-6 mt-3">
        <figure>
          <img
            className="w-[325px] h-[325px] object-cover object-left rounded-3xl"
            src="https://nftnewspro.com/wp-content/uploads/2021/12/Prime-Ape-NFT-collection-was-sold-in-38-minutes-.jpg"
            alt=""
          />
        </figure>
        <article className="md:p-8 flex flex-col gap-5 max-w-[40%] lg:max-w-[60%]">
          <h3 className="text-4xl font-black text-black">
            Scaredy cubits Genesis
          </h3>

          <section className="flex flex-wrap flex-col">
            <article className="text-white font-semibold text-3xl flex flex-row gap-6 md:gap-10">
              <h4> 500 </h4>
              <h4> 288 </h4>
              <h4 className="flex lg:block gap-x-2">
                0.13 <span className="text-lg lg:text-2xl">ETH</span>{" "}
              </h4>
            </article>
            <article className="text-black font-bold text-xl flex flex-row gap-6 md:gap-9">
              <h5> Items </h5>
              <h5> Dueños </h5>
              <h5> Precio minimo </h5>
            </article>
          </section>
          <p className="font-medium text-black text-left w-72 sm:w-80 lg:w-auto">
            Say hello to these 500 friendly little NFT fellows - whoa, not too
            fast! They're scared to bits about this new world they've found
            themselves in, but that won't stop them from facing their fears.
          </p>
        </article>
      </section>

      <section className="flex flex-row w-[96%] gap-x-8">
        {window.screen.width >= 768 && (
          <article className="flex flex-col bg-second-blue w-2/6 h-full rounded-2xl gap-8 p-8">
            {/* Busqueda */}
            <section className="flex flex-col justify-center items-start gap-3 ">
              <h3 className="text-black font-bold text-2xl">Busqueda</h3>
              <article className="flex relative justify-center items-center flex-row ">
                <SearchInput
                  className="input input-info text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-14 rounded-3xl w-48 lg:w-52 border-2 border-white"
                  placeholder="Buscar NFTs."
                  icon={true}
                  activeKey={false}
                />
              </article>
            </section>
            {/* Rango de precios */}
            <section className="flex flex-col gap-2 justify-center items-start w-full">
              <article className="flex flex-row justify-center items-center gap-3 ">
                <h3 className="text-black font-bold text-2xl">
                  Rango de precios
                </h3>
              </article>
              <article className="flex flex-row justify-center items-center gap-3 ">
                <input
                  className="text-white text-xs bg-white/20  placeholder:text-white/50 placeholder:font-bold py-3.5 px-6 rounded-3xl border-2 border-white w-20"
                  placeholder="MIN"
                  type="text"
                />
                <span className="text-white text-3xl font-bold">:</span>
                <input
                  className="text-white text-xs bg-white/20  placeholder:text-white/50 placeholder:font-bold py-3.5 px-6 rounded-3xl border-2 border-white w-20"
                  placeholder="MAX"
                  type="text"
                />
              </article>
            </section>
            {/* Disponibilidad */}
            <section className="form-control flex flex-col gap-2">
              <h3 className="text-black font-bold text-2xl">Disponibilidad </h3>
              <div className="laber cursor-pointer flex flex-row justify-start gap-2 items-center text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-48 lg:w-52 border-2 border-white">
                <input
                  type="radio"
                  placeholder="Search NFTs"
                  name="ds"
                  className="radio checked:bg-main-yellow"
                />
                <span className="text-sm font-bold ">All</span>
              </div>
              <div className="cursor-pointer flex flex-row justify-start gap-2 items-center text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-48 lg:w-52 border-2 border-white">
                <input
                  type="radio"
                  placeholder="Search NFTs"
                  name="ds"
                  className="radio checked:bg-main-yellow"
                />
                <span className="text-sm font-bold ">Comprar ahora</span>
              </div>
            </section>
            {/* Atributos */}
            <section className="flex flex-col gap-2">
              <h3 className="text-black font-bold text-2xl">Atributos </h3>
              <div className="flex flex-col justify-center items-start gap-3 ">
                <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-48 lg:w-52 border-2 border-white  ">
                  <h4 className="text-lg text-white">Accesorios</h4>
                  <img src={Expandir} className="absolute right-4 w-5" alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-3 ">
                <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-48 lg:w-52 border-2 border-white  ">
                  <h4 className="text-lg text-white">Fondos</h4>
                  <img src={Expandir} className="absolute right-4 w-5" alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-3 ">
                <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-48 lg:w-52 border-2 border-white  ">
                  <h4 className="text-lg text-white">Personaje</h4>
                  <img src={Expandir} className="absolute right-4 w-5" alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-3 ">
                <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-48 lg:w-52 border-2 border-white  ">
                  <h4 className="text-lg text-white">Prendas vestir</h4>
                  <img src={Expandir} className="absolute right-4 w-5" alt="" />
                </div>
              </div>
            </section>
          </article>
        )}

        <article className="flex flex-col gap-5 pt-8 h-full ">
          <div className="flex flex-row justify-between">
            <div className="flex w-[150px]">
              <h5 className="text-white font-bold">500 items</h5>
            </div>

            <article className="flex justify-end items-end md:w-full ">
              <label className="btn btn-sm h-10 bg-main-white bg-opacity-20 hover:bg-main-blue border-2 border-white hover:border-white rounded-2xl md:ml-5">
                <h3 className="text-main-white font-black text-sm mr-2">
                  Ordenar
                </h3>
                <img src={orderIcon} alt="Menu" className="w-6" />
              </label>
            </article>
          </div>

          <div className="flex flex-row flex-wrap justify-center items-center gap-3 bg-second-blue min-h-[480px] h-full w-full  rounded-2xl overflow-y-scroll p-6">
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
        </article>
      </section>
    </main>
  );
};

export default Collection;
