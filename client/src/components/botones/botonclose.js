import React from "react";

const botonClose = ({ className, close, alt, onclick }) => {
  return (
    <div>
      <button className={className}>

        <img src={close} alt={alt} className='w-9 h-9 m-2' onClick={onclick} />

      </button>
    </div>
  );
}

export default botonClose;