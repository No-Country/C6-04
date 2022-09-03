import React from "react";

const boton = ({ text, className, google, alt, onClick, disabled}) => {
  return (
    <div>
      <button className={className} onClick={onClick} disabled={disabled}>

        <img src={google} alt={alt} />
        {text}

      </button>
    </div>
  )
}

export default boton;