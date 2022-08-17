import React from 'react'
import { Link } from 'react-router-dom'
// import homeView from '../../assets/Pictures/peep-7.svg'



const Category = ({down,categoryName}) => {
  return (
    <div className = {`relative flex justify-center items-center ${down == true && `rotate-180`} mx-[-50px] ` }>

      <svg  width="250" height="250" viewBox="-50 -50 300 300">
        <polygon className="triangle stroke-[40] stroke-main-black  fill-main-black relative"  strokeLinejoin="round" points="100,0 0,200 200,200"/>
      </svg>
      <h3 className={`absolute text-white font-bold text-2xl ${down == true && `rotate-180`} `} >{categoryName}</h3>
      {/* <Link to='/' className='absolute text-white font-bold'>Home</Link> */}
      
    </div>
      
    
    
  )
}

export default Category