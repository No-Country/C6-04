import React from "react"

const card = ({ text, text2 }) => {
  return (
        
      <article className="bg-main-gray rounded-lg w-36 h-12 px-1 font-inter gap-x-4" >
         <p className="text-xs text-ellipsis overflow-hidden whitespace-nowrap">{text}</p> 
         <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">{text2}</p> 
      </article>

  )
}


export default card;

