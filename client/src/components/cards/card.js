import React from "react"

const card = ({ text, text2 }) => {
  return (

    <article className="bg-main-white bg-opacity-30 rounded-lg w-28 h-10 md:w-32 ld:w-36 md:h-12 md:px-2 font-inter gap-x-4 md:p-1 p-[2px]" >

      <p className="text-xs text-ellipsis overflow-hidden whitespace-nowrap">{text}</p>
      <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">{text2}</p>

    </article>

  )
}

export default card;