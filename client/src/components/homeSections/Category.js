import React from 'react'

const Category = ({down,categoryName}) => {
  return (
    <div className = {`relative flex justify-center items-center ${down === true && `rotate-180`} mx-[-60px] lg:mx-[-40px] lg:flex-wrap md:mx-[-45px]` }>

      <svg width="240" viewBox="-50 -50 300 300">
        <polygon className="triangle stroke-[40] stroke-main-black  fill-main-black relative"  strokeLinejoin="round" points="100,0 0,200 200,200"/>
      </svg>
      <h3 className={`absolute text-white font-bold text-2xl ${down === true && `rotate-180`} `} >{categoryName}</h3>
      
    </div>

  )
}

export default Category