import React from "react"

const card = ({ text, text2 }) => {
  return (
        
      <article className="bg-main-gray rounded-lg w-28 h-10 md:w-36 md:h-12 px-1 font-inter gap-x-4" >
         <p className="text-xs text-ellipsis overflow-hidden whitespace-nowrap">{text}</p> 
         <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">{text2}</p> 
      </article>

  )
}


export default card;

