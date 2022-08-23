import React from "react";
import logo from "../assets/Pictures/logo.svg";
import iconSearch from "../assets/Icons/icons8-search.svg";
import iconPoints from "../assets/Icons/points.svg";
import NftBar from "./NftBar";

const SearchNft = () => {
    return (
        <div className="min-h-screen min-w-screen bg-main-blue flex flex-col ">
            <div className="flex flex-row justify-between items-center gap-10 px-10 border-b-4 border-second-blue ">
                <div className="flex flex-row items-center gap-10">
                    <img src={logo} alt="" />
                    <h3 className="font-bold text-yellow-400 text-3xl">DIGITAL IS ART</h3>
                </div>
                <div className="flex gap-4">
                    <div className="relative flex items-center">
                        <img src={iconSearch} className="absolute left-4 " alt="" />
                        <input
                            className="p-4 px-20 rounded-2xl bg-second-blue placeholder:text-white/50 border-2 border-white w-[480px] text-white "
                            placeholder="Search by collection, NFT or User"
                            type="text"
                        />

                        <div class="text-white font-bold text-xl bg-second-blue border-2 border-white py-1 px-3 rounded-xl absolute right-5">
                            F
                        </div>

                    </div>
                <div className="bg-second-blue border-2 border-white rounded-3xl  px-6 ">
                    <img src={iconPoints} className="text-white" alt="" />
                </div>
                
                </div>
                
            </div>
            <NftBar/>
            
        </div>
    );
};

export default SearchNft;
