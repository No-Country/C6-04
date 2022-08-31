import React from 'react'
import ItemCard from './../components/cards/ItemCard'
import iconSearch from "./../assets/Icons/search.svg";
import Expandir from "./../assets/Icons/Expandir.svg";
import orderIcon from "./../assets/Icons/ordenar.svg";

const Collection = () => {
    return (
        <div className='bg-main-blue flex items-center justify-start flex-col min-h-screen min-w-full px-10 flex-wrap gap-5 pt-3'>
            <section className='rounded-3xl bg-second-blue min-h-[400px] w-full p-6 flex flex-row gap-3 flex-wrap'>

                <div className='flex'>
                    <img className='w-[325px] h-[325px] object-cover object-left rounded-2xl' src="https://nftnewspro.com/wp-content/uploads/2021/12/Prime-Ape-NFT-collection-was-sold-in-38-minutes-.jpg" alt="" />
                </div>
                <article className='px-8 flex flex-col gap-5 max-w-[600px]'>
                    <h3 className='text-4xl font-bold text-black'>Scaredy cubits Genesis</h3>

                    <div className='flex flex-wrap flex-col'>
                        <div className='text-white font-semibold text-3xl flex flex-row gap-10'>
                            <h4> 500 </h4>
                            <h4> 288 </h4>
                            <h4> 0.13 <span className='text-2xl'>ETH</span> </h4>
                        </div>
                        <div className='text-black font-semibold text-xl flex flex-row gap-9'>
                            <h5> Items </h5>
                            <h5> Duenos </h5>
                            <h5> Precio minimo </h5>
                        </div>
                    </div>

                    <p className='text-black  text-left'>Say hello to these 500 friendly little NFT fellows
                        – whoa, not too fast! They’re scared to bits
                        about this new world they’ve found themselves in,
                        but that won’t stop them from facing their fears.
                    </p>
                </article>

            </section>

            <section className='flex w-full flex-row'>
                <article className='flex flex-col bg-second-blue min-w-[500px] min-h-[480px] rounded-2xl gap-8 p-8 pl-16'>
                    <div className="flex flex-col justify-center items-start gap-3 ">
                        <h3 className="text-black font-bold text-2xl">Busqueda</h3>
                        <div className="flex relative justify-center items-center flex-row ">
                            <img src={iconSearch} className="absolute left-4 w-5" alt="" />
                            <input
                                className="text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-14 rounded-3xl w-52 border-2 border-white"
                                type="text"
                                placeholder="Search NFTs"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-start w-full">
                        <div className="flex flex-row justify-center items-center gap-3 ">
                            <h3 className="text-black font-bold text-2xl">
                                Rango de precios
                            </h3>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 ">
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
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className="text-black font-bold text-2xl">Disponibilidad </h3>
                        <div className=" flex flex-row justify-start gap-2 items-center text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-52 border-2 border-white">

                            <input
                                type="radio"
                                placeholder="Search NFTs"
                                name='ds'
                            />
                            <span className='text-sm font-bold '>All</span>
                        </div>
                        <div className=" flex flex-row justify-start gap-2 items-center text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-52 border-2 border-white">

                            <input
                                type="radio"
                                placeholder="Search NFTs"
                                name='ds'
                            />
                            <span className='text-sm font-bold '>Comprar ahora</span>
                        </div>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className="text-black font-bold text-2xl">Atributos </h3>
                        <div className="flex flex-col justify-center items-start gap-3 ">
                            <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-52 border-2 border-white  ">
                                <h4 className='text-lg text-white'>Accesorios</h4>
                                <img src={Expandir} className="absolute right-4 w-5" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-3 ">
                            <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-52 border-2 border-white  ">
                                <h4 className='text-lg text-white'>Fondos</h4>
                                <img src={Expandir} className="absolute right-4 w-5" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-3 ">
                            <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-52 border-2 border-white  ">
                                <h4 className='text-lg text-white'>Personaje</h4>
                                <img src={Expandir} className="absolute right-4 w-5" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-3 ">
                            <div className="flex relative justify-start items-center flex-row text-white text-xs bg-white/20  placeholder:text-white/50 py-3.5 px-6 rounded-3xl w-52 border-2 border-white  ">
                                <h4 className='text-lg text-white'>Prendas vestir</h4>
                                <img src={Expandir} className="absolute right-4 w-5" alt="" />
                            </div>
                        </div>
                    </div>

                </article>
                <article className='flex flex-col gap-5 px-8 pt-8 h-full '>
                    <div className='flex flex-row justify-between'>
                        <div className='flex w-[150px]'>

                        <h5 className='text-white font-bold'>500 items</h5>
                        </div>

                        <article className="flex justify-end items-end md:w-full ">
                            <label className="btn btn-sm h-10 bg-main-white bg-opacity-20 hover:bg-main-blue border-2 border-white hover:border-white rounded-2xl md:ml-5">
                                <h3 className="text-main-white font-black text-sm mr-2">Ordenar</h3>
                                <img src={orderIcon} alt="Menu" className="w-6" />
                            </label>
                        </article>

                    </div>

                    <div className='flex flex-row flex-wrap justify-center items-center gap-3  bg-second-blue min-h-[480px] h-full w-full  rounded-2xl overflow-y-scroll p-6'>
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Collection