import React from "react";
import Img1Trends from '../../../assets/Pictures/img-1-trends.jpeg'
import Img2Trends from '../../../assets/Pictures/img-2-trends.jpeg'
import Img3Trends from '../../../assets/Pictures/img-3-trends.png'
import Img4Trends from '../../../assets/Pictures/img-4-trends.png'
import Img5Trends from '../../../assets/Pictures/img-5-trends.gif'
import Img6Trends from '../../../assets/Pictures/img-6-trends.png'
import Img7Trends from '../../../assets/Pictures/img-7-trends.gif'
import Img8Trends from '../../../assets/Pictures/img-8-trends.gif'
import Img9Trends from '../../../assets/Pictures/img-9-trends.gif'



const ItemListTrend = () => {
     return (
        <div className="mt-16 ml-7 ">
            <ul className=" text-center gap-x-2 gap-y-4 grid grid-cols-3 " >
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">1</h3>
                    <img src={Img1Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">2</h3>
                    <img src={Img2Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">3</h3>
                    <img src={Img3Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4 ">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">4</h3>
                    <img src={Img4Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4 ">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24  " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">5</h3>
                    <img src={Img5Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">6</h3>
                    <img src={Img6Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">7</h3>
                    <img src={Img7Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4 ">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24  " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">8</h3>
                    <img src={Img8Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 items-center w-96">
                    <h3 className="font-bold text-xl">9</h3>
                    <img src={Img9Trends} alt="" className="rounded-full object-contain h-10 w-10"/>
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-0 font-bold text-xl">Name - Name</h3>
                        <div className="flex justify-between">
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 mr-4">
                                <h4 className="text-xs">Precio</h4> <h5 className="text-sm">51,75 ETH</h5>
                            </button>
                            <button className="bg-cyan-100/60 rounded-xl h-10 w-24 " >
                                <h4 className="text-xs">Apuesta +</h4><h5 className="text-sm">0,75 ETH</h5>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
    
     )
}

export default ItemListTrend