import React from 'react'

const CollectionCard = () => {
    return (
        <div className='flex flex-col justify-start items-center bg-[#7CA2DC] h-[221px] w-[268px] rounded-xl  overflow-hidden gap-2 cursor-pointer  '>
          <img className=' h-[151px] object-cover' src="https://a.1stdibscdn.com/dist/nft/Anne+Spalter/It+Exploded+%232+POSTER.png" alt="" />
          <div className='flex flex-col bg-[#96B8EC] rounded-2xl pl-4 py-1 pr-24'>
            <h3 className='font-bold text-xl text-white'>Evolution</h3>
            <h4 className='text-white text-sm'>25 ACTIVOS</h4>

          </div>
        </div>
    )
}

export default CollectionCard