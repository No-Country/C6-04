import React from 'react'

const NFTCard = () => {
  return (
    <div>
        <div className='flex flex-col justify-start items-center p-5 bg-[#7CA2DC] h-[310px] w-52 rounded-xl pt-6   '>
            <div className='flex flex-col justify-start items-center gap-2 '>

            <img className='object-cover h-40 w-40 rounded-lg' src="https://cdn.decrypt.co/wp-content/uploads/2021/10/bored-ape-nft-sothebys-record-sale-gID_4.png.webp" alt="" />
            <div className='flex flex-col justify-start items-start w-full mt-2'>
                <h3 className='text-white/90 text-l text-left'>MV5 - Edicion</h3>
                <h3 className='text-white font-bold text-l'>Pase de Acceso</h3>
            </div>
            <div className='flex flex-col  bg-[#96B8EC] w-full rounded-2xl px-2 py-1 cursor-pointer'>
                <h3 className='text-black text-[0.7rem] '>Precio</h3>
                <div className='flex flex-row items-end justify-between'>
                    <h3 className='text-black font-bold'>0.3 ETH</h3>
                    <h3 className='text-black  text-[0.7rem] font-bold'>Comprar</h3>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NFTCard