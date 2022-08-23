import React, { useState } from "react";
import orderIcon from "./../assets/Icons/ordenar.svg";
import iconSearch from "../assets/Icons/icons8-search.svg";
import CollectionCard from "./CollectionCard";
import NFTCard from "./NFTCard";

const NftBar = () => {
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
    console.log(colection);
    console.log(nft);

    return (
        <div className="flex flex-col min-h-full gap-5">
            <div className="flex flex-row justify-between items-center bg-second-blue rounded-2xl max-w-full px-10 h-20  mx-10 mt-10">
                <div className="flex flex-row justify-center items-center gap-6 bg-second-blue border-r-2 border-white/50 pr-10 h-full">
                    <button
                        className={`bg-[#7CA2DC] p-3.5 rounded-3xl h-14 font-bold text-2xl ${colection
                                ? " text-black bg-yellow-400  shadow-lg shadow-gray-600/70"
                                : "text-white"
                            }`}
                        onClick={() => handleClick()}
                    >
                        Coleccion
                    </button>
                    <button
                        className={`bg-[#7CA2DC] p-3.5 rounded-3xl h-14 font-bold text-2xl ${nft
                                ? " text-black bg-yellow-400 shadow-lg shadow-gray-600/70 "
                                : "text-white"
                            }`}
                        onClick={() => handleClick2()}
                    >
                        Elementos
                    </button>
                </div>

                <div className="flex flex-row justify-center items-center gap-24">
                    <div className="flex flex-row justify-center items-center gap-3 ">
                        <h3 className="text-white/70 font-bold text-sm">Busqueda</h3>
                        <div className="flex relative justify-center items-center flex-row ">
                            <img src={iconSearch} className="absolute left-4 w-5" alt="" />
                            <input
                                className="text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-14 rounded-3xl w-52 border-2 border-white"
                                type="text"
                                placeholder="Search NFTs"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-2 justify-center items-center">
                        <div className="flex flex-row justify-center items-center gap-3 w-40">
                            <h3 className="text-white/70 font-bold text-sm">
                                Rango de precios
                            </h3>
                            <input
                                className="text-white text-xs bg-white/20  placeholder:text-white/50 placeholder:font-bold py-3.5 px-6 rounded-3xl border-2 border-white w-20"
                                placeholder="MIN"
                                type="text"
                            />
                        </div>
                        <span className="text-white text-3xl font-bold">:</span>
                        <div className="flex flex-row justify-center items-center gap-3 ">
                            <input
                                className="text-white text-xs bg-white/20  placeholder:text-white/50 placeholder:font-bold py-3.5 px-6 rounded-3xl border-2 border-white w-20"
                                placeholder="MAX"
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex  bg-[#7CA2DC] p-3 rounded-3xl h-14 gap-2 cursor-pointer">
                    <h3 className="text-white font-bold text-2xl">Ordenar</h3>
                    <img className="w-10" src={orderIcon} alt="" />
                </div>
            </div>

            <div className=" flex flex-col justify-between items-center bg-second-blue min-h-[700px] max-h-[700px] mx-10 rounded-3xl px-32 py-4 gap-2 overflow-y-scroll">
                {colection ? (
                    <div className="flex flex-row flex-wrap gap-4 ">
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                        <CollectionCard />
                    </div>
                ) : (
                    <div className="flex flex-row flex-wrap gap-2 ">
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                        <NFTCard />
                    </div>
                )}

                <button className="bg-[#7CA2DC] text-xl font-bold text-white p-3 rounded-xl">
                    Cargar mas
                </button>
            </div>
        </div>
    );
};

export default NftBar;
