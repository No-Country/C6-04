import React from "react";

const boton = ({ text, className, google, alt, onClick}) => {
  return (
    <div>
      <button className={className} onClick={onClick}>

        <img src={google} alt={alt} />
        {text}

      </button>
    </div>
  )
}

export default boton;